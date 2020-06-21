import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailRecordPage } from './detail-record.page';

describe('DetailRecordPage', () => {
  let component: DetailRecordPage;
  let fixture: ComponentFixture<DetailRecordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailRecordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailRecordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
