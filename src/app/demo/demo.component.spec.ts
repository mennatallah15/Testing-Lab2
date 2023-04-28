import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { DemoComponent } from './demo.component';

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test num value equal to 10', () => {
    expect(component.num).toBe(10);
  });
  it('test num value equal to 100 after call changenum function', () => {
    component.changeNum();
    expect(component.num).toBe(100);
  });
  it('test num value equal to 200 after call changeAfterTime function with 3 s', fakeAsync(() => {
    component.changeAfterTime();
    tick(3000);
    expect(component.num).toBe(200);
  }));
});
