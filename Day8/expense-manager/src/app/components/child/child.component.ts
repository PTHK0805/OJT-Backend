import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from './../../services/message.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  public btnCount: number = 0;
  @Input() heroes: Hero[] = [];
  @Output() btnClickCount = new EventEmitter();
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

  count() {
    this.btnCount += 1;
    console.log(this.btnCount);
    //this.heroService.btnCountSubject$.next(this.btnCount);
    this.btnClickCount.emit(this.btnCount);
  }

}
