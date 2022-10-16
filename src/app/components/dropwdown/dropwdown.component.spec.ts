import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropwdownComponent } from './dropwdown.component';

describe('DropwdownComponent', () => {
  let component: DropwdownComponent;
  let fixture: ComponentFixture<DropwdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropwdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropwdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
