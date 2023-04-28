import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponent } from './demo.component';
import { DemoServiceService } from 'src/app/Services/demo-service.service';

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;
  let DemoService: DemoServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    DemoService = TestBed.inject(DemoServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test Add return type number', () => {
    expect(component.Add).not.toBeNaN();
  });
  it('test subtract return type number', () => {
    expect(component.subtract).not.toBeNaN();
  });

  it('test subtract value equal to 2', () => {
    expect(component.subtract(5, 3)).toBe(2);
  });

  it('test Add value equal to 8', () => {
    expect(component.Add(5, 3)).toBe(8);
  });

  it('should call getValue Function from service in ngOnInit', () => {
    spyOn(DemoService, 'getService');
    component.ngOnInit();
    expect(DemoService.getService).toHaveBeenCalled();
    expect(DemoService.getService).toHaveBeenCalledTimes(1);
  });
});
