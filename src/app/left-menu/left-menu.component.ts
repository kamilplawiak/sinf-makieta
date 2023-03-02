import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent {
  activeElement = 'home';

  constructor(public menuService: MenuService,
              private router: Router) {}

  onMenuLinkClick(name: string) {
    this.activeElement = name;
  }

  dashedNotation(str: string) : string {
    const arr = str.split(" ");
    arr.forEach((word, index) => arr[index] = word.toLowerCase());
    return arr.join("-");
  }
}
