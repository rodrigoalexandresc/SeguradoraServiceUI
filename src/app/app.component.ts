import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoberturaService } from './services/cobertura.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { PriceService } from './services/price.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'SeguradoraUI';
  coberturas$: Observable<any>;
  form: FormGroup;
  ultimaCotacao: any;
  erros: any;

  get coberturasform() {
    return this.form.get('Coberturas') as FormArray;
  }

  constructor(private coberturaService: CoberturaService, 
    private priceService: PriceService,
    private fb: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.coberturas$ = this.coberturaService.obter();
    this.form = this.fb.group({
      Nome: ['', Validators.required],
      Nascimento: [null, Validators.required],
      Logradouro: [''],
      Bairro: [''],
      CEP: ['', Validators.required],
      Cidade: ['', Validators.required],
      Coberturas: this.fb.array([
        this.fb.control(0)
      ])
    })
  }

  adicionarCobertura() {
    this.coberturasform.push(this.fb.control(0, Validators.required));
  }  
  
  removerCobertura(i: number) {
    this.coberturasform.removeAt(i);
  }

  enviarClick() {
    const formData = this.form.value;
    this.priceService.post(formData).subscribe(data => {
      this.erros = null;
      this.ultimaCotacao = {
        premio: data.premio,
        parcelas: data.parcelas,
        valor_Parcelas: data.valor_Parcelas,        
        primeiro_Vencimento: new Date(data.primeiro_Vencimento).toLocaleDateString(),
        cobertura_Total: data.cobertura_Total
      }
    },
    errorResponse => {
      this.erros = errorResponse.error;
      this.ultimaCotacao = null;
    })
  }
}
