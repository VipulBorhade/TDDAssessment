import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });
  
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'TDDkata'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('TDDkata');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('TDDkata app is running!');
  });

  it('should return 0 for empty input', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.add('')).toEqual(0);
  });
  it('should return same number if input contains only numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const num:string = "2"
    expect(app.add(num)).toEqual(2);
  });
  it('should return sum for comma separated numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const num:string = "2,2"
    expect(app.add(num)).toEqual(4);
  });
  it('should return sum for comma separated multiple numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const num:string = "2,2,7,3"
    expect(app.add(num)).toEqual(14);
  });

  it('should return sum for comma and newline separated multiple numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const num:string = "2,2\n7,3"
    expect(app.add(num)).toEqual(14);
  });

  it('should return sum for delimiter in  given in this //[delimiter]\n[numbers…]" ', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const num:string = "//;\n2;2;7;3"
    expect(app.add(num)).toEqual(14);
  });

  it('should throw error for negative numbers given in this //[delimiter]\n[numbers…]" ', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const num:string = "//;\n2;2;-7;3"
    expect( () => app.add(num) ).toThrowError("negative numbers not allowed -7");
  });

});
