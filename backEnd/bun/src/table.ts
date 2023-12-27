import type { dishType } from "./menu";

class table {
    private No: string;
    private order: {
        dish: dishType,
        quantity: number,
    }[];

    constructor(No: string) {
        this.No = No;
        this.order = [];
    }

    /**
     * 点菜
     */
    public pushOrder(dish: dishType): boolean {
        for (const item of this.order) {
            if (item.dish.name === dish.name) {
                return false;
            }
        }
        this.order.push({ dish, quantity: 1 });
        return true;
    }

    /**
     * 加菜
     */
    public orderAddQuantity(dish: dishType): void {
        if (!this.pushOrder(dish)) {
            for (const item of this.order) {
                if (item.dish.name === dish.name) {
                    item.quantity += 1;
                    return;
                }
            }
        }
    }

    /**
     * 获得订单列表
     */
    public getOrder(): string {
        // this.order转string
        return JSON.stringify(this.order);
    }

    /**
     * 获取桌号
     */
    public getNo(): string {
        let num = this.No.split(" ")[1];
        return num;
    }
}

export default table;