const Router = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcryptjs')
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
        const hashPassword = await bcrypt.hash(password, 15)

        const user = new User({email, password: hashPassword})
        await user.save()
        return res.json({message: 'Пользователь успешно зарегистрирован '})
    } catch (e) {
        console.log(e)
        res.send({message: 'Server error'})
    }
})

module.exports = Router