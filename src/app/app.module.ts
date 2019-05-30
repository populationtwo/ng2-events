import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  DurationPipe
} from "./events/index";

import { EventsAppComponent } from "./events-app.component";
import { NavBarComponent } from "./nav/nav-bar.component";
import { appRoutes } from "../routes";
import { Error404Component } from "./errors/404.component";
import { AuthService } from "./user/auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SessionListComponent } from "./events/event-details/session-list.component";
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
    ModalTriggerDirective
  ],
  providers: [
    EventService,
    { provide: JQ_TOKEN, useValue: jQuery },
    { provide: TOASTR_TOKEN, useValue: toastr },
    EventRouteActivator,
    EventListResolver,
    AuthService,
    { provide: "canDeactivateCreateEvent", useValue: checkDirtyState }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) return window.confirm("Do you want to cancel?");
  return true;
}
