import { AfterContentInit, Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, Subject } from 'rxjs';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-left-menu-item',
  templateUrl: './left-menu-item.component.html',
  styleUrls: ['./left-menu-item.component.scss']
})
export class LeftMenuItemComponent implements AfterContentInit {
  isActive = false;
  @Input() hasList = true;
  @Input() iconName = '';
  @Input() title = '';
  @Input() itemIndex = 0;
  activeIndex = this.menuService.getActiveIndex().subscribe((val) => {
    if(this.itemIndex === val) this.isActive = true;
    else this.isActive = false;
  });

  constructor(public menuService: MenuService, private router: Router) {}

  ngAfterContentInit(): void {
    
  }

  navigate() {
    if(!this.hasList) {
      this.router.navigate(['']);
      this.menuService.setLastNavigatedLink(0, -1); 
    }
  }
}

