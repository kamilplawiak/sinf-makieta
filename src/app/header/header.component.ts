import { Component, Input } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public menuService: MenuService) {}
}
