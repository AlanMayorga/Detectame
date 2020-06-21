import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { PhotoServiceService } from '../services/photo-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  records = [];

  constructor(private menuCTRL: MenuController,
    private analysisService: PhotoServiceService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.analysisService.readAnalysis().subscribe(records => {
      console.log("home analysis => ");
      console.log(records);
      this.records = records;
    })
  }

}
