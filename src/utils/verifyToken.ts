import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config';

export const verifyToken = (token: string): object | string => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        throw new Error(
            'Invalid or expired token: ' + (error as Error).message
        );
    }
};
