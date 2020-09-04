import {Product} from './Product'
import {Injectable } from '@angular/core'
@Injectable({
     providedIn:'root'
})

    export class ProductService{
   public getProducts(){

   let  products:Product[];
   products  =  [
        new Product(1, "LG 32 inch HD Ready TV", 12000, "Hd Ready Tv with android OS","Smart TV","TV",1 ,"Yes"),
        new Product(2, "Samsung M30 Smartphone", 13000, "Samsung M30 with 20 MP camera","Smartphone","Mobiles",1 ,"Yes"),
        new Product(3, "Nokia 1100", 2000, "Nokia feature phone with dual sim","Feature Phone","Mobiles",1 ,"No"),
        new Product(4, "Lenovo L490 Laptop", 80000, "Lenovo L490 with 256 GB SSD","Lenovo Laptop","Laptops",1 ,"Yes")
          ]
   return products;
        }
}