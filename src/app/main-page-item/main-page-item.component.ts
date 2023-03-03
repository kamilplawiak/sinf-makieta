import { Component, Input } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-main-page-item',
  templateUrl: './main-page-item.component.html',
  styleUrls: ['./main-page-item.component.scss']
})
export class MainPageItemComponent {
  @Input() title = "";
  @Input() content = "";
  @Input() category = "";

  constructor(public menuService: MenuService) {}
}
