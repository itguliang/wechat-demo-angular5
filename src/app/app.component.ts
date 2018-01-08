import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tabs=[{
  	title:"微信",
  	class:"ion-chat",
  	link:"/chatlist"
  },{
  	title:"通讯录",
  	class:"ion-contact",
  	link:"/contacts"
  },{
  	title:"发现",
  	class:"ion-discover",
  	link:"/discover"
  },{
  	title:"我",
  	class:"ion-account",
  	link:"/account"
  }];
}
