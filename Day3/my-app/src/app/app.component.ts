import { Component, OnInit } from '@angular/core';
import { DebugService } from './services/debug.service';

@Component({ 
  selector: 'app-root', 
  templateUrl: `<h1>{{ title }}</h1>`, 
  styleUrls: ['./app.component.css'] 
}) 
export class AppComponent implements OnInit { 
  title = 'Expense Manager'; 
  constructor(private debugService : DebugService) {} ngOnInit() { 
     this.debugService.info("Angular Application starts"); 
  } 
}
