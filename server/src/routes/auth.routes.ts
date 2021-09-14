const config = require('config')
const Router = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const {check, validationResult} = require('express-validator')

Router.post('/registration', 
    [
        check('email', 'Uncorrent email').isEmail(),
        check('password', 'Введите пароль от 6 до 12 символов').isLength({min: 6, max: 12})
    ],

    async (req: any, res: any) => {
    try {
        console.log(req.body)
        const error = validationResult(req) 
        if (!error.isEmpty()) {
            return  res.status(400).json({message: 'Ошибка регистрации, пожалуйста повторите еще раз', error})
        }
        const {email, password} = req.body
        const  condidate = await User.findOne({email})

        if(condidate) {
            return res.status(400).json({message: `Пользователь с таким ${email} уже существует `})
        }
        const hashPassword = await bcrypt.hash(password, 8)

        const user = new User({email, password: hashPassword})
        await user.save()
        return res.json({message: 'Пользователь успешно зарегистрирован '})
    } catch (e) {
        console.log(e)
        res.send({message: 'Server error'})
    }
})


Router.post('/login', async (req: any, res: any) => {
    try {
        const{email, password} = req.body
        const user = await User.findOne({email})
        if(!user) {
            return res.status(404).json({message: "Указанный логин не существует"})
        }
        const isPassValid = bcrypt.compareSync(password, user.password)
        if (!isPassValid) {
            return res.status(400).json({message:"Неправильный пароль, попробуйте еще раз"})
        }
        const token = jwt.sign({id:user.id}, config.get('jwtSecret'), {expiresIn: '1h'})
        return res.json({
            token,
            user:{
                id: user.id,
                email:user.email,
                avatar: user.avatar
            }
        })
    } catch (e) {
        console.log(e)
        res.send({message: 'Server error'})
    }
})

module.exports = Router