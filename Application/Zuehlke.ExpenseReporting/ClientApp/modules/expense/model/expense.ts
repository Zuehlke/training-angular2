export class Expense {
    constructor(public id: string, public name: string, public reason: Reason, public date: Date, public amount: number, public text: string) { }
}

export enum Reason {
    Flight, Train, Bus, Taxi, Hotel, Restaurant, Other
}