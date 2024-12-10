import jwt from 'jsonwebtoken';
import { JWT_SECRET, TOKEN_EXPIRY } from '../config';

interface Payload {
    [key: string]: any;
}

export const generateToken = (payload: Payload): string => {
    try {
        return jwt.sign(payload, JWT_SECRET, { expiresIn: TOKEN_EXPIRY });
    } catch (error) {
        throw new Error('Error generating token: ' + (error as Error).message);
    }
};
