export type tablelist = { [No: string]: { dishList: order } };

interface order {
    [key: string]: any;
}

const tables: tablelist[] = [];

export function command(No: string, cmd: string, name: string) {
    tables.forEach((item => {
        if (item[No]) {
            if (!item[No].dishList[name]) {
                item[No].dishList[name] = 0;
            }
            if (cmd === 'add') {
                item[No].dishList[name]++;
            } else if (item[No].dishList[name] > 0) {
                item[No].dishList[name]--;
            }
        }
    }))
    console.log(tables);
}

export function getOrder(No: string): string {
    for (const item of tables) {
        if (item[No]) {
            return JSON.stringify(item[No]);
        }
    }
    return "{ error: 'No such dish'}";
}

export default tables;