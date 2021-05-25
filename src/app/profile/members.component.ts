import { Component, Input, OnInit } from '@angular/core';
import { Employee, Member } from './../employees';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../modal/modal.component';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  @Input() employee?: Employee;

  // fontawesome icons
  faTrash = faTrashAlt;

  isCollapsed = false;
  bsModalRef?: BsModalRef;
  //newlyAdded = false;
  //confirmNew = '';

  constructor(private modalService: BsModalService) {}

  ngOnInit() {}

  editDependent(event: Event, idx: number) {
    if (this.employee?.members != null) {
      let members = this.employee?.members;
      const initialState = {
        member: members[idx],
        mode: 'edit',
        empDay: this.employee?.day
      };
      this.bsModalRef = this.modalService.show(ModalComponent, {
        class: 'modal-lg',
        keyboard: true,
        initialState
      });

      // register for edit data
      this.bsModalRef.content.event.subscribe(newMember => {
        if (this.employee?.members != null) {
          members[idx].name = newMember.name;
          members[idx].age = newMember.age;
          members[idx].vxnType = newMember.vxnType;
          members[idx].dose = newMember.dose;
          members[idx].day = newMember.day;
          members[idx].slot = newMember.slot;
        }
      });
    }
  }

  addDependent() {
    const initialState = {
      mode: 'add',
      empDay: this.employee?.day
    };
    this.bsModalRef = this.modalService.show(ModalComponent, {
      class: 'modal-lg',
      keyboard: true,
      initialState
    });

      // register for new member data
    this.bsModalRef.content.event.subscribe(member => {
      // this.members?.push(member);
      this.employee?.members?.unshift(member);
      //this.newlyAdded = true;
    });
  }

  deleteDependent(event: Event, idx: number) {
    console.log('deleteDependent ', event, idx);
    event.stopPropagation();
    this.employee?.members?.splice(idx, 1);
  }

  isNewlyAdded(event: Event, idx: number): string {
      // if (idx === 0 && this.newlyAdded) {
      //   return 'lightgreen';
      // } else {
      //   return '';
      // }
      return ''
      // this.confirmNew =  ;
      // setTimeout(() => {
      //   console.log("inside timeout ", this.newlyAdded);
      //   this.newlyAdded = false;
      //   this.confirmNew =  '';
      //   console.log("inside timeout ", this.newlyAdded);
      // }, 500);
  }
}
