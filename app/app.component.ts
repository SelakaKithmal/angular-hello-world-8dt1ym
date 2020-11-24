import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular 4";
  arrayChampions: any;
  data = [
    {
      Aatrox: {
        id: "Aatrox",
        key: "266"
      },
      Ahri: {
        id: "Ahri",
        key: "103"
      },
      Akali: {
        id: "Akali",
        key: "84"
      }
    }
  ];

  constructor() {}
  ngOnInit() {
    this.ArrayIterator();
  }

  ArrayIterator() {
    let IteratableArray = Array();
    for (let item of Object.keys(this.data[0])) {
      var eventItem = Object.values(this.data[0]);
      IteratableArray.push(eventItem);
    }
    this.arrayChampions = IteratableArray[0];
  }
}
