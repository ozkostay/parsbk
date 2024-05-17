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
    // const lines = await fetch('https://www.marathonbet.ru/su/betting/Football/England/Premier+League+-+21520');
    // var currentPage = response.data; // Запись полученного результата
    // console.log(lines);
    // const dom = new JSDOM(lines);
    // console.log(dom);

    // axios
    //   .get(
    //     'https://www.marathonbet.ru/su/betting/Football/England/Premier+League+-+21520',
    //   )
    //   .then((response) => {
    //     const currentPage = response.data;
    //     console.log(currentPage);
    //   });

    const response = await axios.get(
      'https://www.marathonbet.ru/su/betting/Football/England/Premier+League+-+21520',
    );
    const currentPage = response.data;
    // console.log(currentPage);

    // const dom = new JSDOM(currentPage); // Инициализация библиотеки jsdom для разбора полученных HTML-данных, как в браузере
    const dom = new JSDOM('<body><div id="content"><p>Чтото там написано</p></div></body>'); 
    const document = dom.window.document
    console.log(document.querySelector("p").textContent); 

    // console.log(dom);
    // Определение количества ссылок на странице, потому что оно у них не всегда фиксированное. Это значение понадобится в цикле ниже
    // const aaa = dom.window.document
    //   .getElementById('block-views-articles-latest-on-front-block')
    //   .getElementsByClassName('view-content')[0]
    //   .getElementsByClassName('flex-teaser-square').length;
    // Перебор и запись всех статей на выбр

    return `This action returns all testpars`;
  }
}
