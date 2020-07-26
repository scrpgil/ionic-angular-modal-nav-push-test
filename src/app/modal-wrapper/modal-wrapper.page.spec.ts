import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalWrapperPage } from './modal-wrapper.page';

describe('ModalWrapperPage', () => {
  let component: ModalWrapperPage;
  let fixture: ComponentFixture<ModalWrapperPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalWrapperPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalWrapperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
