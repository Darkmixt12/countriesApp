import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

type Region = 'Africa' | 'Europe' | 'Americas' | 'Asia' | 'Oceania'

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public region: Country[] = [];
  public regions: Region[]= ['Africa' , 'Europe' , 'Americas' , 'Asia' , 'Oceania'];
  public selectedRegion?: Region

  constructor( private countryService: CountriesService){}

  searchByRegion(region: Region): void{

    this.selectedRegion = region;

    this.countryService.searchRegion(region)
    .subscribe(countries => {
      this.region = countries
    })
  }
}
