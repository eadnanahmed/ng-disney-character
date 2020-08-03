import { Injectable } from '@angular/core';
import { DisneyCharacterService } from './disney-character.service';
import { DisneyCharacter } from '../models/disney-character';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

import { of, empty } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DisneyCharacterResolverService implements Resolve<DisneyCharacter> {
  constructor(private dcService: DisneyCharacterService) { }
  resolve(
    // route: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot
  ): Observable<DisneyCharacter[]> | Promise<DisneyCharacter[]> | any {
    return this.dcService.getCharacters().pipe(
      catchError((error) => {
        return of('No data...');
      })
      //   catchError((error) => {
      //     return empty();
      //  })
    );
  }

  // resolve(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  //   ) {
  //   return this.dcService.getCharacters(route.paramMap.get('id'));
  // }

}
