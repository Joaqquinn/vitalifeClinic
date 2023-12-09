import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, updatePassword} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Storage, ref, uploadBytes } from '@angular/fire/storage';
import { Firestore, collection, addDoc, query, where, getDocs, setDoc, doc, getDoc, docData } from '@angular/fire/firestore';
import { BehaviorSubject, of } from 'rxjs';
import { getDownloadURL } from 'firebase/storage';
import { Observable } from 'rxjs';
import { switchMap,map,tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  currentUser:any;
  usercorreo : any


  constructor(
    private Firestore : Firestore,
    private auth:Auth,
    private router:Router,
    private storage: Storage
  ) { }



  register(email:any, password:any){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

    async createUser(data:any, tipoUsuario:any){
      const usersRef = collection(this.Firestore,'users');
      return await setDoc(doc(usersRef, data.correo),{
            nombre : data.nombre,
            apellidoP: data.apellidoP,
            apellidoM: data.apellidoM,
            edad: data.edad,
            correo :data.correo,
            telefono :data.telefono,
            direccion: data.direccion,
            password: data.password,
            tipoUsuario : tipoUsuario

    })
    }



    login(email: any, password: any) {
      return signInWithEmailAndPassword(this.auth, email, password);
    }

  async getUser(email:any){
    const usersRef = collection(this.Firestore, 'users');
    const userQuery = query(usersRef, where('correo', '==', email));
    return await getDocs(userQuery);

  }

  logout(){
    this.auth.signOut();
    this.router.navigate(['/paciente']);
    this.usercorreo = undefined;
    this.currentUser = undefined;
    this.loggedIn.next(false);
  }

  async subirSelfie(imagen:any){
    const storageRef = ref(this.storage, 'userImg/' + imagen.fname);
    await uploadBytes(storageRef, imagen.file);
    getDownloadURL(storageRef).then((url)=>{
      console.log("URL ===> ", url);
      this.currentUser.selfie = url;
      const usersRef = collection(this.Firestore, 'users');
      const userDoc = doc(usersRef, this.currentUser.correo);
      setDoc(userDoc, this.currentUser);
      return this.router.navigate(['/perfil']);
    }).catch((err)=>{
      console.log("ERROR AL OBTENER URL ===> ", err);
      return 'error'
    });
  }

  async refreshUser(){
    this.getUser(this.currentUser.correo).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        this.currentUser = doc.data();
      });
      console.log(this.currentUser);
    }).catch((error) => {
      console.log(error);
    });
  }

  async updateUser(data:any){
    const user = this.auth.currentUser;
    const newPassword = data.password;
    const usersRef = collection(this.Firestore, 'users');

    if(user != null){
      updatePassword(user, newPassword).then(() => {
        console.log('Password updated!');
      }).catch((error) => {
        console.log('No se pudo editar: '+ error);
      });
    }
    if(this.currentUser.selfie){
      await setDoc(doc(usersRef, data.email), {
        apellidoP: data.apellidoP,
        apellidoM: data.apellidoM,
        selfie: this.currentUser.selfie,
        edad: data.edad,
        telefono: data.telefono,
        direccion: data.direccion,
        tipoUsuario: this.currentUser.tipoUsuario,
        nombre: data.username,
        correo: data.email,
        password: data.password});
    }else{
      await setDoc(doc(usersRef, data.email), {
        apellidoP: data.apellidoP,
        apellidoM: data.apellidoM,
        edad: data.edad,
        telefono: data.telefono,
        direccion: data.direccion,
        tipoUsuario: this.currentUser.tipoUsuario,
        nombre: data.username,
        correo: data.email,
        password: data.password});
    }
    this.refreshUser();
  }

}
