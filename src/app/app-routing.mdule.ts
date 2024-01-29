import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./Life Cycles/home.component";
import { UserComponent } from "./CRUD Angular/user.component";
import { NgModule } from "@angular/core";

const router: Routes = [
  {path: 'lifecycles', component: HomeComponent},
  {path: 'CRUD', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
