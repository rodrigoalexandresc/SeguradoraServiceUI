import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";


@Injectable()
export class CoberturaService {
    constructor(private httpClient: HttpClient) {        
    }

    obter(): Observable<any> {
        return this.httpClient.get<any>(`${environment.api}/cobertura`);
    }
}
    
