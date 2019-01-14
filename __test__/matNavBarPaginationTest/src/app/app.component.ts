import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";

  public navLinks = [
    {
      name: "First component",
      link: "first"
    },
    {
      name: "Second component",
      link: "second"
    },
    {
      name: "Third component",
      link: "third"
    },
    {
      name: "Fourth component",
      link: "fourth"
    },
    {
      name: "Fifth component",
      link: "fifth"
    },
    {
      name: "Sixth component",
      link: "sixth"
    }
  ];
}
