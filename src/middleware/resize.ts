import { Request, Response, NextFunction } from 'express';
import sharp from 'sharp';

export const resize = (req: Request, res: Response, next: NextFunction) => {
    const { filename } = req.query;

    sharp('${filename}.jpg')
    .resize(200, 300)
    .toFile('output.png')
    

    if (!filename) return res.status(404).send('wrong image filename');

    next();
};
