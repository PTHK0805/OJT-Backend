import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from './../../services/message.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() heroes: Hero[] = [];
  selectedHero?: Hero;
  constructor(private messageService: MessageService, private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.subject$.subscribe((data:any)=>{
      this.heroes = data;
    })
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }


}
