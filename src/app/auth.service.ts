import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isSignedIn = signal(localStorage.getItem('docdesk_signed_in') === 'true');

  signIn(): void {
    localStorage.setItem('docdesk_signed_in', 'true');
    this.isSignedIn.set(true);
  }

  signOut(): void {
    localStorage.removeItem('docdesk_signed_in');
    this.isSignedIn.set(false);
  }
}
