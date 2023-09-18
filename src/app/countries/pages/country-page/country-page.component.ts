import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  constructor(
    private countriesService: CountriesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    )
    {}



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
 //! la funcion comentariada de arriba hace lo miismo que la de abajo
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.countriesService.searchCountryByAlphaCode(id)),
    )
    .subscribe(country =>{

      if ( !country){
        return this.router.navigateByUrl('')
      }

      console.log('TENEMOS UN PAIS')
      return
    })
  }






  }
