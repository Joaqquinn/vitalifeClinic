import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword,} from '@angular/fire/auth';
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
      return this.router.navigate(['/indice']);
    }).catch((err)=>{
      console.log("ERROR AL OBTENER URL ===> ", err);
      return 'error'
    });
  }



}
