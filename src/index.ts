import express, { Request, Response } from 'express';
import "dotenv/config.js";
import {router as authRoutes} from './auth/infrastructure/routes/authRoutes'

const bootstrap = () =>{
    const app = express();
    app.use(express.json());
    const PORT  = process.env.PORT || 3000;

    app.use('/api', authRoutes)
    
    app.listen(PORT, () => console.log(`Sever is running on port ${PORT}`));
}

bootstrap();
