import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LinksCustomComponent} from './links-custom.component';

describe('LinksCustomComponent', () => {
  let component: LinksCustomComponent;
  let fixture: ComponentFixture<LinksCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinksCustomComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LinksCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
