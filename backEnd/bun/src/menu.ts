export class dishType {
    constructor(
        public name: string,
        public image: string
    ) { }
}

type dishTypes = {
    [menu: string]: {
        [key: string]: dishType[],
    }
}

let file: dishTypes = await Bun.file("./public/cookbook.json").json();
// console.log(file);

// 导出menu
export default file;
