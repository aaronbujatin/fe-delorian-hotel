import { Component } from '@angular/core';

@Component({
  selector: 'app-select-room',
  templateUrl: './select-room.component.html'
})
export class SelectRoomComponent {

  roomStandard : number = 3500;
  roomDeluxe : number = 5500;
  roomSuite : number = 7500;


}
