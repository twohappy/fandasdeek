import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { DatabaseService } from "../../data-access/database.service";
import { Point } from "../../data-access/entities/point.entity";

@Component({
  selector: "point-form",
  templateUrl: "./point-form.component.html",
  styleUrls: ["./point-form.component.css"]
})
export class PointFormComponent implements OnInit {
  pointForm = this.fb.group({
    title: null,
    content: null
  });

  get valuuu() {
    return JSON.stringify(this.pointForm.value, null, 2);
  }

  constructor(private fb: FormBuilder, private databaseService: DatabaseService) {}

  ngOnInit(): void {
    this.databaseService.connection
      .then(() => Point.findOne())
      .then(point => {
        this.pointForm.controls.title.setValue(point.name);
        this.pointForm.controls.content.setValue(point.content);
      });
  }

  onSubmit() {
    alert("Thanks!");
    const point = new Point();

    point.name = this.pointForm.value.title;
    point.content = this.pointForm.value.content;

    this.databaseService.connection.then(() => point.save()).then(() => {});
  }
}
