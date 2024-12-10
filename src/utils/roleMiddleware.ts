import { Request, Response, NextFunction } from 'express';

export const roleMiddleware =
    (requiredRole: string) =>
    (req: Request, res: Response, next: NextFunction): void => {
        const user = (req as any).user;

        if (!user || user.role !== requiredRole) {
            res.status(403).json({ error: 'Insufficient permissions' });
            return;
        }

        next();
    };
