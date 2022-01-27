import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebookadminComponent } from './updatebookadmin.component';

describe('UpdatebookadminComponent', () => {
  let component: UpdatebookadminComponent;
  let fixture: ComponentFixture<UpdatebookadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatebookadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatebookadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
