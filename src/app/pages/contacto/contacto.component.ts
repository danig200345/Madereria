import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-contacto', // Nombre del selector HTML para usar este componente
  standalone: true, // Indica que este componente es autónomo y no depende de un módulo
  imports: [RouterModule, ReactiveFormsModule], // Módulos necesarios
  templateUrl: './contacto.component.html', // Ruta del archivo HTML que define la plantilla del componente
  styleUrls: ['./contacto.component.css'] // Ruta del archivo CSS que define los estilos del componente
})
export class ContactoComponent implements OnInit { // La clase implementa OnInit para el ciclo de vida del componente
  contactForm: FormGroup; // Definición del formulario de contacto
  loading = false; // Indicador de carga
  sentMessage = false; // Indicador de mensaje enviado
  errorMessage = ''; // Mensaje de error
  private _success = new Subject<string>(); // Subject para manejar mensajes de éxito
  private _error = new Subject<string>(); // Subject para manejar mensajes de error

  // Constructor para inyectar servicios necesarios: FormBuilder y HttpClient
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    // Inicialización del formulario con validaciones para cada campo
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required], // Campo nombre, obligatorio
      email: ['', [Validators.required, Validators.email]], // Campo email, obligatorio y debe ser un email válido
      subject: ['', Validators.required], // Campo asunto, obligatorio
      message: ['', Validators.required] // Campo mensaje, obligatorio
    });
  }

  ngOnInit() {
    // Suscripción al Subject de éxito para manejar el estado del mensaje enviado
    this._success.subscribe(() => this.sentMessage = true);
    // Desactivar el mensaje de éxito después de 5 segundos
    this._success.pipe(debounceTime(5000)).subscribe(() => this.sentMessage = false);

    // Suscripción al Subject de error para mostrar mensajes de error
    this._error.subscribe(message => this.errorMessage = message);
    // Desactivar el mensaje de error después de 10 segundos
    this._error.pipe(debounceTime(10000)).subscribe(() => this.errorMessage = '');
  }

  // Método para manejar el envío del formulario
  onSubmit(): void {
    if (this.contactForm.valid) {
      this.loading = true;
      this.sentMessage = false;
      this.errorMessage = '';

      // Utilizando Formspree para enviar el formulario
      this.http.post('https://formspree.io/f/mzzpbnaj', this.contactForm.value)
        .subscribe(
          response => {
            this.loading = false;
            this._success.next('');
            this.contactForm.reset();
          },
          error => {
            this.loading = false;
            this._error.next('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
          }
        );
    } else {
      this.contactForm.markAllAsTouched();
      this._error.next('Por favor, completa todos los campos del formulario.');
    }
  }

  email = 'redes.sociales@anypack.mx';

  scrollTop() {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 50);
  }

}
