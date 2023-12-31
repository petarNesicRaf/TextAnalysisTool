import { Injectable } from '@angular/core';
import {environment} from "../../environment/environment";
import {HttpClient} from "@angular/common/http";
import {Sentiment} from "../../model";
import {Observable} from "rxjs";
import {HistoryService} from "../history/history.service";

@Injectable({
  providedIn: 'root'
})
export class SentimentService {
  private readonly apiURL: string = environment.sentimentApi
  constructor(private httpClient: HttpClient, private historyService:HistoryService) { }

  getSentiment(text:string,lang:string): Observable<Sentiment>
  {
    const token = localStorage.getItem("token")
    const encodedText = encodeURIComponent(text)
    const url = `${this.apiURL}?lang=${lang}&text=${encodedText}&token=${token}`
    const date = new Date().toLocaleString(); // Get the current date and time
    const format =`[${date}] GET ${url}`
    this.historyService.push(format)
    return this.httpClient.get<Sentiment>(url)
  }



}
