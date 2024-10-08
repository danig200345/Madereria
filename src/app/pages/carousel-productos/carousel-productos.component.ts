import { Component, Input } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../models/producto.model';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carousel-productos',
  standalone: true,
  imports: [CarouselModule, RouterModule],
  templateUrl: './carousel-productos.component.html',
  styleUrl: './carousel-productos.component.css'
})
export class CarouselProductosComponent {

  @Input() title?: string

  productos: Producto[] = [];

  constructor(private productosService: ProductosService) { }
  ngOnInit(): void {
    this.productosService.getProducts().subscribe(data => {
      this.productos = data;
    });
  }
  scrollToTop() {
    try {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 400);
    } catch (error) {
      setTimeout(() => {
        window.scrollTo(0, 0);

      }, 400)

    }
  }
}


