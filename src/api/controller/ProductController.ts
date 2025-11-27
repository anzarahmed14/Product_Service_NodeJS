import { validate } from "class-validator";
import { ProductService } from "../../application/services/ProductService";
import { Request, Response } from "express";
import { ProductCreateDTO } from "../../application/dto/ProductCreateDTO";
import { ProductUpdateDTO } from "../../application/dto/ProductUpdateDTO";
import { plainToInstance } from "class-transformer";
export class ProductController{
    private service = new ProductService();

    getProduct = async(req:Request,res:Response)=>{
        try{
            const product = await this.service.getProductById(req.params.id);
            res.json(product);
        }catch(error){
            return res.status(404).json({ error: "Product not found" });
        }
        
          
        
    }

    createProduct = async (req: Request, res: Response) => {
        //const dto = Object.assign(new ProductCreateDTO(), req.body);
        const file = req.file;



        if (!file) {
            return res.status(400).json({ error: "File is required" });
        }
        const dto = plainToInstance(ProductCreateDTO, {
            productName: req.body.productName,
            productSKU: req.body.productSKU,
            price: req.body.price,
            productImage: req.file?.filename,
            categoryId: req.body.categoryId

        });


        try {
            // Validate DTO
            const errors = await validate(dto);
            if (errors.length > 0) {
                const formattedErrors = errors.map(err => ({
                    property: err.property,
                    constraints: err.constraints
                }));

                return res.status(400).json({
                    message: "Validation failed",
                    errors: formattedErrors
                });
            }

            // Call service
            const product = await this.service.createProduct(dto);
            return res.status(201).json(product);

        } catch (error: any) {
            console.error("Error creating user:", error);

            return res.status(500).json({
                message: "Internal server error",
                error: error.message || error.toString()
            });
        }
    };

    updateProduct = async (req: Request, res: Response) => {
      //  const dto = Object.assign(new ProductUpdateDTO(), req.body);
       const dto = plainToInstance(ProductUpdateDTO, {
            productName: req.body.productName,
            productSKU: req.body.productSKU,
            price: req.body.price,
            productImage: req.file?.filename,
            categoryId: req.body.categoryId

        });

        const id = req.params.id;
        const errors = await validate(dto);
        if (errors.length > 0) return res.status(400).json({ errors })
        const product = await this.service.updateProduct(id, dto);
        res.json(product);
    }

    deleteProduct = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            await this.service.deleteProduct(id);
            res.send();
        } catch (error) {
            return res.status(404).json({ error: "Product not found" });
        }
    }
    getProducts = async (req: Request, res: Response) => {
        try {
            const products = await this.service.getProducts();
            res.json(products)
        } catch (error) {
            return res.status(404).json({ error: "Products not found" });
        }
    }
}