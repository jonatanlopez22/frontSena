import { ProductService } from '../../../services/product.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-shoes',
  standalone: true,
  imports: [CommonModule],
  templateUrl:   './shoes.component.html',
  styleUrl: './shoes.component.css'
})
export default class ShoesComponent {

public productService = inject(ProductService)

}

