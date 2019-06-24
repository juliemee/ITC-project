import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  ngZone: any;
  router: any;
  constructor(public afAuth: AngularFireAuth) { }

  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
    }  

    // Auth logic to run auth providers
  async AuthLogin(provider: auth.AuthProvider | auth.GoogleAuthProvider) {
    try {
      const result = await this.afAuth.auth.signInWithPopup(provider);
    }
    catch (error) {
      window.alert(error);
    }
    }
}
