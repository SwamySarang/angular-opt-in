import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  @Input() members: Member[] = [];

  // fontawesome icons
  faTrash = faTrashAlt;

  isCollapsed = true;
  bsModalRef?: BsModalRef;

  memberSelect = new FormControl('');

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

    this.bsModalRef.content.event.subscribe(member => {
      this.members?.push(member);
    });
  }

  onSelectChange(event: Event) {
    console.log(event, this.memberSelect.value)
  }

  deleteDependent(event: Event, idx: number) {
    console.log('deleteDependent ', event, idx);
    event.stopPropagation();
    this.members?.splice(idx, 1);
  }
}
