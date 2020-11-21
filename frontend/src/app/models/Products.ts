export interface Variants{
  _id:String,
  color:String,
  size : [],
  quantity:Number
} 

export interface Product {
  _id:String,
  name:String,
  price:Number,
  variants: [Variants],
  
}


