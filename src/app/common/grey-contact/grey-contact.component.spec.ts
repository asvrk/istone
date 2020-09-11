import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GreyContactComponent } from './grey-contact.component';

describe('GreyContactComponent', () => {
  let component: GreyContactComponent;
  let fixture: ComponentFixture<GreyContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreyContactComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GreyContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
