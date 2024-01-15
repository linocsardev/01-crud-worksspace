import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutasFormComponent } from './frutas-form.component';

describe('FrutasFormComponent', () => {
  let component: FrutasFormComponent;
  let fixture: ComponentFixture<FrutasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrutasFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrutasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
