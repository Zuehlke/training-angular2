export class ExpenseRecord {
    constructor(public id: string, public name: string, public reason: ExpenseReason, public date: Date, public amount: number, public text: string) {}
}

export enum ExpenseReason {
    Flight,
    Train,
    Bus,
    Taxi,
    Hotel,
    Restaurant,
    Other
}