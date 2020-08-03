import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterFavoriteComponent } from './character-favorite.component';

describe('CharacterFavoriteComponent', () => {
  let component: CharacterFavoriteComponent;
  let fixture: ComponentFixture<CharacterFavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterFavoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
