import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';


@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: []
})
export class CountryPageComponent implements OnInit {

  constructor(
    private countriesService: CountriesService,
    private activatedRoute: ActivatedRoute) { }


  // ngOnInit(): void {
  //   this.activatedRoute.params
  //   .subscribe( ({id}) => { // podemos destructurar el params para dejarlo en solo ID params   =   ({ id })
  //     //console.log({params: id })
  //     this.countriesService.searchCountryByAlphaCode(id)
  //     .subscribe(country => {
  //       console.log({country})
  //     });
  //   });
  // }
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap
      );
  }

}
