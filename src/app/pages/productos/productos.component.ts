import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { ProductosService } from './../../services/productos.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [RouterModule, NgxPaginationModule, CommonModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  p: number = 1;
  collection: Array<any>;

  constructor(private productosService: ProductosService) {
    this.collection = this.productosService.getProducts();
  }
}
