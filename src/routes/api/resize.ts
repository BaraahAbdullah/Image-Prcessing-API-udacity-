import { Router, Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { validation } from '../../middleware/validation';
import { resize} from '../../middleware/resize';

import sharp from 'sharp';
//const sharp = require('sharp');
const route = Router();

route.get('/', validation , (req: Request, res: Response) => {
    const filename = req.query.filename;
    const imagePath = path.join(
        __dirname,
        '../../../images',
        `${filename}.jpg`
    );

    if (fs.existsSync(imagePath)) {
        return res.sendFile(imagePath);
    }


    return res.status(404).send('Image not found');
});

export default route;



