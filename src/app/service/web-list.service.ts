import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class WebListService {

  constructor( private http:HttpClient) {

   }

   public obterListas(){
     return this.http.get("https://jsonplaceholder.typicode.com/users")
   }
}
