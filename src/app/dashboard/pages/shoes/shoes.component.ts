import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shoes',
  standalone: true,
  imports: [CommonModule,RouterLink,],
  templateUrl: './shoes.component.html',
  styleUrl: './shoes.component.css'
})
export default class ShoesComponent {

}
