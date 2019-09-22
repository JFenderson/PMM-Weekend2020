import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { AboutComponent } from "./about/about.component";
import { ScheduleComponent } from "./schedule/schedule.component";
import { Pmmweekend19Component } from "./pmmweekend19/pmmweekend19.component";
import { RegistrationComponent } from "./registration/registration.component";
import { ContactComponent } from "./contact/contact.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { Dirty30Component } from "./dirty30/dirty30.component";


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent,
    data: { title: "Home Component" }
  },
  {
    path: "about",
    component: AboutComponent,
    data: { title: "About Component" }
  },
  {
    path: "schedule",
    component: ScheduleComponent,
    data: { title: "Schedule Component" }
  },
  {
    path: "pmmweekend",
    component: Pmmweekend19Component,
    data: { title: "PMM Weekend 19 Component" }
  },
  {
    path: "dirty30",
    component: Dirty30Component,
    data: { title: "Dirty 30 Component" }
  },
  {
    path: "registration",
    component: RegistrationComponent,
    data: { title: "Registration Component" }
  },
  {
    path: "contact",
    component: ContactComponent,
    data: { title: "Contact Component" }
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
