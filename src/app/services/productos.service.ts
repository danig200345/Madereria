import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  //variable privada que almacena todos los productos
  private collection: Array<any> = [
    {
      id: 1,
      name: 'madera',
      price: '$500',
      image: 'imgs/328.jpg',
      description: 'Hola',
      colors: ['color-dot-red', 'color-dot-blue', 'color-dot-black', 'color-dot-light', 'color-dot-green']
    },
    {
      id: 2,
      name: 'madera',
      price: '$500',
      image: 'imgs/329.jpg',
      description: 'Hola1',
      colors: ['color-dot-red', 'color-dot-blue', 'color-dot-black', 'color-dot-light', 'color-dot-green']
    },
    {
      id: 3,
      name: 'madera',
      price: '$500',
      image: 'imgs/329.jpg',
      description: 'Hola2',
      colors: ['color-dot-red', 'color-dot-blue', 'color-dot-black', 'color-dot-light', 'color-dot-green']
    },
  ];

  constructor() { }

  //metodo que devuelve todos los productos
  getProducts(): Array<any> {
    return this.collection;
  }
  //metodo que obtiene todas las id de los productos
  getProductById(id: number): any {
    return this.collection.find(product => product.id === id);
  }
}
