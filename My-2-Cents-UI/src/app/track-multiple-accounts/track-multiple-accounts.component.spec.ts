import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrackMultipleAccountsComponent } from './track-multiple-accounts.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('TrackMultipleAccountsComponent', () => {
  let component: TrackMultipleAccountsComponent;
  let fixture: ComponentFixture<TrackMultipleAccountsComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackMultipleAccountsComponent ],
      imports: [
        HttpClientTestingModule, RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackMultipleAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit', () => {
    const fixture = TestBed.createComponent(TrackMultipleAccountsComponent);
    const component = fixture.debugElement.componentInstance;
    let a:any;
    component.ngOnInit();
    expect(component.Items).toEqual(a);
  })

});
