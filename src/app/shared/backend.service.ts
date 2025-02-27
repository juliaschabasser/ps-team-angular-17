import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  public getAkademischeGrade() {
    return this.http.get<any>('http://localhost:5000/akademischeGrade')
    .pipe(
      map(value => {
        console.log(value);
        value.forEach((element: { name: string; }) => {
          element.name = "Akademischer Grad:" + element.name
        });
        return value;
      })
    )
  }
}
