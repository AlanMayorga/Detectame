import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotoServiceService {

  private dbRef = this.db.collection('analysis');
  private storageRef = this.storage.ref('photo/');

  constructor(private storage: AngularFireStorage,
    private db: AngularFirestore) { }

  savePhoto(photo) {
    const nameFile = `${new Date().getTime()}.jpg`;
    return this.storage.ref(`photos/${nameFile}`).putString(photo, 'data_url').then(img => {
      return img.ref.getDownloadURL().then(url => {
        return {url: url, name: nameFile};
        //console.log(url);
        //this.createAnalysis(nameFile, url);
      });
      //console.log("La imágen se almacenó correctamente");
    }).catch(error => {
      console.log("Error al almacenar la foto: " + error);
    });
  }

  createAnalysis(predictions, idImg, url) {
    return this.dbRef.add({
      predictions: predictions,
      idImg: idImg,
      img: url,
      dia: new Date().toLocaleDateString(),
      hora: new Date().toLocaleTimeString()
    }).then((data) => {
      console.log("Analisis agregado: " + data);
      return "Analisis agregado";
    }).catch(error => {
      console.log("Error al agregar el analisis: " + error);
      return "Error al agregar intente nuevamente";
    });
  }

  readAnalysis() {
    return this.dbRef.snapshotChanges().pipe(map(records => {
      return records.map(record => {
        const data = record.payload.doc.data();
        const id = record.payload.doc.id;
        return {id, ...data as {}};
      });
    }));
  }

  getAnalysis(id){
    return this.dbRef.doc(id).snapshotChanges();
  }

  deleteAnalisis(id, idImg) {
    return this.dbRef.doc(id).delete().then(result => {
      this.storageRef.child(idImg).delete();
      console.log("Delete result => ");
      console.log(result);
      return "Analisis eliminado";
    }).catch(error => {
      console.log("Error delete =>");
      console.log(error);
      return "Error al eliminar intente nuevamente";
    });
  }
}
