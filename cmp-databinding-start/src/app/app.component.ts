import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  serverElements = [
    { type: "server", name: "Testserver", content: "Just a test" },
    { type: "server", name: "Testserver2", content: "Just a test 2" },
    { type: "server", name: "Testserver3", content: "Just a test 3" }
  ];
}
