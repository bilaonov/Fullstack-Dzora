import jwt from 'jsonwebtoken'
import config from 'config'

export function authMiddleware(req: any, res: any, next: any) {
    const token = req.header('x-auth-token')

    if (!token) {
        res.status(401).json({ message: 'No token' })
    }

    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'))

        req.user = decoded
        next()
    } catch {
        res.status(401).json({ msg: 'Token is not valid.' })
    }
}
