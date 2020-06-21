import { Component, OnInit } from '@angular/core';
import { CustomVisionService } from 'src/app/services/custom-vision.service';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
//import { DatabaseService } from 'src/app/services/database.service';
import { PhotoServiceService } from '../../services/photo-service.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  photo: SafeResourceUrl;
  preview: any;
  private loading: any;

  constructor(private cvService: CustomVisionService,
    private sanitizer: DomSanitizer,
    //private db: DatabaseService,
    private photoService: PhotoServiceService,
    private router: Router,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private alertController: AlertController) { }

  ngOnInit() {

  }

  /*addFile() {
    return new Promise(resolve => {
      let body = {
        aksi: 'add',
        date: Date(),
        photo: ""
      }
  
      this.db.createData(body, 'proses-api.php').subscribe((data:any) => {
        console.log(data);
        if (data.success) {
          alert(data.msg);
        } else {
          alert(data.msg);
        }
      });
    });

  }*/
 

  async takePicture() {
    await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Photos
    }).then(image => {
      console.log(image);
      this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
      this.preview = image.dataUrl;
      //console.log("take dataUrl: " + image.dataUrl);
    }).catch(error => {
      console.log("Cancelado: " + error);
    });
  }

  viewImage($event: Event) {
    console.log("entro");
    console.log($event.target['files'][0]);
    let img = $event.target['files'][0]; // obtiene la imagen
    if (img != null) {

      let read = new FileReader();
      read.onload = (e: any) => {

        // Simply set e.target.result as our <img> src in the layout
        this.preview = e.target.result;
        //this.onChange.emit(img);
        //console.log(this.preview);
      }
      // This will process our file and get it's attributes/data
      read.readAsDataURL(img);
    } else {
    }
  }

  async sumit() {
    if (this.preview != null) {
      /*this.presentLoading();
      let img = "https://www.mediterraneannatural.com/wp-content/uploads/2019/07/Dermatitis-alergica-a-la-picadura-de-pulga-en-perros-1.jpg";
      this.cvService.setImg(img).subscribe((result: any) => {
        console.log("REsult => ");
        console.log(result);
        console.log("Predes ictions => ");
        console.log(result.predictions);
        this.presentToast("Eviado", "success");
        setTimeout(() => {
          this.dismissLoading();
          //this.router.navigate(['/home']);
        }, 500);
      });*/
      /*let photo = await this.photoService.savePhoto(this.preview);
      console.log("esta es la url => ");
      console.log(photo);
      //let url ="https://raw.githubusercontent.com/MicrosoftDocs/mslearn-classify-images-with-the-custom-vision-service/master/test-images/VanGoghTest_02.jpg";
      this.cvService.setImg(photo.url).subscribe((result: any) => {
        console.log("REsult => ");
        console.log(result);
        console.log("Predictions => ");
        console.log(result.predictions);
        let predictions = result.predictions;
        let msg = this.photoService.createAnalysis(predictions, photo.name, photo.url);
        if (msg == "Analisis agregado") {
          this.presentToast(msg, "success");
            setTimeout(() => {
              this.dismissLoading();
              this.router.navigate(['/home']);
            }, 500);
        } else {
          this.presentToast(msg, "error");
            setTimeout(() => {
              this.dismissLoading();
              this.router.navigate(['/home']);
            }, 500);
        }
      });*/
    } else {
      this.presentAlert();
    }
  }

  async presentToast(message, color) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      color
    });
    toast.present();
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
    });
    await this.loading.present();
  }
  async dismissLoading() {
    await this.loading.dismiss();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Debe ingresar una fotografia',
      buttons: ['OK']
    });
    await alert.present();
  }
}