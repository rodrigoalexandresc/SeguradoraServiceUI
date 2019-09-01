import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";


@Injectable()
export class PriceService {
    constructor(private httpClient: HttpClient) {        
    }

    post(dadosSeguro: any): Observable<any> {        
        let request = {
            "nome": dadosSeguro.Nome,
            "nascimento": dadosSeguro.Nascimento,
            "endereco": 
            {
                "logradouro": dadosSeguro.Logradouro,
                "bairro": dadosSeguro.Bairro,
                "cep": dadosSeguro.CEP,
                "cidade": dadosSeguro.Cidade
                
            },
            "coberturas":dadosSeguro.Coberturas            
        }
        return this.httpClient.post<any>(`${environment.api}/price`, request);
    }
}
    
