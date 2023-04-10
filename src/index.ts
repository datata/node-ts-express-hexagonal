import express, { Request, Response } from 'express';
import "dotenv/config.js";
const PORT  = process.env.PORT || 3000;

const bootstrap = () =>{
    const app = express();
    app.use(express.json());
    
    app.listen(PORT, () => console.log(`Sever is running on port ${PORT}`));
}

bootstrap();