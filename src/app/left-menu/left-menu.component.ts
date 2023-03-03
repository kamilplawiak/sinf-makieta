import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  @ViewChildren('menuItem') menuItems!: QueryList<ElementRef>;
  activeElement = 'home';
  activeLink = '';
  iconFiles = new Map();

  constructor(public menuService: MenuService) {}

  ngOnInit(): void {
    this.iconFiles.set('Strona główna', 'home-icon.svg');
    this.iconFiles.set('Wyszukiwanie proste', 'search-icon.svg');
    this.iconFiles.set('Wyszukiwanie złożone', 'search-icon.svg');
    this.iconFiles.set('Wyszukiwarka', 'search-icon.svg');

    this.menuService.setUsername('Admin');
  }

  onMenuLinkClick(index: number) {
    // console.log(this.menuItems.get(index)?.setStatus(false));
    // this.menuItems.get(index)!.nativeElement.isActive = true;
  }

  onLinkClick(name: string, event: Event) {
    event.stopPropagation();
    this.activeLink = name;
  }
}
