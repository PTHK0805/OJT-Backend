import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HEROES } from '../constants/mock-hero';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  //getHeroes(): Hero[] {
  //  return HEROES;
  //}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
