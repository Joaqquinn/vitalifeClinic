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


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  currentUser:any;
  usercorreo : any
  pacientes : any = [];
  usuarios : any = [];
  medicos : any = [];
  feachasAgendadas : any = [];
  horasPaciente : any = [];


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
      if(tipoUsuario == 'medico'){
        await setDoc(doc(usersRef, data.correo),{
              nombre : data.nombre,
              apellidoP: data.apellidoP,
              edad: data.edad,
              correo :data.correo,
              telefono :data.telefono,
              direccion: data.direccion,
              password: data.password,
              tipoUsuario : tipoUsuario,
              especialidad: data.espocialidad
      })
      }else{
        await setDoc(doc(usersRef, data.correo),{
          nombre : data.nombre,
          apellidoP: data.apellidoP,
          edad: data.edad,
          correo :data.correo,
          telefono :data.telefono,
          direccion: data.direccion,
          password: data.password,
          tipoUsuario : tipoUsuario
  })
      }
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
    this.horasPaciente = [];
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

  getMedicos(){
    this.medicos = [];
    const usersRef = collection(this.Firestore, 'users');
    const userQuery = query(usersRef, where('tipoUsuario', '==', 'medico'));
    return getDocs(userQuery).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data());
        this.medicos.push(doc.data());
      });
    });
  }

  getUsuarios(){
    this.usuarios = [];
    const usersRef = collection(this.Firestore, 'users');
    return getDocs(usersRef).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data());
        this.usuarios.push(doc.data());
      });
    });
  }

  getFechas(medico:any){
    this.feachasAgendadas = [];
    const usersRef = collection(this.Firestore, 'agendadas');
    const userQuery = query(usersRef, where('correoMedico', '==', medico.correo));
    return getDocs(userQuery).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.feachasAgendadas.push(doc.data()['fechaAgendada']);
      });
      console.log(this.feachasAgendadas)
    });
  }

  getFechasPaciente(){
    this.horasPaciente = [];
    const usersRef = collection(this.Firestore, 'agendadas');
    const userQuery = query(usersRef, where('correoPaciente', '==', this.currentUser.correo));
    return getDocs(userQuery).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.horasPaciente.push(doc.data());
      });
      console.log(this.horasPaciente)
    });
  }

  eliminarUsuario(correo:any){
    const userRef = doc(this.Firestore, 'users', correo);
    deleteDoc(userRef);
    this.getPacientes();
    this.getMedicos();
  }

    async agendarHora(medico:any, fecha:string){
      const agendaRef = collection(this.Firestore,'agendadas');
      if(medico.selfie){
        await setDoc(doc(agendaRef),{
          especialidad: medico.especialidad,
          nombrePaciente : this.currentUser.nombre + " " + this.currentUser.apellidoP,
          correoPaciente :this.currentUser.correo,
          telefonoPaciente :this.currentUser.telefono,
          nombreMedico: medico.nombre + " " + medico.apellidoP,
          correoMedico: medico.correo,
          telefonoMedico: medico.telefono,
          fotoMedico: medico.selfie,
          fechaAgendada: fecha.split('T')[0]
  })
      }else{
        await setDoc(doc(agendaRef),{
          especialidad: medico.especialidad,
          nombrePaciente : this.currentUser.nombre + " " + this.currentUser.apellidoP,
          correoPaciente :this.currentUser.correo,
          telefonoPaciente :this.currentUser.telefono,
          nombreMedico: medico.nombre + " " + medico.apellidoP,
          correoMedico: medico.correo,
          telefonoMedico: medico.telefono,
          fechaAgendada: fecha.split('T')[0]
  })
      }
        
      this.getFechasPaciente();
    }

  eliminarHora(hora:any){
    const collRef = collection(this.Firestore, 'agendadas');
    const dateQuery = query(collRef, where('correoMedico', '==', hora.correoMedico), where('fechaAgendada', '==', hora.fechaAgendada),
    where('correoPaciente', '==', hora.correoPaciente));
    getDocs(dateQuery).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        deleteDoc(doc.ref);
        this.getFechasPaciente();
      });
    });
  }

}
