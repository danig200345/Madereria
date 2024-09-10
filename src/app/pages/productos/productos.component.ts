import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { ProductosService } from './../../services/productos.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [RouterModule, NgxPaginationModule, CommonModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  p: number = 1;
  productos: Producto[] = [];

  constructor(private productosService: ProductosService) { }
  ngOnInit(): void {
    this.productosService.getProducts().subscribe(data => {
      this.productos = data;
    });
  }
}
