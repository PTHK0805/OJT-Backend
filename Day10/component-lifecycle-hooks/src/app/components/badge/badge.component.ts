import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent{

  hidden: boolean = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

}
