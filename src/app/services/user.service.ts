import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getAuth, onAuthStateChanged, updatePassword, user } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Storage, ref, uploadBytes } from '@angular/fire/storage';
import { Firestore, collection, addDoc, query, where, getDocs, setDoc, doc, getDoc } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { getDownloadURL } from 'firebase/storage';


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

  async createUser(data:any){
    const usersRef = collection(this.Firestore,'users');
    return await setDoc(doc(usersRef, data.correo),{
          nombre : data.nombre,
          apellidoP: data.apellidoP,
          apellidoM: data.apellidoM,
          edad: data.edad,
          correo :data.correo,
          telefono :data.telefono,
          direccion: data.direccion,
          password: data.password    
  })
  }
  login(email:any, password:any){
    return signInWithEmailAndPassword(this.auth, email, password)
  }

  async getUser(email:any){
    const usersRef = collection(this.Firestore, 'users');
    const userQuery = query(usersRef, where('correo', '==', email));
    return await getDocs(userQuery);
  }

  logout(){
    this.auth.signOut();
    this.router.navigate(['/login']);
    this.usercorreo = undefined;
    this.loggedIn.next(false);
  }







}
