import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParfumListComponent } from './parfum-list.component';

describe('ParfumListComponent', () => {
  let component: ParfumListComponent;
  let fixture: ComponentFixture<ParfumListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParfumListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParfumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
