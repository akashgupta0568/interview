import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuToolbarComponent } from './side-menu-toolbar.component';

describe('SideMenuToolbarComponent', () => {
  let component: SideMenuToolbarComponent;
  let fixture: ComponentFixture<SideMenuToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideMenuToolbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideMenuToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
