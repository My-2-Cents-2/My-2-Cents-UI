import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgChartsModule } from 'ng2-charts';

import { InvestmentDiversityGraphComponent } from './investment-diversity-graph.component';

describe('InvestmentDiversityGraphComponent', () => {
  let component: InvestmentDiversityGraphComponent;
  let fixture: ComponentFixture<InvestmentDiversityGraphComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentDiversityGraphComponent ],
      imports: [ NgChartsModule ]
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
});
