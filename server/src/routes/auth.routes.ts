import Router, { Request, Response } from 'express'
import User from '../models/user'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { check, validationResult } from 'express-validator'
import { IUser } from '../@types'
import config from 'config'
import authMiddleware from '../middleware/auth.middlewate'

const router = Router()

router.post(
    '/registration',
    [
        check('email', 'Uncorrent email').isEmail(),
        check('password', 'Введите пароль от 6 до 12 символов').isLength({
            min: 6,
            max: 12,
        }),
    ],

    async (req: Request, res: Response): Promise<void> => {
        try {
            console.log(req.body)
            const error = validationResult(req)
            if (!error.isEmpty()) {
                res.status(400).json({
                    message: 'Ошибка регистрации, пожалуйста повторите еще раз',
                    error,
                })
            }
            const { name, email, password } = req.body
            const condidate = await User.findOne({ email })

            if (condidate) {
                res.status(400).json({
                    message: `Пользователь с таким ${email} уже существует `,
                })
            }
            const hashPassword = await bcrypt.hash(password, 8)

            const user: IUser = new User({
                name,
                email,
                password: hashPassword,
            })
            await user.save()
            res.json({ message: 'Пользователь успешно зарегистрирован ' })
        } catch (e) {
            console.log(e)
            res.send({ message: 'Server error' })
        }
    },
)

router.post('/login', async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body
        const user: any = await User.findOne({ email })
        if (!user) {
            res.status(404).json({ message: 'Указанный логин не существует' })
        }
        const isPassValid = bcrypt.compareSync(password, user.password)
        if (!isPassValid) {
            res.status(400).json({
                message: 'Неправильный пароль, попробуйте еще раз',
            })
        }
        const token = jwt.sign({ id: user.id }, config.get('jwtSecret'), {
            expiresIn: '1h',
        })
        res.json({
            token,
            id: user.id,
            name: user.name,
            email: user.email,
        })
    } catch (e) {
        console.log(e)
        res.send({ message: 'Server error' })
    }
})

router.get('/me', authMiddleware, async (req: Request, res: Response): Promise<void> => {
    try {
        //@ts-ignore
        const user: any = await User.findOne({ _id: req.user.id })
        const token = jwt.sign({ id: user.id }, config.get('jwtSecret'), { expiresIn: '1h' })
        res.json({
            token,
            name: user.name,
            id: user.id,
            email: user.email,
            avatar: user.avatar,
        })
    } catch (e) {
        console.log(e)
        res.send({ message: 'Server error' })
    }
})

export default router
