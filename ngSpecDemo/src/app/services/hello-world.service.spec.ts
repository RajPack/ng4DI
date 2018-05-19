import { TestBed, inject } from '@angular/core/testing';

import { HelloWorldService } from './hello-world.service';


describe('HelloWorldService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HelloWorldService]
    });
  });

  it('should be created', inject([HelloWorldService], (service: HelloWorldService) => {
    console.log(service);
    expect(service).toBeTruthy();
  }));

  it('should say hello', inject([HelloWorldService], (service: HelloWorldService) => {
      expect(service.sayHello()).toBe('hello');
  }));
  it('should say hello with get', () => {
    const service = TestBed.get(HelloWorldService);
    expect(service.sayHello()).toBe('hello');
});

});
