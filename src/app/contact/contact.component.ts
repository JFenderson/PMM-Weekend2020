import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  user: any;

  constructor(private fb: FormBuilder) {
    this.contactForm = fb.group({
      contactFirstName: ['', Validators.required],
      contactLastName: ['', Validators.required],
      contactEmail: ['', Validators.required],
      contactPhone: ['', Validators.required],
      contactTextBox: ['', Validators.required]
    });
  }

  ngOnInit() {}

  OnSubmit(values) {
    this.user = this.contactForm.value;
    console.log(this.user);
  }
}
