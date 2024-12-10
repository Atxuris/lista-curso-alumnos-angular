import { Component, OnInit } from '@angular/core';
import { cursos } from '../tabla-cursos/mock'
import { NgFor } from '@angular/common';
import { Curso } from '../../models/curso-to';

@Component({
  selector: 'app-tabla-cursos',
  imports: [NgFor],
  templateUrl: './tabla-cursos.component.html',
  styleUrl: './tabla-cursos.component.css'
})
export class TablaCursosComponent implements OnInit {
  public cursos?: Curso[]

  ngOnInit(): void {
    this.cursos = cursos
  }
}
