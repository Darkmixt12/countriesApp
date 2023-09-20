import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({providedIn: 'root'})
export class CountriesService {

	private apiUrl: string = 'https://restcountries.com/v3.1'

	// Mantiene la data entre paginas // 
	public cacheStore: CacheStore = {
		byCapital: 		{	term: '', 	countries: []},
		byCountries:	{	term: '', 	countries: []},
		byRegion: 		{ 	region:'', 	countries: []},
	}


	constructor(private http: HttpClient) { }


	// searchCountryByAlphaCode( code: string): Observable<Country[]>{
	// 	return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
	// 	.pipe(
	// 		catchError( () => of ([]))
	// 	)

	// }
	searchCountryByAlphaCode(code: string):Observable<Country | null>{

		const url = `${this.apiUrl}/alpha/${ code }`;
	
		return this.http.get<Country[]>(url)
		.pipe(
		  map(countries => countries.length > 0 ? countries[0]: null),
		  catchError(() => of(null) ),
		  //delay(2000),
		)
	
	  }

	  private getHttpRequest(url : string): Observable<Country[]>{
		return this.http.get<Country[]>(url)
		.pipe(
			catchError( () => of ([])),//! Esto nada mas quiere decir que si no devuelve un array de country devuelva un arreglo vacio //
			
			)
	  }


	searchCapital(term : string):Observable<Country[]> {
		
		const url = `${this.apiUrl}/capital/${term}`;

	 	return this.getHttpRequest(url)
		.pipe(
			tap(countries => this.cacheStore.byCapital = { term, countries})
		)

	 }

	searchCountry(term : string):Observable<Country[]> {
		
		const url = `${this.apiUrl}/name/${term}`;
		return this.getHttpRequest(url)
		.pipe(
			tap(countries => this.cacheStore.byCountries = {term, countries})
		)
	}

	searchRegion(region : Region):Observable<Country[]> {

		const url = `${this.apiUrl}/region/${region}`;
		return this.getHttpRequest(url)
		.pipe(
			tap(countries => this.cacheStore.byRegion = {  region : region, countries: countries})
		)

	}

}
