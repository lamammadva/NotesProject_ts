import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({path:path.join(__dirname,'../../.env')})

export default {
    port : process.env.PORT,
    databaseUrl: process.env.DATABASE_URL,
    jwtSecret: process.env.JWT_SECRET,
}