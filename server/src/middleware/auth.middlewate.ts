import jwt from 'jsonwebtoken'
import config from 'config'

function authMiddleware(req: any, res: any, next: any) {
    if (req.method === 'OPTIONS') {
        return next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(401).json({ message: 'Auth error' })
        }
        const decoded = jwt.verify(token, config.get('jwtSecret'))
        req.user = decoded
        next()
    } catch (e) {
        return res.status(401).json({ message: 'Auth errors' })
    }
}

export default authMiddleware
