import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, updatePassword} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Storage, ref, uploadBytes } from '@angular/fire/storage';
import { Firestore, collection, addDoc, query, where, getDocs, setDoc, doc, getDoc, docData } from '@angular/fire/firestore';
import { BehaviorSubject, of } from 'rxjs';
import { getDownloadURL } from 'firebase/storage';
import { Observable } from 'rxjs';
import { switchMap,map,tap } from 'rxjs';
import { deleteDoc } from 'firebase/firestore';
const admin = require('firebase-admin');


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  currentUser:any;
  usercorreo : any
  pacientes : any = [];


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
      await setDoc(doc(usersRef, data.correo),{
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
    this.getPacientes();
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
        selfie: this.currentUser.selfie,
        apellidoM: data.apellidoM,
        edad: data.edad,
        telefono: data.telefono,
        direccion: data.direccion,
        tipoUsuario: this.currentUser.tipoUsuario,
        nombre: data.username,
        correo: data.email,
        password: data.password});
this.currentUser.nombre = data.username;
this.currentUser.correo = data.email;
this.currentUser.password = data.password;
this.currentUser.apellidoP = data.apellidoP;
this.currentUser.apellidoM = data.apellidoM;
this.currentUser.edad = data.edad;
this.currentUser.telefono = data.telefono;
this.currentUser.direccion = data.direccion;
console.log('Datos del usuario guardados:', data);

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
this.currentUser.nombre = data.username;
this.currentUser.correo = data.email;
this.currentUser.password = data.password;
this.currentUser.apellidoP = data.apellidoP;
this.currentUser.apellidoM = data.apellidoM;
this.currentUser.edad = data.edad;
this.currentUser.telefono = data.telefono;
this.currentUser.direccion = data.direccion;
console.log('Datos del usuario guardados:', data);
    }

  }

  getPacientes(){
    this.pacientes = [];
    const usersRef = collection(this.Firestore, 'users');
    const userQuery = query(usersRef, where('tipoUsuario', '==', 'paciente'));
    return getDocs(userQuery).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data());
        this.pacientes.push(doc.data());
      });
    });
  }

  eliminarUsuario(correo:any){
    admin.auth().deleteUser(correo).then(() => {
      const userRef = doc(this.Firestore, 'users', correo);
      return deleteDoc(userRef);
    }).catch((error:any) => {
      console.log('No se pudo eliminar: '+ error);
    });
  }
}
