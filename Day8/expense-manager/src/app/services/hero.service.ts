import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HEROES } from '../constants/mock-hero';
import { Observable, of, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  public subject$ = new Subject();
  public btnCountSubject$ = new Subject();
  
  constructor(private messageService: MessageService) { }
  //getHeroes(): Hero[] {
  //  return HEROES;
  //}

  //getHeroes(): Observable<Hero[]> {
  //  const heroes = of(HEROES);
  //  this.messageService.add('HeroService: fetched heroes');
  //  return heroes;
  //}

  getHeroes(): Hero[]{
    return HEROES;
  }
}
