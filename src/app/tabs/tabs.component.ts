import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  constructor() { }

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

  ngOnInit() {
  }
  

}
