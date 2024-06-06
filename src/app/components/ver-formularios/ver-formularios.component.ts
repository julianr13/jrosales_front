import { Component , OnInit} from '@angular/core';
import { ApiService } from '../../services/api.service';
 import { Formularios } from '../../models/formularios';
import { Campos } from '../../models/campos';
@Component({
  selector: 'app-ver-formularios',
  templateUrl: './ver-formularios.component.html',
  styleUrl: './ver-formularios.component.css'
})  

 
export class VerFormulariosComponent implements OnInit{
	formularios: Formularios[] = []; 
	campos:  Campos[]   =[];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getFormualarios().subscribe(data => {
		
      this.formularios = data;
    });
  }
   showDetalles(idFormulario: number): void {
    this.apiService.getCampos(idFormulario).subscribe((data: Campos[]) => {
       
      if (Array.isArray(data)) {
        this.campos = data;
      } else {
        console.error('Expected an array of campos');
      }
    });
  }
}
