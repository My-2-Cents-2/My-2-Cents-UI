import { HttpClientTestingModule } from '@angular/common/http/testing';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgChartsModule } from 'ng2-charts';
import { My2CentsService } from '../_services/my2-cents.service';

import { InvestmentDiversityGraphComponent } from './investment-diversity-graph.component';

describe('InvestmentDiversityGraphComponent', () => {
  let component: InvestmentDiversityGraphComponent;
  let fixture: ComponentFixture<InvestmentDiversityGraphComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentDiversityGraphComponent ],
      imports: [ NgChartsModule, HttpClientTestingModule, RouterTestingModule ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentDiversityGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit', () => {
    const fixture = TestBed.createComponent(InvestmentDiversityGraphComponent);
    const component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(My2CentsService);
    let a:any[];
    component.ngOnInit();
    expect(component.Items).toEqual(a);
  })

});
