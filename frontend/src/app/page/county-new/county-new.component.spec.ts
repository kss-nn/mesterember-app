import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountyNewComponent } from './county-new.component';

describe('CountyNewComponent', () => {
  let component: CountyNewComponent;
  let fixture: ComponentFixture<CountyNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountyNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountyNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
