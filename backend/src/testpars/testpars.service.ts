import { Injectable } from '@nestjs/common';
import { CreateTestparDto } from './dto/create-testpar.dto';
import { UpdateTestparDto } from './dto/update-testpar.dto';
import axios from 'axios';
// const jsdom = require("jsdom"); // Подключение модуля jsdom для работы с DOM-деревом (1)
import { JSDOM } from 'jsdom';
// const { JSDOM } = jsdom;

@Injectable()
export class TestparsService {
  async findAll() {
    // "category-header"
    // https://www.marathonbet.ru/su/betting/Football
    const response = await axios.get(
      'https://www.marathonbet.ru/su/betting/Football/',
    );
    const currentPage = response.data;
    
    console.log('111'); 
    console.log(currentPage);
    console.log('222'); 
    
    
    return document;
  }
}
