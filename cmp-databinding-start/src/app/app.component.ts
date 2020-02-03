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
  ngOnInit() {}
  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: "server",
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: "blueprint",
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
}
