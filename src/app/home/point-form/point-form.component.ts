import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { DatabaseService } from "../../data-access/database.service";
import { Point } from "../../data-access/entities/point.entity";
interface UploadResult {
  isImg: boolean;
  name: string;
  url: string;
}
@Component({
  selector: "app-point-form",
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

  constructor(private fb: FormBuilder, private databaseService: DatabaseService) {
    this.doUpload = this.doUpload.bind(this);
  }

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

  // doUpload(files: Array<File>): Promise<Array<UploadResult>> {
  doUpload(files: Array<File>): void {
    console.log(files);
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     let result: Array<UploadResult> = [];
    //     for (let file of files) {
    //       result.push({
    //         name: file.name,
    //         url: `https://avatars3.githubusercontent.com/${file.name}`,
    //         isImg: file.type.indexOf("image") !== -1
    //       });
    //     }
    //     resolve(result);
    //   }, 3000);
    // });
  }
}
