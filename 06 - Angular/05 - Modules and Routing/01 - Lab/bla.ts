function add(a: number, b: number): number;
function add(a: string): string;

function add(a: any, b: any): any {
    return a + b;
}