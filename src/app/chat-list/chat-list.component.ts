import { Component, OnInit } from '@angular/core';

import { Chat } from '../chat';
import { ChatService } from '../chat.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {

  constructor(private chatService:ChatService) {}

  chatList:Chat[];

  getChatList():void {
      this.chatService.getChatList()
      .subscribe(chatList => this.chatList = chatList);
  }
  ngOnInit() {
   this.getChatList();
  }

}
