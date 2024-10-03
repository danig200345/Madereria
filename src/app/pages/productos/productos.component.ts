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
  selectedCategory: string = '';

  constructor(private productosService: ProductosService) { }
  ngOnInit(): void {
    this.productosService.getProducts().subscribe(data => {
      this.productos = data;
    });
  }
  // Método para filtrar productos por categoría
  onSelectCategory(event: Event): void {
    const element = event.target as HTMLElement;
    const category = element.textContent?.trim() || ''; // Obtiene la categoría desde el texto del enlace

    // Verifica que haya una categoría seleccionada
    if (category) {
      this.selectedCategory = category;
      // Llama al servicio para obtener productos por categoría
      this.productosService.getProductsByCategory(category).subscribe(data => {
        this.productos = data;
      });
    }
  }
}
