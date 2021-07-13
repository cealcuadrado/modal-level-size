import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private sujetoNivelTamannio = new Subject<number>();

  constructor() { }

  public setearNivelTamannio(nivel: number): void {
    this.sujetoNivelTamannio.next(nivel);
  }

  public obtenerNivelTamannio(): Observable<number> {
    return this.sujetoNivelTamannio.asObservable();
  }
}
