import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrenghtComponent } from './strenght.component';

describe('StrenghtComponent', () => {
  let component: StrenghtComponent;
  let fixture: ComponentFixture<StrenghtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrenghtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrenghtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
