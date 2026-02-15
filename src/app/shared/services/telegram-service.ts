import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TelegramResponse } from '../models/telegram-response.model';

@Injectable({
  providedIn: 'root',
})
export class TelegramService {
  private readonly httpClient = inject(HttpClient);

  public sendMessage(message: string): Observable<TelegramResponse> {
    return this.httpClient.get<TelegramResponse>(
      `https://api.telegram.org/bot6721371776:AAHkmm2E-YCYc1UnvVvDw_JghszvrDP7muA/sendMessage?chat_id=1268306946&text=${message}`,
    );
  }
}
