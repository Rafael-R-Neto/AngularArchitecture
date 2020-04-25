import { Injectable } from "@angular/core";  
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { APP_API } from '../app.api';

@Injectable()
export class Services {
    
    constructor(private http: HttpClient) { }

    getData(tenant): Observable<any[]> {
        let ret = this.http.get<any[]>(`${APP_API}/${tenant}`)
            .pipe(map(res => res))
        return ret;
    }
}