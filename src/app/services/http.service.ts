import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  serviceUrl = "http://localhost:3000/tasks";
  httpClient = inject(HttpClient);
  constructor() { }

  addTudo(task: string){
    return this.httpClient.post(this.serviceUrl, {
      title: task,
      isImportant: false,
      isCompleted: false
    })
  }

  getAllTudos(){
    return this.httpClient.get(this.serviceUrl);
  }

  updateTudo(tudo: any){
    return this.httpClient.put(this.serviceUrl +'/'+tudo.id, tudo);
  }

  deleteTudo(tudo: any){
    return this.httpClient.delete(this.serviceUrl +'/'+tudo.id, tudo);
  }
}
