import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselProductosComponent } from '../carousel-productos/carousel-productos.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CarouselModule, RouterModule, CarouselProductosComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {



}
