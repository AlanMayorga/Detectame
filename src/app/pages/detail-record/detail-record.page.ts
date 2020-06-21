import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoServiceService } from '../../services/photo-service.service'
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-record',
  templateUrl: './detail-record.page.html',
  styleUrls: ['./detail-record.page.scss'],
})
export class DetailRecordPage implements OnInit {

  record: any = {};
  private id;
  name = "";
  img = "";
  predictions = [];

  constructor(private activatedRouter: ActivatedRoute,
    private photoService: PhotoServiceService,
    private alertController: AlertController,
    private toastController: ToastController,
    private router: Router) { }

  ngOnInit() {
    const id = this.activatedRouter.snapshot.paramMap.get('id');
    console.log(id);
    this.record = this.photoService.getAnalysis(id).subscribe((record: any) => {
      console.log("GET Record => ");
      console.log(record.payload.id);
      console.log(record.payload.data());
      this.id = record.payload.id;
      this.record = record.payload.data();
      this.img = record.payload.data().img;
      this.predictions = record.payload.data().predictions;
      this.name = record.payload.data().predictions[0].tagName;
    });
  }

  deleteAnalisis() {
    this.photoService.deleteAnalisis(this.id, this.record.idImg).then(msg => {
      console.log("MSG DELETE ANALISIS => ");
      console.log(msg);
      if (msg == "Análisis eliminado correctamente") {
        this.presentToast(msg, "success");
        this.router.navigate(['/home']);
      }
    }).catch(error => {
      if (error == "Error al eliminar intente nuevamente") {
        this.presentToast(error, "error");
      }
    });
  }

  async delete() {
    const alert = await this.alertController.create({
      header: '¡ADVERTENCIA!',
      message: "¿Desea eliminar? Se eliminaran los datos permanentemente",
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            console.log('Confirm Okay');
            this.deleteAnalisis();
          }
        }
      ]
    });
    await alert.present();
  }

  async presentToast(message, color) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color
    });
    toast.present();
  }

}
