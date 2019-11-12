import { Component, OnInit, ViewChild } from "@angular/core";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditorComponent } from "@ckeditor/ckeditor5-angular";
import "@ckeditor/ckeditor5-build-classic/build/translations/zh-cn";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  @ViewChild("editor", { static: false }) editorComponent: CKEditorComponent;

  public Editor = ClassicEditor;
  public config = {
    language: "zh-cn"
  };
  public model = {
    editorData: "<p>Hello, world!</p>"
  };

  constructor() {}

  ngOnInit() {}
}
