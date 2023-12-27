export class dishType {
    constructor(
        public name: string,
        public image: string
    ) { }
}

type dishTypes = {
    [key: string]: dishType[],
}

let menu: dishTypes = await Bun.file("./public/cookbook.json").json();
// console.log(menu["热菜"]);

// 导出menu
export default menu;
