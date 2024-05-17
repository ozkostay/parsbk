import { PartialType } from '@nestjs/mapped-types';
import { CreateTestparDto } from './create-testpar.dto';

export class UpdateTestparDto extends PartialType(CreateTestparDto) {}
