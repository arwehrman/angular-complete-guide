import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SuccessAlertComponent } from "./success-alert/sucess-alert.component";
import { WarningAlertComponent } from "./warning-alert/warning-alert.component";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, SuccessAlertComponent, WarningAlertComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
