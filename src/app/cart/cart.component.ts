import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {ProductService} from '../productService';
import { Product } from '../Product';
import {CartService} from '../CartService';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartitems:Array<Product>=[];
  id;
sub;
total:number;
addedItem;
products:Array<Product>;
  constructor(private cartService:CartService, private activatedRoute : ActivatedRoute,private productService:ProductService) { 

    this.products= this.productService.getProducts();

  }

  ngOnInit(): void {
  this.sub =  this.activatedRoute.paramMap.subscribe( param =>{
    this.id = param.get('id');
    this.addedItem  = this.products.find(p => p.ProductId == this.id); 
    this.cartService.setProduct(this.addedItem);
  this.cartitems = this.cartService.cartItems;
this.total  =this.cartService.total;}
      ) ;
  }
ngOnDestroy(){
this.sub.unsubscribe();
}
  
}
