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
  @Input() iconFile = '';
  @Input() title = '';
  @Input() itemIndex = 0;
  isComplex = false;
  activeLink = '';
  activeIndex = this.menuService.getActiveIndex().subscribe((val) => {
    if(this.itemIndex === val) this.isActive = true;
    else {
      this.isActive = false;
      this.activeLink = '';
    }
  });

  constructor(public menuService: MenuService, private router: Router) {}

  ngAfterContentInit(): void {
    this.isComplex = (this.title === 'Wyszukiwanie złożone');
  }

  onLinkClick(str: string, event: Event) {
    this.activeLink = str;
  }

  navigate() {
    if(!this.hasList) this.router.navigate(['']);
  }
}

