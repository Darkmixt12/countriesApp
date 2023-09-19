import { Component, EventEmitter, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { delay } from 'rxjs';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  
  constructor( private  countriesService: CountriesService){}

  searchByCapital(term : string): void{
    // console.log('Desde capital page')
    // console.log({term})
    this.isLoading = true
    
    this.countriesService.searchCapital(term)
    .subscribe(countries => {
      this.countries = countries;
      this.isLoading = false;
    }
  )// si no nos suscribimos al observable no va a haber peticion ni regresar nada

  }

  
}
