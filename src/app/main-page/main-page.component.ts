import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  host: {
    class: 'component'
  }
})
export class MainPageComponent {
  constructor(public menuService: MenuService) {}

  ngOnInit() : void {

  }
}
