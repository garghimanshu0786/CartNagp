import {Product} from './Product'
import {Injectable } from '@angular/core'
@Injectable({
     providedIn:'root'
})

    export class CartService{
         constructor(){}
         public cartItems:Array<Product>=[];
         public total:number=0;

      
        public setProduct(product:Product){
          
        let item = this.cartItems.find(item=> item.ProductId == product.ProductId);
             if (item != null){
          item.Quantity +=1 ;
             }
             else
             {
               this.cartItems.push(product );
             }
             
             this.total += product.Price;

        }
}