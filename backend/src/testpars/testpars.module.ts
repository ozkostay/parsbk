import { Module } from '@nestjs/common';
import { TestparsService } from './testpars.service';
import { TestparsController } from './testpars.controller';

@Module({
  controllers: [TestparsController],
  providers: [TestparsService],
})
export class TestparsModule {}
