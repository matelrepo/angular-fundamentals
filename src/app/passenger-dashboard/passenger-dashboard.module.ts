import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

//containers
import{PassengerDashboardComponent} from "./containers/passenger-dashboard/passenger-dashboard.component";

//components
import {PassengerCountComponents} from "./components/passenger-count/passenger-count.components";
import {PassengerDetailComponents} from "./components/passenger-detail/passenger-detail.components";
import {PassengerDashboardService} from "./passenger-dashboard.service";
import {HttpClientModule} from "@angular/common/http";

//service


@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponents,
    PassengerDetailComponents
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    PassengerDashboardComponent
  ],
  providers:[
    PassengerDashboardService
  ]
})
export class PassengerDashboardModule {}
