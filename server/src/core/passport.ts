import passport = require('passport')
import { Strategy as JWTstrategy, ExtractJwt } from 'passport-jwt'
import { UserModel, UserModelInterface } from '../models/user'

passport.use(
    new JWTstrategy(
        {
            secretOrKey: process.env.SECRET_KEY || '123',
            jwtFromRequest: ExtractJwt.fromHeader('token'),
        },
        async (payload: { data: UserModelInterface }, done): Promise<void> => {
            try {
                const user = await UserModel.findById(payload.data._id).exec()

                if (user) {
                    return done(null, user)
                }

                done(null, false)
            } catch (error) {
                done(error, false)
            }
        },
    ),
)

passport.serializeUser((user: any, done) => {
    done(null, user?._id)
})

passport.deserializeUser((id, done) => {
    UserModel.findById(id, (err: any, user: any) => {
        done(err, user)
    })
})

export { passport }
