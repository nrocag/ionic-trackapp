import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceadminPage } from './deviceadmin.page';

describe('DeviceadminPage', () => {
  let component: DeviceadminPage;
  let fixture: ComponentFixture<DeviceadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceadminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
