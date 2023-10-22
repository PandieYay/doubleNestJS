import { Injectable } from '@nestjs/common';
import { NumberDto } from 'src/dto/number.dto';

@Injectable()
export class UtilService {
  double(numberDto : NumberDto): number {
    return (numberDto.num * 2);
  }
}
