import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <main class="signin-page">
      <section class="signin-art">
        <div class="brand-light"><span class="brand-mark">D</span><b>DocDesk</b></div>
        <div class="art-copy"><span class="eyebrow">BANKING WORKSPACE</span><h1>Document verification,<br/>made effortless.</h1><p>Securely upload, review and process customer documents in one simple workspace.</p></div>
        <div class="orb orb-a"></div><div class="orb orb-b"></div>
      </section>
      <section class="signin-panel">
        <form class="signin-card" (ngSubmit)="signIn()">
          <div class="mobile-brand"><span class="brand-mark">D</span><b>DocDesk</b></div>
          <h2>Welcome back</h2><p class="muted">Sign in to continue to your workspace</p>
          <label>Email address<input type="email" [(ngModel)]="email" name="email" placeholder="name@bank.com" required /></label>
          <label>Password<div class="password-wrap"><input [type]="showPassword ? 'text' : 'password'" [(ngModel)]="password" name="password" placeholder="Enter your password" required /><button type="button" (click)="showPassword=!showPassword" aria-label="Toggle password visibility">◉</button></div></label>
          <div class="form-row"><label class="check"><input type="checkbox" [(ngModel)]="remember" name="remember" /> Remember me</label><a href="#">Forgot password?</a></div>
          <button class="primary" type="submit">Sign in <span>→</span></button>
          <p class="secure">● Secure banking environment</p>
        </form>
      </section>
    </main>`,
  styles: [`
    :host{display:block}.signin-page{min-height:100vh;display:grid;grid-template-columns:1.08fr .92fr}.signin-art{position:relative;overflow:hidden;background:#145a62;color:white;padding:38px 7%;display:flex;flex-direction:column;justify-content:space-between}.brand-light,.mobile-brand{display:flex;align-items:center;gap:10px}.brand-mark{width:38px;height:38px;border-radius:11px;background:#62c7b1;color:#123f43;display:grid;place-items:center;font-weight:800}.brand-light b{font-size:20px}.art-copy{position:relative;z-index:2;margin-bottom:13%}.eyebrow{font-size:12px;letter-spacing:2px;color:#9edbd1}.art-copy h1{font-family:Georgia,serif;font-size:clamp(44px,5vw,72px);line-height:1.02;margin:16px 0 22px;font-weight:500}.art-copy p{max-width:520px;color:#d6e8e7;line-height:1.7}.orb{position:absolute;border-radius:50%;filter:blur(1px)}.orb-a{width:420px;height:420px;background:#d49a47;right:-190px;top:-170px;opacity:.35}.orb-b{width:260px;height:260px;border:44px solid #63a99d;left:-150px;bottom:-130px}.signin-panel{display:grid;place-items:center;background:#f7faf9;padding:32px}.signin-card{width:min(420px,90%)}.signin-card h2{font-family:Georgia,serif;font-size:38px;margin:80px 0 8px;color:#173f42}.muted{color:#7d8d8d;margin:0 0 34px}.signin-card label{display:block;font-size:13px;font-weight:700;color:#2f484a;margin-top:18px}.signin-card input[type=email],.signin-card input[type=password],.signin-card input[type=text]{width:100%;height:52px;margin-top:8px;border:1px solid #d9e3e1;border-radius:8px;padding:0 14px;box-sizing:border-box;background:white;color:#173f42}.password-wrap{position:relative}.password-wrap button{position:absolute;right:12px;top:21px;border:0;background:transparent;color:#8ba09f}.form-row{display:flex;justify-content:space-between;align-items:center;margin:16px 0 24px}.check{display:flex!important;align-items:center;gap:8px;font-weight:500!important}.check input{accent-color:#145a62}.form-row a{color:#17656b;font-size:13px}.primary{width:100%;height:54px;border:0;border-radius:8px;background:#17656b;color:white;font-weight:700}.primary span{float:right;margin-right:18px}.secure{text-align:center;font-size:12px;color:#9aaaa9;margin-top:22px}.mobile-brand{display:none}@media(max-width:760px){.signin-page{grid-template-columns:1fr}.signin-art{display:none}.signin-panel{min-height:100vh}.signin-card h2{margin-top:30px}.mobile-brand{display:flex;color:#173f42;margin-bottom:20px}}
  `]
})
export class SignInComponent { email=''; password=''; remember=true; showPassword=false; private auth=inject(AuthService); private router=inject(Router); signIn(){this.auth.signIn();this.router.navigate(['/dashboard']);} }
