import { DataSource } from "typeorm";
import { ProductEntity } from "./entities/ProductEntity";
import { CategoryEntity } from "./entities/CategoryEntity";
import { ImageEntity } from "./entities/ImageEntity";

export const AppDataSource = new DataSource({
    type:"mssql",
    url:"mssql://sa:Test%402014@127.0.0.1:1433/demoprojectdb",
    //url: "mssql://sa:Test%402014@host.docker.internal:1433/demoprojectdb",
    synchronize: false,
    logging:true,
   // entities:[CategoryEntity,ProductEntity,ImageEntity],
    entities:[ProductEntity,CategoryEntity],
    options:{
        encrypt:false,
         trustServerCertificate: true
    }
})