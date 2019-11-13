import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";

import { HomeComponent } from "./home.component";
import { SharedModule } from "../shared/shared.module";
import { MatFormFieldModule, MatSliderModule } from "@angular/material";
import { NoteFormComponent } from "./note-form/note-form.component";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MatCardModule } from "@angular/material/card";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MarkdownModule } from "ngx-markdown";
import { PointFormComponent } from "./point-form/point-form.component";
import {LMarkdownEditorModule} from 'ngx-markdown-editor';

@NgModule({
  declarations: [HomeComponent, NoteFormComponent, PointFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MarkdownModule,
    FormsModule,
    LMarkdownEditorModule
  ]
})
export class HomeModule {}
