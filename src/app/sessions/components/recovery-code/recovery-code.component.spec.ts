import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryCodeComponent } from './recovery-code.component';

describe('RecoveryCodeComponent', () => {
  let component: RecoveryCodeComponent;
  let fixture: ComponentFixture<RecoveryCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecoveryCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecoveryCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
