import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from './../../services/message.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
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
  
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  constructor(private messageService: MessageService, private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.subject$.subscribe((data: any) => {
      this.heroes = data;
    });
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
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
