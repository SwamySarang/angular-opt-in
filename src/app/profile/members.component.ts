import { Component, Input, OnInit } from '@angular/core';
import { Member } from './../employees';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../modal/modal.component';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  @Input() members?: Member[];

  // fontawesome icons
  faTrash = faTrashAlt;

  isCollapsed = false;
  bsModalRef?: BsModalRef;
  //newlyAdded = false;
  //confirmNew = '';

  constructor(private modalService: BsModalService) {}

  ngOnInit() {}

  editDependent(event: Event, idx: number) {
    if (this.members != null) {
      const initialState = {
        member: this.members[idx],
        mode: 'edit'
      };
      this.bsModalRef = this.modalService.show(ModalComponent, {
        class: 'modal-lg',
        keyboard: true,
        initialState
      });

      // register for edit data
      this.bsModalRef.content.event.subscribe(newMember => {
        // name, city, vaccine, dose, preference, group
        if (this.members != null) {
          this.members[idx].name = newMember.name;
          this.members[idx].location = newMember.location;
          this.members[idx].vxnType = newMember.vxnType;
          this.members[idx].dose = newMember.dose;
          this.members[idx].locationType = newMember.locationType;
          this.members[idx].group = newMember.group;
        }
      });
    }
  }

  addDependent() {
    const initialState = {
      mode: 'add'
    };
    this.bsModalRef = this.modalService.show(ModalComponent, {
      class: 'modal-lg',
      keyboard: true,
      initialState
    });

      // register for new member data
    this.bsModalRef.content.event.subscribe(member => {
      // this.members?.push(member);
      this.members?.unshift(member);
      //this.newlyAdded = true;
    });
  }

  deleteDependent(event: Event, idx: number) {
    console.log('deleteDependent ', event, idx);
    event.stopPropagation();
    this.members?.splice(idx, 1);
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
