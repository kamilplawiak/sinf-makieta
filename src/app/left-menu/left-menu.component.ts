import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent {
  activeElement = '';
  activeLink = '';

  constructor(public menuService: MenuService) {}

  onMenuLinkClick(name: string) {
    if(this.activeElement !== name) this.activeLink = '';
    this.activeElement = name;
  }

  onLinkClick(name: string, event: Event) {
    event.stopPropagation();
    this.activeLink = name;
  }

  dashedNotation(str: string) : string {
    const arr = str.split(" ");
    arr.forEach((word, index) => arr[index] = word.toLowerCase());
    return arr.join("-");
  }
}
