import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestparsModule } from './testpars/testpars.module';

@Module({
  imports: [TestparsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
