import { Component, OnInit } from '@angular/core';
import { DisneyCharacter } from 'src/app/models/disney-character';
import { DisneyCharacterService } from 'src/app/services/disney-character.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  characters: DisneyCharacter[];
  selectedCharacter: DisneyCharacter;

  constructor(
    private service: DisneyCharacterService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: { dc: DisneyCharacter[] }) => {
      this.characters = data.dc;
      // console.log(this.characters);
    });
  }

  goToCharacterDetails(id: number, fav: boolean): void {
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

}
