import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
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
  @Input() menuIndex!: number;
  @Input() linkIndex!: number;

  constructor(public menuService: MenuService, private router: Router) {}

  navigateTo(link: string) {
    this.menuService.setActiveIndex(this.menuIndex);
    this.menuService.setActiveLink(this.linkIndex);
    this.router.navigate([link]);
  }
}
