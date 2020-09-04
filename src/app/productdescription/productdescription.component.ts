import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router } from '@angular/router';
import {Product} from '../Product';
import {ProductService} from '../productService'

@Component({
  selector: 'app-productdescription',
  templateUrl: './productdescription.component.html',
  styleUrls: ['./productdescription.component.css']
})
export class ProductdescriptionComponent implements OnInit {

  id ;
selectedProduct:Product;
sub;
products:Array<Product>;
  
  constructor(private router:Router,private activatedRoute : ActivatedRoute,private productService:ProductService) { 

    this.products= this.productService.getProducts();

  }

  ngOnInit(): void {
  this.sub =  this.activatedRoute.paramMap.subscribe( param =>{
      this.id = param.get('id');
    this.selectedProduct  = this.products.find(p => p.ProductId == this.id); }
      ) ;
  }
  onClick(){
    this.router.navigate(['cart',this.id]);
  }
ngOnDestroy(){
this.sub.unsubscribe();
}


}
