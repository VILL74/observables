import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AlertInterface } from './alert.interface';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private data= new BehaviorSubject<AlertInterface>({message:'',show:false});
  //data$ es un observable que en los componentes pueden suscribirse para recibir 
  //actualizaciones sobre el estado de visibilidad de las alertas
  data$: Observable<AlertInterface>= this.data.asObservable();
  constructor() { }

  show(alert:AlertInterface):void{
    this.data.next(alert);
  }

  hide():void{
    this.data.next({message:'',show:false});
  }
}
