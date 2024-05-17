import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestparsService } from './testpars.service';
import { CreateTestparDto } from './dto/create-testpar.dto';
import { UpdateTestparDto } from './dto/update-testpar.dto';

@Controller('testpars')
export class TestparsController {
  constructor(private readonly testparsService: TestparsService) {}

  @Get()
  findAll() {
    return this.testparsService.findAll();
  }

  
}
