import { Injectable } from '@angular/core';
import { Trabajos } from './trabajos';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TrabajosService {
  private URL = 'https://fluentjobsclone.firebaseio.com/trabajos'

  constructor(private http: HttpClient) { }


  getTrabajos() {

  }

  getTrabajo() {

  }
  saveTrabajo() {

  }
  deleteTrabajo() {

  }
  updateTrabajo() {

  }
}
