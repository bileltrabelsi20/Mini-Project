import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userRegister!: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.userRegister = new FormGroup({
      nom : new FormControl (''),
      prenom : new FormControl (''),
      age : new FormControl (''),
      sexe : new FormControl (''),
      email : new FormControl (''),
      password : new FormControl ('')


    })
  }

}
