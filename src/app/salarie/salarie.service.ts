import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
@Injectable()
export class SalarieService {

  constructor(private http: HttpClient) { }

  findSalarie(): Observable<any> {
    return this.http.get(environment.url + '/salarie');
  }
  findSalarieByCriteria(criteria: string): Observable<any> {
    return this.http.get(environment.url + '/salarie/' + criteria);
  }

}
