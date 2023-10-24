import { Component } from '@angular/core';
import {HistoryService} from "../services/history/history.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  history:string[] = []

  constructor(private historyService:HistoryService) {
    this.history = this.historyService.historyStack.reverse()

  }
}
