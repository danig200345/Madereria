import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SeoService } from './services/seo.service';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  seo = inject(SeoService)
  ngOnInit(): void {
    this.seo.title.setTitle("Madereria Capilla")
    this.seo.meta.updateTag({
      name: 'description',
      content: 'Madereria Capilla ofrece productos de madera de alta calidad y servicios de carpintería personalizada para proyectos residenciales y comerciales. Comprometidos con la excelencia y la satisfacción del cliente.'
    });
    this.seo.setCanonicalUrl("madereriacapilla.com")
    this.seo.setIndexFollow(true)

  }
}
