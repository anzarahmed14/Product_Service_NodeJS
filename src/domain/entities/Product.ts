import { Category } from "./Category";

export class Product{
    constructor(public id:string,
        public productName:string,
        public productSKU:string,
        public price:number,
        public category:Category,
        public createdAt:Date,
        public updatedAt:Date
    ){}
}