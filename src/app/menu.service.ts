import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    #simpleItems = [
        { title: 'Podmiot', content: 'Wyszukaj dane finansowe po NIP.' },
        { title: 'Osoba fizyczna', content: 'Wyszukaj dane finansowe po PESEL.' },
        { title: 'Rachunek', content: 'Wyszukaj dane finansowe po numerze rachunku.' }
    ];

    #complexItems = [
        { title: 'Podmiot', content: 'Wyszukaj dane finansowe, jeżeli nie posiadasz NIP.' },
        { title: 'Osoba fizyczna', content: 'Wyszukaj dane finansowe, jeżeli nie posiadasz PESEL.' }
    ];

    #searchItems = [
        { title: 'Podmiot', content: 'Wyszukaj dane finansowe po NIP.' },
        { title: 'Osoba fizyczna', content: 'Wyszukaj dane finansowe po PESEL.' },
        { title: 'Rachunek', content: 'Wyszukaj dane finansowe po numerze rachunku.' }
    ]

    #userItems = new Map();
    #username = '';
    #previousIndex!: number;
    #activeIndex = new Subject<number>();
    #menuStatus = true;
    #activeLink!: number;

    constructor() {
        this.#userItems.set('Test', [
            'Strona główna',
            'Wyszukiwanie proste',
            'Wyszukiwanie złożone'
          ]);
      
          this.#userItems.set('Admin', [
            'Strona główna',
            'Wyszukiwanie proste',
            'Wyszukiwanie złożone',
            'Wyszukiwarka'
          ]);
    }

    public get(name: string) {
        let result: { title: string, content: string }[] = [];
        
        switch(name) {
            case 'Wyszukiwanie proste':
                result = this.#simpleItems;
                break;
            
            case 'Wyszukiwanie złożone':
                result = this.#complexItems;
                break;

            case 'Wyszukiwarka':
                result = this.#searchItems;
                break;
            
            default:
                break;
        }

        return result;
    }

    public dashedNotation(str: string) : string {
        if(str.length === 0) return "";
        const arr = str.split(" ");
        arr.forEach((word, index) => arr[index] = word.toLowerCase());
        return arr.join("-");
    }

    public getLinkCategory(name: string) : string {
        let result = '';

        switch(name) {
            case 'Wyszukiwanie złożone':
              result = 'complex';
              break;
      
            case 'Wyszukiwanie proste':
                result = 'simple';
              break;
      
            case 'Wyszukiwarka':
                result = 'test';
              break;
      
            default:
              break;
        };

        return result;
    }

    public menuToggle() {
        this.#menuStatus = !this.#menuStatus;
    }

    public getUserItems() {
        return this.#userItems;
    }

    public getUsername() {
        return this.#username;
    }

    public getActiveIndex() { 
        return this.#activeIndex;
    }

    public getActiveLink() {
        return this.#activeLink;
    }
    
    public setActiveLink(link: number) {
        this.#activeLink = link;
    }

    public setUsername(name: string) {
        this.#username = name;
    }

    public setActiveIndex(index: number) {
        this.#activeIndex.subscribe((val) => this.#previousIndex = val);
        this.#activeIndex.next(index);
    }

    public getPreviousIndex() : number {
        return this.#previousIndex;
    }

    public getMenuStatus() : boolean {
        return this.#menuStatus;
    }
}