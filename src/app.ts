import express from 'express';
import productsRoutes from './api/routes/products.routes';
import categoryRoutes from './api/routes/category.routes';


const app = express();
app.use(express.json());
app.use("/api/products",productsRoutes);
app.use("/api/category",categoryRoutes)
app.get("/", (request, respose)=>respose.send({status: "Ok"}));

export default app;
