import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});

describe('Sample Jasmine test suite', () => {
  // this is where you write test specs
  it('Add calc', () => {
    const a = 5, b = 6;
    const expectedVal = 11;
    expect(add(a, b)).toBe(expectedVal);
  });

  describe('sub describe demo', () => {
    it('sample spec', () => {
      const a = 2, b = 5;
      const expectedVal = 10;
      expect(multiply(a, b)).toBe(expectedVal);
      expect(multiply(a, b)).toBe(34);
    });
  });
});


function add(x, y) {
  return x + y;
}
function multiply(x, y) {
  return x * y;
}
