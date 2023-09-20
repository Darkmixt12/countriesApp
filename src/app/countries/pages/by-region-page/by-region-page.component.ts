import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';
import { CacheStore } from '../../interfaces/cache-store.interface';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {

  
  public region: Country[] = [];
  public regions: Region[]= ['Africa' , 'Europe' , 'Americas' , 'Asia' , 'Oceania'];
  public selectedRegion?: Region

  constructor( private countryService: CountriesService){}

  ngOnInit(){
    this.selectedRegion = this.countryService.cacheStore.byRegion.region
    this.region = this.countryService.cacheStore.byRegion.countries
  }
  searchByRegion(region: Region): void{

    this.selectedRegion = region;

    this.countryService.searchRegion(region)
    .subscribe(countries => {
      this.region = countries
    })
  }
}
