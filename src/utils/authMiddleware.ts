import { Request, Response, NextFunction } from 'express';
import { verifyToken } from './verifyToken';

export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const authHeader = req.headers['authorization'];
    const token = authHeader?.split(' ')[1];

    if (!token) {
        res.status(401).json({ error: 'No token provided' });
        return;
    }

    try {
        const decoded = verifyToken(token);
        (req as any).user = decoded; // Attach decoded user data to the request
        next();
    } catch (error) {
        res.status(401).json({ error: (error as Error).message });
    }
};
