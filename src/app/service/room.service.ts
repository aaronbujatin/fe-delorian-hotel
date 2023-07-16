import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../model/room';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private httpClient : HttpClient) { }

  private readonly apiRoomUrl = environment.baseUrl

  getRoomById(id : number) : Observable<Room> {
    return this.httpClient.get<Room>(`${this.apiRoomUrl}/${id}`);   
  }
}
