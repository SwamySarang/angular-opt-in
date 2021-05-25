import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { VaccineListComponent } from './vaccine-list/vaccine-list.component';
import { ProfileComponent } from './profile/profile.component';
import { MembersComponent } from './profile/members.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    TimepickerModule.forRoot(),
    CollapseModule.forRoot(),
    RouterModule.forRoot([{ path: '', component: VaccineListComponent }])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    VaccineListComponent,
    ProfileComponent,
    MembersComponent,
    ScheduleComponent,
    ModalComponent
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent],
  providers: [BsModalRef]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
