import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BotPage } from './bot.page';

describe('BotPage', () => {
  let component: BotPage;
  let fixture: ComponentFixture<BotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
