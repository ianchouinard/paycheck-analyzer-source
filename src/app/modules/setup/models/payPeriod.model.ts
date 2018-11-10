import { bill } from './bill.model';

export interface payPeriod {
    date: Date;
    bills: Array<bill>;
    totalBillCost: number;
    estimatedSavings: number;
}
