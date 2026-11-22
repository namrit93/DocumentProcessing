import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
 standalone:true,
 imports:[CommonModule,RouterLink],
 template:`
 <div class="shell">
  <aside>
   <div class="brand"><span>D</span><b>DocDesk</b></div>
   <nav><a class="active" routerLink="/dashboard"><i>▦</i> Overview</a><a routerLink="/dashboard"><i>＋</i> New upload</a><a routerLink="/dashboard"><i>◷</i> Processing</a><a routerLink="/dashboard"><i>✓</i> Verified</a><a routerLink="/dashboard"><i>!</i> Needs review</a></nav>
   <button class="signout" (click)="signOut()">↪ Sign out</button>
  </aside>
  <main>
   <header><div><p>WORKSPACE / OVERVIEW</p><h1>Good morning, Priya</h1></div><div class="profile"><button aria-label="Notifications">♧</button><div class="avatar">PS</div><div><b>Priya Sharma</b><small>Verification Officer</small></div></div></header>
   <section class="stats">
    <article><span class="stat-icon teal">◎</span><div><p>Pending review</p><h2>24</h2><small class="up">↑ 8% from last week</small></div></article>
    <article><span class="stat-icon gold">✓</span><div><p>Verified today</p><h2>18</h2><small>12 completed this morning</small></div></article>
    <article><span class="stat-icon red">!</span><div><p>Needs attention</p><h2>7</h2><small class="down">2 high priority</small></div></article>
   </section>
   <section class="workspace">
    <div class="queue">
     <div class="section-head"><div><h2>Review queue</h2><p>Documents awaiting verification</p></div><button>View all <span>→</span></button></div>
     <div class="table" role="table">
      <div class="tr th"><span>Customer</span><span>Document</span><span>Submitted</span><span>Status</span><span></span></div>
      <div class="tr" *ngFor="let d of documents"><span><b class="mini-avatar" [class.goldAvatar]="d.color==='gold'">{{d.initials}}</b><b>{{d.name}}</b></span><span><i [class]="d.type==='PAN'?'doc pan':'doc aadhaar'">{{d.type}}</i>{{d.number}}</span><span>{{d.time}}</span><span><em [class]="d.status.toLowerCase().replace(' ','-')">{{d.status}}</em></span><span>›</span></div>
     </div>
    </div>
    <div class="side">
     <article class="upload-card"><span class="upload-icon">↥</span><h3>Upload documents</h3><p>Add Aadhaar, PAN or other identity documents.</p><button (click)="upload()">Choose files</button></article>
     <article class="progress-card"><div class="section-head"><h3>Verification progress</h3><b>68%</b></div><div class="bar"><span></span></div><p><b>34</b> of 50 documents processed</p></article>
    </div>
   </section>
  </main>
 </div>`,
 styles:[`
 :host{display:block}.shell{min-height:100vh;display:grid;grid-template-columns:238px 1fr;background:#f4f7f6}aside{background:#fff;border-right:1px solid #e3eae8;padding:28px 18px;display:flex;flex-direction:column}.brand{height:50px;display:flex;align-items:center;gap:10px;padding:0 10px;color:#173f42}.brand span{width:38px;height:38px;display:grid;place-items:center;border-radius:11px;background:#17656b;color:#fff;font-size:20px;font-weight:800}.brand b{font-size:20px}nav{display:flex;flex-direction:column;gap:6px;margin-top:28px}nav a{height:46px;padding:0 14px;border-radius:8px;display:flex;align-items:center;gap:12px;text-decoration:none;color:#6d7d7c;font-size:14px}nav a i{width:22px;text-align:center;font-style:normal}nav a.active{background:#edf4f2;color:#17656b;font-weight:700}.signout{margin-top:auto;border:0;background:transparent;text-align:left;padding:14px;color:#7d8d8c}main{padding:28px 38px 38px;min-width:0}header{display:flex;justify-content:space-between;align-items:center;margin-bottom:26px}header p{font-size:10px;letter-spacing:1.5px;color:#91a09f;margin:0 0 7px}header h1{font-family:Georgia,serif;font-size:32px;color:#173f42;margin:0}.profile{display:flex;align-items:center;gap:10px}.profile button{border:1px solid #dde6e4;width:38px;height:38px;border-radius:50%;background:white}.avatar{width:38px;height:38px;border-radius:50%;background:#d9a85d;display:grid;place-items:center;color:white;font-size:12px}.profile b,.profile small{display:block}.profile b{font-size:13px}.profile small{font-size:10px;color:#91a09f;margin-top:3px}.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.stats article{background:white;border:1px solid #e5ebe9;border-radius:10px;height:116px;padding:20px;box-sizing:border-box;display:flex;gap:16px}.stat-icon{width:42px;height:42px;border-radius:9px;display:grid;place-items:center}.teal{background:#dceeea;color:#17656b}.gold{background:#f5edda;color:#b98939}.red{background:#f5e5df;color:#b85d48}.stats p{margin:0;color:#7d8d8c;font-size:12px}.stats h2{font-size:27px;margin:5px 0 2px;color:#173f42}.stats small{font-size:10px;color:#9aa6a5}.stats .up{color:#4b9b83}.stats .down{color:#c27663}.workspace{display:grid;grid-template-columns:minmax(0,1fr) 260px;gap:16px;margin-top:16px}.queue,.progress-card{background:white;border:1px solid #e5ebe9;border-radius:10px}.queue{overflow:hidden}.section-head{height:74px;padding:0 20px;display:flex;align-items:center;justify-content:space-between}.section-head h2,.section-head h3{font-family:Georgia,serif;margin:0;color:#173f42}.section-head h2{font-size:20px}.section-head p{font-size:11px;color:#98a5a4;margin:5px 0 0}.section-head button{border:0;background:transparent;color:#17656b;font-size:12px}.table{width:100%}.tr{display:grid;grid-template-columns:1.15fr 1.25fr .9fr .8fr 20px;align-items:center;min-height:68px;border-top:1px solid #edf1f0;padding:0 20px;font-size:12px;color:#536665}.tr>span:first-child{display:flex;align-items:center;gap:9px}.mini-avatar{width:34px;height:34px;border-radius:50%;background:#cce2dc;display:grid!important;place-items:center;color:#17656b;font-size:10px}.goldAvatar{background:#ead8b9;color:#9a7333}.th{min-height:38px;background:#fafbfa;color:#99a5a4;font-size:10px;text-transform:uppercase}.doc{display:inline-grid;place-items:center;width:38px;height:26px;border-radius:5px;margin-right:7px;font-size:9px;font-style:normal}.aadhaar{background:#f0e4ce;color:#9a7333}.pan{background:#dce9ed;color:#50737c}em{font-style:normal;border-radius:20px;padding:5px 8px;font-size:10px}.pending{background:#f7edda;color:#a57a32}.verified{background:#dff0e9;color:#42826d}.review{background:#f4e2dc;color:#b26855}.side{display:flex;flex-direction:column;gap:16px}.upload-card{text-align:center;background:#17656b;border-radius:10px;color:white;padding:27px 20px}.upload-icon{width:42px;height:42px;border-radius:50%;border:1px solid #72aaa4;display:grid;place-items:center;margin:auto}.upload-card h3{font-family:Georgia,serif;margin:14px 0 7px}.upload-card p{font-size:11px;line-height:1.5;color:#cce0dd}.upload-card button{height:40px;width:100%;border:0;border-radius:7px;background:white;color:#17656b;font-weight:700;margin-top:12px}.progress-card{padding-bottom:18px}.progress-card .section-head{height:58px}.progress-card b{color:#17656b}.bar{height:7px;background:#edf1f0;border-radius:20px;margin:0 20px}.bar span{display:block;width:68%;height:100%;background:#d2a457;border-radius:20px}.progress-card p{font-size:11px;color:#91a09f;margin:14px 20px 0}@media(max-width:1000px){.shell{grid-template-columns:76px 1fr}aside{padding:28px 10px}.brand b,nav a:not(.active),nav a{font-size:0}.brand{padding:0}.brand b{display:none}nav a i{font-size:15px}.signout{font-size:0}.signout::first-letter{font-size:16px}.workspace{grid-template-columns:1fr}.side{display:grid;grid-template-columns:1fr 1fr}.stats{grid-template-columns:repeat(3,1fr)}}@media(max-width:700px){.shell{display:block}aside{display:none}main{padding:20px}.profile>div:last-child{display:none}.stats{grid-template-columns:1fr}.stats article{height:95px}.workspace{grid-template-columns:1fr}.side{grid-template-columns:1fr}.table{overflow-x:auto}.tr{min-width:620px}.th{display:none}}
 `]
})
export class DashboardComponent {
 documents=[
  {initials:'RK',name:'Rahul Kumar',type:'Aadhaar',number:'XXXX XXXX 4821',time:'Today, 10:24 AM',status:'Pending',color:'teal'},
  {initials:'AS',name:'Anjali Singh',type:'PAN',number:'ABCDE1234F',time:'Today, 09:48 AM',status:'Verified',color:'gold'},
  {initials:'VM',name:'Vikram Mehta',type:'Aadhaar',number:'XXXX XXXX 7093',time:'Yesterday, 4:12 PM',status:'Review',color:'teal'},
  {initials:'SN',name:'Sneha Nair',type:'PAN',number:'PQRSX5678L',time:'Yesterday, 2:36 PM',status:'Verified',color:'gold'}
 ];
 private auth=inject(AuthService); private router=inject(Router);
 signOut(){this.auth.signOut();this.router.navigate(['/sign-out']);}
 upload(){alert('Mock upload: choose Aadhaar, PAN or another document file.');}
}
