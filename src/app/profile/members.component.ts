import { Component, Input, OnInit } from '@angular/core';
import { Employee, Member, RELATION_TYPES } from './../employees';
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

  membersLength?: number;
  isCollapsed = false;
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {}

  ngOnInit() {
    if (this.employee !== undefined && this.employee.members !== undefined) {
      this.membersLength = this.employee.members.length;
    }
  }

  editDependent(event: Event, idx: number) {
    if (this.employee !== undefined && this.employee.members !== undefined) {
      let members = this.employee.members;
      let selfDetails = this.employee.members.find(
        member => member.relationType === RELATION_TYPES.SELF
      ) as Member;

      const initialState = {
        member: members[idx],
        mode: 'edit',
        empRegisteredDay: selfDetails?.day
      };
      this.bsModalRef = this.modalService.show(ModalComponent, {
        class: 'modal-lg',
        keyboard: true,
        initialState
      });

      // register for edit data
      this.bsModalRef.content.event.subscribe(newMember => {
        members[idx].name = newMember.name;
        members[idx].age = newMember.age;
        members[idx].vxnType = newMember.vxnType;
        members[idx].dose = newMember.dose;
        members[idx].day = newMember.day;
        members[idx].slot = newMember.slot;
      });
    }
  }

  addDependent() {
    let empDay;
    if (this.employee !== undefined && this.employee.members !== undefined) {
      let selfDetails = this.employee.members.find(
        member => member.relationType === RELATION_TYPES.SELF
      ) as Member;
      empDay = selfDetails?.day;
    }
    const initialState = {
      mode: 'add',
      empRegisteredDay: empDay
    };
    this.bsModalRef = this.modalService.show(ModalComponent, {
      class: 'modal-lg',
      keyboard: true,
      initialState
    });

    // register for new member data
    this.bsModalRef.content.event.subscribe(member => {
      if (this.employee !== undefined && this.employee.members !== undefined) {
        this.employee.members.unshift(member);
      }
    });
  }

  deleteDependent(event: Event, idx: number) {
    console.log('deleteDependent ', event, idx);
    event.stopPropagation();
    if (this.employee !== undefined && this.employee.members !== undefined) {
      this.employee.members.splice(idx, 1);
    }
  }

  isNewlyAdded(event: Event, idx: number): string {
    // if (idx === 0 && this.newlyAdded) {
    //   return 'lightgreen';
    // } else {
    //   return '';
    // }
    return '';
    // this.confirmNew =  ;
    // setTimeout(() => {
    //   console.log("inside timeout ", this.newlyAdded);
    //   this.newlyAdded = false;
    //   this.confirmNew =  '';
    //   console.log("inside timeout ", this.newlyAdded);
    // }, 500);
  }
}
