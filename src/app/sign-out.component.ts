import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({ standalone:true, template:`<main class="signout"><div><div class="mark">D</div><h1>You are signed out</h1><p>Your secure workspace session has ended.</p><button (click)="again()">Sign in again</button></div></main>`, styles:[`.signout{min-height:100vh;display:grid;place-items:center;text-align:center;background:#f4f8f7}.signout>div{padding:32px}.mark{width:54px;height:54px;border-radius:16px;background:#17656b;color:white;display:grid;place-items:center;font-size:24px;font-weight:800;margin:auto}.signout h1{font-family:Georgia,serif;color:#173f42;font-size:38px;margin:24px 0 8px}.signout p{color:#7d8d8d}.signout button{height:48px;padding:0 28px;border:0;border-radius:8px;background:#17656b;color:white;font-weight:700;margin-top:16px}`] })
export class SignOutComponent { private auth=inject(AuthService); private router=inject(Router); constructor(){this.auth.signOut();} again(){this.router.navigate(['/sign-in']);} }
