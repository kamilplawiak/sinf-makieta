import { Injectable } from "@angular/core";

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

    public getSimpleItems() {
        return this.#simpleItems;
    }

    public getComplexItems() {
        return this.#complexItems;
    }
}