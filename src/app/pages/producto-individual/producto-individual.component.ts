import { ProductosService } from './../../services/productos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto.model';
import { CarouselProductosComponent } from '../carousel-productos/carousel-productos.component';

@Component({
  selector: 'app-producto-individual',
  standalone: true,
  imports: [CommonModule, RouterModule, CarouselProductosComponent],
  templateUrl: './producto-individual.component.html',
  styleUrls: ['./producto-individual.component.css']
})
export class ProductoIndividualComponent implements OnInit {
  productId: number | null = null;
  product: Producto | undefined;
  mainImage: string = '';

  constructor(private route: ActivatedRoute, private productosService: ProductosService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = Number(params.get('id'));
      if (this.productId !== null) {
        this.loadProduct();
      }
    });
  }

  loadProduct(): void {
    if (this.productId !== null) {
      this.productosService.getProductById(this.productId).subscribe(
        (data: Producto | undefined) => {
          this.product = data;
          if (data) {
            this.mainImage = data.image;
          }
        }
      );
    }
  }

  updateMainImage(imageSrc: string): void {
    this.mainImage = imageSrc;
  }
}