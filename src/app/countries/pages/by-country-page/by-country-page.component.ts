import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [ 
  ]
})
export class ByCountryPageComponent implements OnInit{

  public initialValue: string = ''
  public countries: Country[] = [];
  
  constructor( private  countriesService: CountriesService){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries
    this.initialValue = this.countriesService.cacheStore.byCountries.term
  }

  searchByCountry(term : string): void{
    // console.log('Desde capital page')
    // console.log({term})
    this.countriesService.searchCountry(term)
    .subscribe(countries => {
      this.countries = countries;
    }
  )// si no nos suscribimos al observable no va a haber peticion ni regresar nada

  }

}
