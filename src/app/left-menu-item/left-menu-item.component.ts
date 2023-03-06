import { AfterContentInit, Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-left-menu-item',
  templateUrl: './left-menu-item.component.html',
  styleUrls: ['./left-menu-item.component.scss']
})
export class LeftMenuItemComponent implements AfterContentInit {
  @Input() isActive = false;
  @Input() hasList = true;
  @Input() iconName = '';
  @Input() title = '';
  @Input() itemIndex = 0;
  linkCategory = '';
  activeLink = '';
  activeIndex = this.menuService.getActiveIndex().subscribe((val) => {
    if(this.menuService.getPreviousIndex() === val && this.menuService.getPreviousIndex() === this.itemIndex) {
      this.isActive = !this.isActive;
      return;
    }

    if(this.itemIndex === val) this.isActive = true;
    else {
      this.isActive = false;
      this.activeLink = '';
    }
  });

  constructor(public menuService: MenuService, private router: Router) {}

  ngAfterContentInit(): void {
    
  }

  onLinkClick(str: string, event: Event) {
    event.stopPropagation();
    this.activeLink = str;
  }

  navigate() {
    if(!this.hasList) this.router.navigate(['']);
  }
}

