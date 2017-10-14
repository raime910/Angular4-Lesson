import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {RoleModel} from "../models/Role";
import {isUndefined} from "util";

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  // data source
  roles: RoleModel[] = [
    new RoleModel (1, 'Administrator'),
    new RoleModel (2, 'Moderator'),
    new RoleModel (3, 'User'),
    new RoleModel (4, 'Banned'),
  ];

  // fields
  selectedRole: RoleModel;
  personnelRoles: RoleModel[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  onAddRoleClick() {
    if (this.selectedRole === null || isUndefined(this.selectedRole)) return;

    if (this.personnelRoles.indexOf(this.selectedRole) === -1)
    {
      this.personnelRoles.push(this.selectedRole);
    }

    this.selectedRole = undefined;
  }

  onRemoveClick(personnelRole: RoleModel) {
    var itemIdx = this.personnelRoles.indexOf(personnelRole);

    if (itemIdx === -1) return;

    this.personnelRoles.splice(itemIdx, 1);
  }
}
