import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutasDetailComponent } from './frutas-detail.component';

describe('FrutasDetailComponent', () => {
  let component: FrutasDetailComponent;
  let fixture: ComponentFixture<FrutasDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrutasDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrutasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
