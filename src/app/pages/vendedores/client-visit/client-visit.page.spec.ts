import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientVisitPage } from './client-visit.page';

describe('ClientVisitPage', () => {
  let component: ClientVisitPage;
  let fixture: ComponentFixture<ClientVisitPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientVisitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
