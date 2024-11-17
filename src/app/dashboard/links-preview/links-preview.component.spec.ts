import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LinksPreviewComponent} from './links-preview.component';

describe('LinksPreviewComponent', () => {
  let component: LinksPreviewComponent;
  let fixture: ComponentFixture<LinksPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinksPreviewComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LinksPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
