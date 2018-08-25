import { expense } from './expense.model';

export interface setupForm {
    lastPayDate: Date;
    grossPayPerCheck: number;
    expenses: Array<expense>;
    frequencies: Array<any>;
    frequency: string;
}
