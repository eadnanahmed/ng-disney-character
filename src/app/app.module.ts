import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoPageFoundComponent } from './components/no-page-found/no-page-found.component';
import { HomeComponent } from './components/home/home.component';
import { CharacterComponent } from './components/character/character.component';
import { CharacterFavoriteComponent } from './components/character-favorite/character-favorite.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';

// import { DisneyCharacterResolverService } from './services/disney-character-resolver.service';
// import { DisneyCharacterService } from './services/disney-character.service';

@NgModule({
  declarations: [
    AppComponent,
    NoPageFoundComponent,
    HomeComponent,
    CharacterComponent,
    CharacterFavoriteComponent,
    CharacterDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  // providers: [DisneyCharacterService, DisneyCharacterResolverService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
