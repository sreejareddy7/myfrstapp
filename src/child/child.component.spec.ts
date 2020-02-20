import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ChildComponent } from './child.component';

describe('ChildComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ChildComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ChildComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'myfrstapp'`, () => {
    const fixture = TestBed.createComponent(ChildComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('myfrstapp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ChildComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('myfrstapp app is running!');
  });
});
