import express from 'express';
import productsRoutes from './api/routes/products.routes';
import categoryRoutes from './api/routes/category.routes';
import imageRoutes from './api/routes/image.routes';


const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));
app.use("/api/products",productsRoutes);
app.use("/api/category",categoryRoutes);
app.use("/api/images",imageRoutes);
app.get("/", (request, respose)=>respose.send({status: "Ok"}));

export default app;
