import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { NoteFormComponent } from "./note-form/note-form.component";
import { PointFormComponent } from "./point-form/point-form.component";

const routes: Routes = [
  // {
  //   path: "home",
  //   component: HomeComponent
  // },
  {
    path: "point",
    component: PointFormComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
