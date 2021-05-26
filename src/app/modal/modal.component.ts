import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import {
  Member,
  VXN_TYPES,
  VXN_LOCATION_PREFERENCE,
  RELATION_TYPES,
  GENDER,
  SCHEDULE_GROUP_TYPES,
  DOSE_TYPES,
  SCHEDULE_DAY_TYPES,
  SCHEDULE_SLOT_TYPES
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
  @Input() empRegisteredDay?: string;

  public event: EventEmitter<Member> = new EventEmitter();
  displayDose2BeforeDatePicker = false;
  enableSlots: boolean = true;

  // list of values for the select elements (vaccine preference and vaccine location preference
  relationTypes = Object.values(RELATION_TYPES);
  vxnPrefs = Object.values(VXN_TYPES);
  doses = Object.values(DOSE_TYPES);
  days = Object.values(SCHEDULE_DAY_TYPES);
  slots = Object.values(SCHEDULE_SLOT_TYPES);

  // Reactive Form elements
  dependentForm = new FormGroup({
    relationType: new FormControl('Select', [
      Validators.required,
      Validators.minLength(4)
    ]),
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    vxnType: new FormControl('Select', Validators.required),
    dose: new FormControl('Select', Validators.required),
    locationType: new FormControl('Select', Validators.required),
    day: new FormControl('Select', Validators.required),
    slot: new FormControl('Select', Validators.required)
  });

  scheduleDate = new Date();

  datePickerOptions = {
    dateInputFormat: 'MM/DD/YYYY',
    minDate: new Date(),
    containerClass: 'theme-blue',
    isAnimated: true,
    adaptivePosition: true
  };

  constructor(private bsModalRef: BsModalRef) {}

  ngOnInit() {
    console.log(
      'modal mode ',
      this.mode,
      ', empRegisteredDay',
      this.empRegisteredDay
    );
    if (this.mode === 'add') {
    } else if (this.mode === 'edit') {
      if (this.member !== undefined) {
        this.dependentForm.controls.relationType.setValue(
          this.member.relationType
        );
        this.dependentForm.controls.name.setValue(this.member.name);
        this.dependentForm.controls.age.setValue(this.member.age);
        this.dependentForm.controls.vxnType.setValue(this.member.vxnType);
        this.dependentForm.controls.dose.setValue(this.member.dose);
        this.dependentForm.controls.day.setValue(this.member.day);
        this.dependentForm.controls.slot.setValue(this.member.slot);

        if (this.member.dose2Before) {
          this.scheduleDate = this.member.dose2Before;
          this.displayDose2BeforeDatePicker = true;
        }
      }
    }
  }

  onRelationTypeChange(event: Event) {
    // console.log(
    //   'this.relationType ',
    //   this.dependentForm.controls.relationType.value
    // );
    this.onDayChange(event);
  }

  onVaccinePreferenceChange(event: Event) {
    // console.log(
    //   'this.vxnType ',
    //   this.dependentForm.controls.vxnType.value
    // );
  }

  onLocationPreferenceChange(event: Event) {
    // console.log(
    //   'this.locationType ',
    //   this.dependentForm.controls.locationType.value
    // );
  }

  onDoseChange(event: Event) {
    console.log('this.dose ', this.dependentForm.controls.dose.value);
    if (this.dependentForm.controls.dose.value === DOSE_TYPES.DOSE_2) {
      this.displayDose2BeforeDatePicker = true;
    } else {
      this.displayDose2BeforeDatePicker = false;
    }
  }

  onDayChange(event: Event) {
    console.log('day value: ', this.dependentForm.controls.day.value);
    /*
    console.log('self day: ', this.dependentForm.controls.day.value);
    console.log(
      'dependent day: ',
      this.dependentForm.controls.day.value,
      ', self day: ',
      this.empRegisteredDay
    );
    if (
      !(
        this.dependentForm.controls.relationType.value === 'Self' ||
        this.dependentForm.controls.relationType.value === 'Select'
      ) &&
      this.dependentForm.controls.day.value === this.empRegisteredDay
    ) {
      // allow same slots for a dependent only day is the same
      this.enableSlots = true;
    } else {
      this.enableSlots = false;
    }
    */
  }

  onSlotChange(event: Event) {
    // console.log(
    //   'this.locationType ',
    //   this.dependentForm.controls.locationType.value
    // );
  }

  onDose2BeforeChange(event: Event) {
    console.log(
      'onDose2BeforeChange changed ',
      event,
      ', type ',
      typeof event,
      ', returnValue ',
      event.returnValue
    );
    console.log('event.target ', event.target);

    if (event) {
      //this.scheduleDate = new Date(event.returnValue);
    }
  }

  onDependentSubmit(event: Event) {
    // console.log(this.dependentForm, this.dependentForm.value);
    this.bsModalRef.hide();
    this.event.emit(this.extractMember(this.dependentForm.value));
  }

  private extractMember(dependentFormValue: any): Member {
    let member: Member = {
      relationType:
        dependentFormValue.relationType !== 'Select'
          ? dependentFormValue.relationType
          : '',
      name: dependentFormValue.name as string,
      age: dependentFormValue.age as number,
      vxnType:
        dependentFormValue.vxnType !== 'Select'
          ? dependentFormValue.vxnType
          : '',
      dose: dependentFormValue.dose !== 'Select' ? dependentFormValue.dose : '',
      dose2Before: this.scheduleDate,
      day: dependentFormValue.day !== 'Select' ? dependentFormValue.day : '',
      slot: dependentFormValue.slot !== 'Select' ? dependentFormValue.slot : ''
    };

    console.log(member);
    return member;
  }
}
