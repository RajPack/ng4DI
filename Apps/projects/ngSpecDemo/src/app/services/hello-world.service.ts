import { Injectable } from '@angular/core';

@Injectable()
export class HelloWorldService {

  constructor() { }

  sayHello() {
    return 'hello';
  }
}
