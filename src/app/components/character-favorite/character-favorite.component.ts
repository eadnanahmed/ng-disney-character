import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DisneyCharacterService } from '../../services/disney-character.service';
import { DisneyCharacter } from '../../models/disney-character';

@Component({
  selector: 'app-character-favorite',
  templateUrl: './character-favorite.component.html',
  styleUrls: ['./character-favorite.component.scss']
})
export class CharacterFavoriteComponent implements OnInit {

  // favCharacters: DisneyCharacter[];
  // otherCharacters: DisneyCharacter[];
  characters: DisneyCharacter[];
  selectedCharacter: DisneyCharacter;

  constructor(
    private service: DisneyCharacterService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    // with route resolver
    this.activatedRoute.data.subscribe((data: { dc: DisneyCharacter[] }) => {
      // console.log('Check route resolver data');
      // console.log(data.dc);
      this.characters = data.dc;
    });

    // without route resolver
    // this.service.getCharacters().subscribe((data: DisneyCharacter[]) => {
    //   // console.log(data);
    //   // this.favCharacters = data.filter(x => x.isFavorite);
    //   // this.otherCharacters = data.filter(x => !x.isFavorite);
    //   this.characters = data;
    // });
  }

  goToCharacterDetails(id: number, fav: boolean): void {
    // if (fav) {
    //   this.selectedCharacter = this.favCharacters.filter(x => x.id === id)[0];
    // } else {
    //   this.selectedCharacter = this.otherCharacters.filter(x => x.id === id)[0];
    // }
    this.selectedCharacter = this.characters.filter(x => x.id === id)[0];
    this.service.changeDisneyCharacter(this.selectedCharacter);
    this.router.navigate(['/character', id]);
  }

  changeFavorite(fav: DisneyCharacter): void {
    if (fav.isFavorite) {
      fav.isFavorite = false;
    } else { fav.isFavorite = true; }
    this.service.changeDisneyCharacter(fav);
  }

  // changeFavorite(fav: any): void {
  //   fav.toggle = !fav.toggle;
  //   fav.isFavorite = fav.toggle ? 'No' : 'Yes';
  // }

}
