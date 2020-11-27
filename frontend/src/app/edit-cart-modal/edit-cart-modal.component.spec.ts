import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCartModalComponent } from './edit-cart-modal.component';

describe('EditCartModalComponent', () => {
  let component: EditCartModalComponent;
  let fixture: ComponentFixture<EditCartModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCartModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCartModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
