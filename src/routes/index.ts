import { Router, Request, Response } from 'express';
import resize from './api/resize';

const routes = Router();

routes.use('/resize', resize);

routes.get('*', (req: Request, res: Response) => {
    res.status(404);
    res.send(`<h1> Page is not Found </h1>`);
});

export default routes;
