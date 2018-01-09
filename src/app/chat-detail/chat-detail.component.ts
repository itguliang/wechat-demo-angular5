import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Chat} from '../chat';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.component.html',
  styleUrls: ['./chat-detail.component.scss']
})
export class ChatDetailComponent implements OnInit {

  constructor(
  	private route: ActivatedRoute,
    private chatService: ChatService,
    private location: Location
  ) { }

  chat: Chat;

  getChatDetail(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.chatService.getChat(id)
      .subscribe(chat => this.chat = chat);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
  	this.getChatDetail();
  }

}
