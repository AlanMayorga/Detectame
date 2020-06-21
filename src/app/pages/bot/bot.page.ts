import { Component, OnInit } from '@angular/core';
import { BotService } from '../../services/bot.service';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.page.html',
  styleUrls: ['./bot.page.scss'],
})
export class BotPage implements OnInit {

  msg = "";

  messages = [];

  constructor(
    private botService: BotService
  ) { }

  ngOnInit() {
    this.messages.push({msg: "Bienvenido, en esta apartado puede ingresar sus dudas", date: new Date().toLocaleTimeString()});
  }

  sendMessage(){
    this.messages.push({msg: "Ud: " + this.msg, date: new Date().toLocaleTimeString()});

    this.botService.setQuestion(this.msg).subscribe((response: any) => {
      console.log("RESPUESTA => ");
      console.log(response);
      this.messages.push({msg: response.answers[0].answer, date: new Date().toLocaleTimeString()});
    });

    this.msg = "";
  }

  

}
