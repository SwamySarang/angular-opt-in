import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import {
  Member,
  VXN_TYPES,
  VXN_LOCATION_PREFERENCE,
  RELATION_TYPES, GENDER,
  SCHEDULE_GROUP_TYPES
} from './../employees';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  // input data from Modal Consumers
  @Input() member?: Member;
  @Input() mode?: string;

  public event: EventEmitter<Member> = new EventEmitter();

  // list of values for the select elements (vaccine preference and vaccine location preference
  relationTypes = Object.values(RELATION_TYPES);
  vxnPrefs = Object.values(VXN_TYPES);
  locnPrefs = Object.values(VXN_LOCATION_PREFERENCE);
  groups = Object.values(SCHEDULE_GROUP_TYPES);

  // Reactive Form elements
  dependentForm = new FormGroup({
    relationType: new FormControl('Select', [Validators.required, Validators.minLength(4)]),
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    vxnType: new FormControl('Select', Validators.required),
    locationType: new FormControl('Select', Validators.required),
    group: new FormControl('Select', Validators.required)
  });

  constructor(private bsModalRef: BsModalRef) {}

  ngOnInit() {
    console.log("modal mode ", this.mode);
    if (this.mode === 'add') {
    } else if (this.mode === 'edit') {
      this.dependentForm.controls.relationType.setValue(this.member?.relationType);
      this.dependentForm.controls.name.setValue(this.member?.name);
      this.dependentForm.controls.age.setValue(this.member?.age);
      this.dependentForm.controls.location.setValue(this.member?.location);
      this.dependentForm.controls.vxnType.setValue(this.member?.vxnType);
      this.dependentForm.controls.locationType.setValue(this.member?.locationType);
      this.dependentForm.controls.group.setValue(this.member?.group);
    }
  }

  onRelationTypeChange(event: Event) {
    console.log(
      'this.relationType ',
      this.dependentForm.controls.relationType.value
    );
  }

  onVaccinePreferenceChange(event: Event) {
    console.log(
      'this.vxnType ',
      this.dependentForm.controls.vxnType.value
    );
  }

  onLocationPreferenceChange(event: Event) {
    console.log(
      'this.locationType ',
      this.dependentForm.controls.locationType.value
    );
  }

  onDependentSubmit(event: Event) {
    console.log(this.dependentForm, this.dependentForm.value);
    this.bsModalRef.hide();
    this.event.emit(this.extractMember(this.dependentForm.value));
  }

  private extractMember(dependentFormValue: any): Member {
    let member: Member = {
      relationType: dependentFormValue.relationType as RELATION_TYPES,
      name: dependentFormValue.name,
      age: dependentFormValue.age,
      location: dependentFormValue.location,
      vxnType: dependentFormValue.vxnType as VXN_TYPES,
      locationType: dependentFormValue.locationType as VXN_LOCATION_PREFERENCE,
      group: dependentFormValue.group as SCHEDULE_GROUP_TYPES
    };

    return member;
  }
}
