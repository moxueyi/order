export type tableType = { [No: string]: { table: table } };

class table {
    private order: {
        name: string,
        quantity: number,
    }[];

    constructor() {
        this.order = []
    }

    /**
     * 点菜
     */
    public pushOrder(dishName: string): boolean {
        for (const item of this.order) {
            if (item.name === dishName) {
                return false;
            }
        }
        this.order.push({ name: dishName, quantity: 1 });
        return true;
    }

    /**
     * 加菜
     */
    public addQuantity(dishName: string): void {
        if (!this.pushOrder(dishName)) {
            for (const item of this.order) {
                if (item.name === dishName) {
                    item.quantity += 1;
                    return;
                }
            }
        }
    }

    /**
     * 减菜
     */
    public subQuantity(dishName: string): void {
        for (let item of this.order) {
            if (item.name === dishName && item.quantity > 0) {
                item.quantity -= 1;
                return;
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
}

export function command(tables: tableType[], No: string, cmd: string, dishName: string) {
    for (let item of tables) {
        if (item[No]) {
            if (cmd === "add") {
                item[No].table.addQuantity(dishName);
            } else {
                item[No].table.subQuantity(dishName);
            }
            break;
        }
    }
}

export default table;