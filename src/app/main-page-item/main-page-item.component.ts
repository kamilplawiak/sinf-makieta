import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-page-item',
  templateUrl: './main-page-item.component.html',
  styleUrls: ['./main-page-item.component.scss']
})
export class MainPageItemComponent {
  @Input() title = "";
  @Input() content = "";
}
