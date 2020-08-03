import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
import { DisneyCharacter } from 'src/app/models/disney-character';
import { DisneyCharacterService } from '../../services/disney-character.service';
// import { PreviousRouteService } from '../../services/previous-route.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit, OnDestroy {

  // id: number;
  previousRoute: string;
  character: DisneyCharacter;

  constructor(
    // private route: ActivatedRoute,
    // private router: Router,
    private service: DisneyCharacterService,
    // private previousRouteService: PreviousRouteService
  ) {
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationStart) {
    //     this.previousRoute = event.url;
    //   }
    // });
  }

  ngOnInit(): void {
    this.service.currentDisneyCharacter.subscribe(character => this.character = character);
    // console.log(this.character);
    // this.route.params.subscribe(params => {
    //   this.id = +params.id;
    // });
    // console.log(this.route.snapshot.paramMap.get('previousUrl'));
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }

  backToCharacterList(): void {
    // console.log(this.previousRoute);
    // this.router.navigate(['/']);
    window.history.back();
    // console.log(this.previousRouteService.getPreviousUrl());
    // this.router.navigate([this.previousRouteService.getPreviousUrl()]);
  }

  changeFavorite(fav: any): void {
    if (fav.isFavorite) {
      fav.isFavorite = false;
    } else { fav.isFavorite = true; }
    // this.service.changeDisneyCharacter(fav);
  }

}
