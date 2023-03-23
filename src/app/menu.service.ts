import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { NavigationModel } from "./navigation.model";

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    #userItems = new Map();
    #username = '';
    #activeIndex = new Subject<number>();
    #menuStatus = true;
    #activeLink!: number;
    #lastNavigatedLink = {
        menuItemIndex: -1,
        linkIndex: -1 
    };
    #navigationModel: NavigationModel[] = [];

    constructor() {
        this.#navigationModel.push(new NavigationModel(
            'homepage',
            'Strona główna',
            [
                {
                    url: '/',
                    name: 'Strona główna',
                    desc: 'Strona główna',
                    users: ['Test', 'Admin']
                }
            ]
        ));

        this.#navigationModel.push(new NavigationModel(
            'simple-items',
            'Wyszukiwanie proste',
            [
                {
                    url: 'search/simple/podmiot',
                    name: 'Podmiot',
                    desc: 'Wyszukaj dane finansowe po NIP.',
                    users: ['Test', 'Admin']
                },
                {
                    url: 'search/simple/osoba-fizyczna',
                    name: 'Osoba fizyczna',
                    desc: 'Wyszukaj dane finansowe po PESEL.',
                    users: ['Test', 'Admin']
                },
                {
                    url: 'search/simple/rachunek',
                    name: 'Rachunek',
                    desc: 'Wyszukaj dane finansowe po numerze rachunku.',
                    users: ['Test', 'Admin']
                },
            ]
        ));

        this.#navigationModel.push(new NavigationModel(
            'complex-items',
            'Wyszukiwanie złożone',
            [
                {
                    url: 'search/complex/podmiot',
                    name: 'Podmiot',
                    desc: 'Wyszukaj dane finansowe, jeżeli nie posiadasz NIP.',
                    users: ['Test', 'Admin']
                },
                {
                    url: 'search/complex/osoba-fizyczna',
                    name: 'Osoba fizyczna',
                    desc: 'Wyszukaj dane finansowe, jeżeli nie posiadasz PESEL.',
                    users: ['Test', 'Admin']
                }
            ]
        ));

        this.#navigationModel.push(new NavigationModel(
            'search',
            'Wyszukiwarka',
            [
                {
                    url: 'search/simple/podmiot',
                    name: 'Podmiot',
                    desc: 'Wyszukaj dane finansowe dla admina.',
                    users: ['Admin']
                },
            ]
        ))
    }

    public get(name: string) {
        return this.#navigationModel
                    .find((el) => el.getType() === name)
                    ?.getUserItems(this.#username);

    }

    public getAll() {
        return this.#navigationModel
                    .filter((el) => el.getUserItems(this.#username).length > 0)
                    .map((el) => el.getType())
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

    public getMenuStatus() : boolean {
        return this.#menuStatus;
    }
    
    public getLastNavigatedLink() {
        return this.#lastNavigatedLink;
    }

    public setLastNavigatedLink(menuItemIndex: number, linkIndex: number) {
        this.#lastNavigatedLink.menuItemIndex = menuItemIndex;
        this.#lastNavigatedLink.linkIndex = linkIndex;
    }
    
    public setActiveLink(link: number) {
        this.#activeLink = link;
    }

    public setUsername(name: string) {
        this.#username = name;
    }

    public setActiveIndex(index: number) {
        this.#activeIndex.next(index);
    }
}