export class NavigationModel {
    constructor(private section: string,
                private type: string,
                private items: { url: string, name: string, desc: string, users: string[] }[]) {}

    public getUserItems(user: string) {
        return this.items
                .filter((el) => el.users.includes(user))
                .map((arr) => {
                    return {
                        url: arr.url,
                        name: arr.name,
                        desc: arr.desc
                    }
                });
    }

    public addItem(item: { url: string, name: string, desc: string, users: string[] }) {
        this.items.push(item);
    }

    public getType() {
        return this.type;
    }
}