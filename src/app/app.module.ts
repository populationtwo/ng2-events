import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import {
  EventService,
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  UpvoteComponent,
  DurationPipe,
    VoterService
} from "./events/index";

import { EventsAppComponent } from "./events-app.component";
import { NavBarComponent } from "./nav/nav-bar.component";
import { appRoutes } from "../routes";
import { Error404Component } from "./errors/404.component";
import { AuthService } from "./user/auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {
  JQ_TOKEN,
  TOASTR_TOKEN,
  Toastr,
  CollapsibleWellComponent, SimpleModalComponent,
  ModalTriggerDirective
} from './common/index';

let toastr: Toastr = window["toastr"];
let jQuery = window["$"];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
      UpvoteComponent
  ],
  providers: [
    EventService,
    { provide: JQ_TOKEN, useValue: jQuery },
    { provide: TOASTR_TOKEN, useValue: toastr },
    EventRouteActivator,
    EventListResolver,
    AuthService,
    VoterService,
    { provide: "canDeactivateCreateEvent", useValue: checkDirtyState }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) return window.confirm("Do you want to cancel?");
  return true;
}
