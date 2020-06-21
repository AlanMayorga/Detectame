import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  sections = [
    {
      title: 'Menu',
      url: 'home',
      icon: 'home'
    },
    {
      title: 'Cámara',
      url: 'camera',
      icon: 'camera'
    },
    {
      title: 'Chat',
      url: 'chat',
      icon: 'chatbubbles'
    }
  ]
  constructor(private menuCTRL: MenuController) { }

  ngOnInit() {}

}
