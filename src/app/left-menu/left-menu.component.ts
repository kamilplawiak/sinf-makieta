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
  iconNames = new Map();

  constructor(public menuService: MenuService) {}

  ngOnInit(): void {
    this.iconNames.set('Strona główna', 'home');
    this.iconNames.set('Wyszukiwanie proste', 'search');
    this.iconNames.set('Wyszukiwanie złożone', 'search');
    this.iconNames.set('Wyszukiwarka', 'search');

    this.menuService.setUsername('Test');
  }

  // onLinkClick(name: string, event: Event) {
  //   this.activeLink = name;
  // }
}
