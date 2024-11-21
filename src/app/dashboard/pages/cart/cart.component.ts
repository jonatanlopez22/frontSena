
import { CartService } from './../../../services/cart.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';



@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export  default class CartComponent {

  public cartService = inject(CartService)
}
