import { Injectable } from "@angular/core";
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
    #activeIndex = new Subject<number>();

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

          console.log(this.#userItems.get('Test'))
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

    public getUserItems() {
        return this.#userItems;
    }

    public getUsername() {
        return this.#username;
    }

    public getActiveIndex() { 
        return this.#activeIndex;
    }
    
    public setUsername(name: string) {
        this.#username = name;
    }

    public setActiveIndex(index: number) {
        this.#activeIndex.next(index);
    }
}