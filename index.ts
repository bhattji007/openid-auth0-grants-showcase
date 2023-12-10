    import express from 'express';
    import morgan from 'morgan';
    import helmet from 'helmet';
    import dotenv from 'dotenv';
    import router from './routes';
    import cookieParser from 'cookie-parser';

    const app = express();


    dotenv.config();
    app.use(morgan('dev'));
    app.use(helmet());
    app.use(cookieParser());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(router)
    
        app.listen(process.env.PORT, () => {
        console.log(`server is running on http://localhost:${process.env.PORT}`);
        });