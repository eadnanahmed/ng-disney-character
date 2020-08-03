import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisneyCharacterResolverService } from './services/disney-character-resolver.service';
import { HomeComponent } from './components/home/home.component';
import { CharacterComponent } from './components/character/character.component';
import { CharacterFavoriteComponent } from './components/character-favorite/character-favorite.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { NoPageFoundComponent } from './components/no-page-found/no-page-found.component';

const routes: Routes = [
  // this alone
  // { path: '', component: HomeComponent, resolve: { dc: DisneyCharacterResolverService }, pathMatch: 'full' },
  // or these two below, same thing
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'character', component: CharacterComponent, resolve: { dc: DisneyCharacterResolverService } },
  { path: 'character/favorite', component: CharacterFavoriteComponent, resolve: { dc: DisneyCharacterResolverService } },
  { path: 'character/:id', component: CharacterDetailComponent },
  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
