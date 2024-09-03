import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutcsTableComponent } from './produtcs-table.component';

describe('ProdutcsTableComponent', () => {
  let component: ProdutcsTableComponent;
  let fixture: ComponentFixture<ProdutcsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdutcsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutcsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
