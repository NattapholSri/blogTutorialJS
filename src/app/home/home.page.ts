import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tt_text;
  new_attr = 'My first app';
  class_arr = [1,2,3,4]
  jsonThings = {
    first: 'value',
    second: 'obj',
    third: 'json'
  }
  jsonArr = [{brand:'Apple',model:'Iphone 12',pic:'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg'},
  {brand:'Samsung',model:'S21',pic:'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-5g-0.jpg'}]
  constructor() {}
  sayHello() {
    let jsonObj = {
      name: 'Nattapon',
      lastname: 'Srijanngam',
      age: 21
    };

    let first_array = ['a','b'];
    
    console.log(first_array);
    console.log(jsonObj.name + ' ' + jsonObj.lastname);
    alert('Hello!!')

  }
  
  sayHi() {
    let appName = 'Test App';
    alert('Hi!')
  }
}
