import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarperfilPage implements OnInit {

  image: any;

  constructor() { }

  ngOnInit() {
  }

  takePicture = async () => {
    const image2 = await Camera.getPhoto({
      quality: 90, //calidad d imagen
      allowEditing: false, //se dirige al editor de fotos para modificarla / si no  quiero eso se pone en falso si lo quiero se pone true
      resultType: CameraResultType.Uri //hago que se convierta la imagen en info de direccion esta es temporalmente

    });
  
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    //var imageUrl = image.webPath;
    this.image = image2.dataUrl; // para que se guarde en la BD
    // Can be set to the src of an image now
    //imageElement.src = imageUrl;
  };
  

}
