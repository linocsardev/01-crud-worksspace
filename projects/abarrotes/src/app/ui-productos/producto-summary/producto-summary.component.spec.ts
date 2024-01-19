import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoSummaryComponent } from './producto-summary.component';

describe('ProductoSummaryComponent', () => {
  let component: ProductoSummaryComponent;
  let fixture: ComponentFixture<ProductoSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductoSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
