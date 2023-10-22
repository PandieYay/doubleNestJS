import { IsNumber } from 'class-validator';

export class NumberDto {
    @IsNumber()
    num: number;
}
