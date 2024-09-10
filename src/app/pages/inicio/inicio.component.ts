import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CarouselModule, RouterModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  productos: Producto[] = [];



  constructor(private productosService: ProductosService) { }
  ngOnInit(): void {
    this.productosService.getProducts().subscribe(data => {
      this.productos = data;
    });
  }

}
