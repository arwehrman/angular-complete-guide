import { Component } from "@angular/core";
import { preserveWhitespacesDefault } from "@angular/compiler";
import { ɵangular_packages_forms_forms_f } from "@angular/forms";
import { stripSummaryForJitNameSuffix } from "@angular/compiler/src/aot/util";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styles: [
    `
      .online {
        color: #fff;
      }
    `
  ]
})
export class ServerComponent {
  serverId = 10;
  serverStatus = "offline";

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === "online" ? "green" : "red";
  }
}
