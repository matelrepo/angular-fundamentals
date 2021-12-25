import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import{PassengerDashboardComponent} from "./containers/passenger-dashboard/passenger-dashboard.component";
import {PassengerCountComponents} from "./components/passenger-count/passenger-count.components";
import {PassengerDetailComponents} from "./components/passenger-detail/passenger-detail.components";

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponents,
    PassengerDetailComponents
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PassengerDashboardComponent
  ],
})
export class PassengerDashboardModule {}
