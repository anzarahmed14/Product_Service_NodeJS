import app from './app';
import { AppDataSource } from './infrastructure/db';
const PORT = 900;

AppDataSource.initialize().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Application running at http://localhost:${PORT}`)
      console.log("Database connected");
    })
}).catch(error => {
    console.log(`Database:${error.message}`)
})