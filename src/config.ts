import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export const JWT_SECRET: string = process.env.JWT_SECRET || 'default_secret';
export const TOKEN_EXPIRY: string = process.env.TOKEN_EXPIRY || '1h';
