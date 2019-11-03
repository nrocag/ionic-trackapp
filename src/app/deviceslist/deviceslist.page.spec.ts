import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceslistPage } from './deviceslist.page';

describe('DeviceslistPage', () => {
  let component: DeviceslistPage;
  let fixture: ComponentFixture<DeviceslistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceslistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
