import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  //variable privada que almacena todos los productos
  private collection = 'productos.json'

  constructor(private http: HttpClient) { }

  // Método para obtener todos los productos desde el archivo JSON
  getProducts(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.collection);
  }

  // Método para obtener un producto específico por su ID
  getProductById(id: number): Observable<Producto | undefined> {
    return this.http.get<Producto[]>(this.collection).pipe(
      map((productos: Producto[]) => productos.find(producto => producto.id === id))
    );
  }
}
