import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  markdown = "";
  inter: any;
  constructor() {}

  ngOnInit() {
    this.inter = setInterval(() => {
      localStorage.setItem("markdown", this.markdown);
    }, 1000);
  }
}
