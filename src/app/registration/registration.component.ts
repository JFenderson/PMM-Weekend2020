import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent implements OnInit {
  subscriptionForm: FormGroup;
  user: any;

  constructor(private fb: FormBuilder) {
    this.subscriptionForm = fb.group({
      UserName: ["", Validators.required],
      Password: ["", Validators.required],
      Email: ["", Validators.required],
      FirstName: ["", Validators.required],
      LastName: ["", Validators.required]
    });
  }

  ngOnInit() {}

  OnSubmit(values) {
    this.user = this.subscriptionForm.value;
    console.log(this.user);
  }
}
