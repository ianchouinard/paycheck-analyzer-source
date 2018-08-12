import { expense } from './expense.model';

export interface setupForm {
    lastPayDate: Date,
    grossPayPerCheck: number;
    biWeekly: boolean;
    expenses: Array<expense>;
}
