import {Component, Input} from "@angular/core";
import {Passenger} from "../../models/passengers.interface";

@Component({
  selector:'passenger-detail',
  styleUrls:['passenger-detail.component.scss'],
  template: `
  <div>
  <span class="status" [class.checked-in]="detail.checkedIn"></span>
    {{ detail.fullname }}
    <div class="date">
      Check in date:
      {{ detail.checkInDate ? (detail.checkInDate | date: 'yyMMMMd' | uppercase) : 'Not checked in' }}
    </div>
    <div class="children">
      Children: {{ detail.children?.length || 0 }}
    </div>
  </div>
  `
})
export class PassengerDetailComponents{
  @Input()
  detail: Passenger;
  constructor() {}
}
