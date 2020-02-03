import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated //none or native
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input("srvElement") element: {
    //assigning an alias outside the component
    type: string;
    name: string;
    content: string;
  };
  @Input() name: string;

  constructor() {
    console.log("constructer called");
  }

  ngOnChanges(changes: SimpleChanges) {
    // only lifecycle that recieves an arguement
    console.log("ngOnChanges called");
    console.log(changes);
  }

  ngOnInit() {
    console.log("ngOnInit called");
  }
}
