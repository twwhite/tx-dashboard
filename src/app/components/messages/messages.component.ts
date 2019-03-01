import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-messages',
  template: `
  <div *ngIf="messageService.messages.length">
    <h2>Messages</h2>
    <button class="clear button" (click)="messageService.clear()">Clear</button>
    <div *ngFor='let message of messageService.messages'> {{message}} </div>
  </div>`,
  styleUrls: []
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
