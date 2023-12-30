export class dishType {
    constructor(
        public name: string,
        public image: string
    ) { }
}

export type dishTypes = {
    [menu: string]: {
        [key: string]: dishType[],
    }
}