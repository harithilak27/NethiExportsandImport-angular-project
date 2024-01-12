import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  messageForm: FormGroup;


  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.messageForm = this.fb.group({
      to_name: 'Sir/Madam',
      from_name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_-]*$/)]],
      from_email: ['', [Validators.required, Validators.email]],
      from_phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      message: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_-]*$/)]]
    });
  }

  async send(){
    emailjs.init('fK_JBPGbGwDvjPDcV');
    let response = await emailjs.send("service_07qasx8","template_znux54b",{
    from_name: this.messageForm.value.from_name,
    to_name: this.messageForm.value.to_name,
    message: this.messageForm.value.message,
    from_email: this.messageForm.value.from_email,
    from_phone: this.messageForm.value.from_phone,
  });

  alert('Message has been sent')

  this.messageForm.reset();
  }


  onSubmit() {
    if (this.messageForm.valid) {
      const formData = this.messageForm.value;
      console.log(formData);
      
    }
  }
}


