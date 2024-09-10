import { ProductosService } from './../../services/productos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-producto-individual',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-individual.component.html',
  styleUrls: ['./producto-individual.component.css']
})
export class ProductoIndividualComponent implements OnInit {
  productId: number | null = null;
  product: Producto | undefined;

  constructor(private route: ActivatedRoute, private productosService: ProductosService) { }

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadProduct();
  }

  loadProduct(): void {
    if (this.productId !== null) {
      this.productosService.getProductById(this.productId).subscribe(
        (data: Producto | undefined) => {
          this.product = data;
        }
      );
    }
  }
}
