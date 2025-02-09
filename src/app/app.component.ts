import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablaAlumnosComponent } from './components/tabla-alumnos/tabla-alumnos.component';
import { TablaCursosComponent } from './components/tabla-cursos/tabla-cursos.component';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgIf, TablaAlumnosComponent, TablaCursosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  cursos: boolean = true;

  handleCambio() {
    this.cursos = !this.cursos;
  }
}
