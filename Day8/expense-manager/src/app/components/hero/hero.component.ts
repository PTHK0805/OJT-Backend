import { MessageService } from './../../services/message.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';
import { HeroService } from 'src/app/services/hero.service';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero?: Hero;
  public count = 0;
  constructor(private heroService: HeroService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeores();
    //this.heroService.btnCountSubject$.subscribe((data: any) => this.count = data);
  }

  //getHeroes(): void {
  //  this.heroes = this.heroService.getHeroes();
  //}

  //getHeroes(): void {
  //  this.heroService.getHeroes()
  //      .subscribe(heroes => this.heroes = heroes);
  //}

  async getHeores() {
    const heroes = this.heroService.getHeroes();
    setTimeout(() => {
      this.heroService.subject$.next(heroes);
    }, 100)
  }

  btnParentCount(value: any) {
    this.count = value;
  }

}
