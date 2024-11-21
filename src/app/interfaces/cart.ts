import { Product } from "./product";

export interface Cart {
  "idProducto": number;
  "username": String,
  "producto": Product,
  "cantidad": number
}
