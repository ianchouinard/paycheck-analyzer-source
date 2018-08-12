import { payPeriod } from "./payPeriod.model";

export interface payMonth {
    month: number;
    grossPay: number;
    checkQuantity: number;
    payDates: Array<payPeriod>;
    firstCheckDateInNextMonth: Date;
}
