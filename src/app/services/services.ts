import { Injectable } from "@angular/core";  
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { APP_API } from '../app.api';

@Injectable()
export class Services {
    
    constructor(private http: HttpClient) { }

    getAll(tenant): Observable<any[]> {
        return this.http.get<any[]>(`${APP_API}/${tenant}`)
            .pipe(map(res => res))
    }

    getById(tenant, controller, id): Observable<any> {
        return this.http.get<any>(`${APP_API}/${tenant}/${controller}/${id}`)
            .pipe(map(resp => resp))
    }

    post(tenant, controller, data): Observable<any> {
        return this.http.post<any>(`${APP_API}/${tenant}/${controller}`, data)
            .pipe(map(resp => resp))
    }

    put(tenant, controller, data, id): Observable<any> {
        return this.http.put<any>(`${APP_API}/${tenant}/${controller}/${id}`, data)
            .pipe(map(resp => resp))
    }

    delete(tenant, controller, id): Observable<any> {
        return this.http.delete<any>(`${APP_API}/${tenant}/${controller}/${id}`)
            .pipe(map(resp => resp))
    }
}