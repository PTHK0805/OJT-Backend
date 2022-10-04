import { Component, OnInit } from '@angular/core';
import { filter, from, fromEvent, map, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  numbers: any = [];
  val1: number = 0;
  filteredNumbers: any = [];
  val2: number = 0;
  mappedNumbers: any[] = [];
  val3: number = 0;
  processedNumber: any[] = [];
  val4: number = 0;
  constructor() { }

  ngOnInit(): void {
    //const numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    //const numbers$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    //numbers$.subscribe(data => {
    //  console.log(data);
    //})
    const numbers$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    // observer 
    //const observer = {
    //  next: (num: number) => { this.numbers.push(num); this.val1 += num },
    //  error: (err: any) => console.log(err),
    //  complete: () => console.log("Observation completed", this.numbers, this.val1)
    //};
    //numbers$.subscribe(observer);
    //numbers$.subscribe(num => {
    //  this.numbers.push(num);
    //  this.val1 += num;
    //  console.log('Observation completed', this.numbers, this.val1)
    //});

    //const filterFn = filter((num: number) => num > 5);
    //const filteredNumbers$ = filterFn(numbers$);
    //filteredNumbers$.subscribe((num: number) => {
    //  this.filteredNumbers.push(num); this.val2 += num
    //});
    //console.log('Filterednumbers', this.filteredNumbers);
    //console.log('Total', this.val2);

    //const filteredNumbers$ = filter((num: number) => num > 5)(numbers$);
    const filterFn = filter((num: number) => num > 5);
    const filteredNumbers$ = filterFn(numbers$)
    filteredNumbers$.subscribe((num: number) => {
      this.filteredNumbers.push(num); this.val2 += num;
    })
    console.log('FilteredNumber : ', this.filteredNumbers);
    console.log('Total :', this.val2);
    
    //const mappedNumbers$ = map((num: number) => num + num)(numbers$);
    const mapFn = map((num: number) => num + num);
    const mappedNumbers$ = mapFn(numbers$);
    mappedNumbers$.subscribe((num: number) => { this.mappedNumbers.push(num); this.val3 += num });
    console.log('MappedNumbers', this.mappedNumbers);
    console.log('Total', this.val3);
    
    const processedNumbers$ = numbers$.pipe(filterFn, mapFn);
    processedNumbers$.subscribe({
      next: (num: number) => { this.processedNumber.push(num); this.val4 += num },
      error: (err: any) => console.log('Error: ', err),
      complete: () => console.log('Observation completed...')
    })
    console.log("ProcessedNumber: ", this.processedNumber);
    console.log("total: ", this.val4);
  }

}

