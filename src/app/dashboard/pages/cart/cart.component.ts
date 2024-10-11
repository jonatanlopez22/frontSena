import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterLink,],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export  default class CartComponent {


}
