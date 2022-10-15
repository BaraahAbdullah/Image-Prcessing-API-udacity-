// import express from 'express'
// import sharp from 'sharp';

// const app = express();
// const port =3000;







// app.listen(port, () => {
//     console.log('server start at port: ${port}');
// });



import express from 'express';
import routes from './routes';

const app = express();
const port = 3000;

app.use('/', routes);

app.listen(port, () => {
    console.log(`.....listen on port ${port}`);
});

export default app;





