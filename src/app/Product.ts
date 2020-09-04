export class Product {
    constructor( productid:Number,  productName:String, price:number,description:String, tags :String, category:String,quantity:number,returnable :String){
    this.ProductId = productid,
      this.ProductName = productName,
      this.Price = price,
      this.Description = description,
      this.Tags = tags,
      this.Category = category,
      this.Quantity = quantity,
      this.Returnable = returnable
    }
    ProductId :Number
      ProductName:String;
      Price:number;
         Description:String;
        Tags:String;
        Category:String;        
        Returnable:String;
        quantity :number;
        
        get Quantity(): number {
            return this.quantity;
        }
        set Quantity(value: number) {
            this.quantity = value;
        }
  }
  