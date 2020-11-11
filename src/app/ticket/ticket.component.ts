import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit{
    contactForm: FormGroup;
    disabledSubmitButton: boolean = true;
    optionsSelect: Array<any>;
    isLoading:boolean = false;
    
      @HostListener('input') oninput() {
    
      if (this.contactForm.valid) {
        this.disabledSubmitButton = false;
        }
      }
    
      constructor(private fb: FormBuilder, private router: Router) { // private connectionService: ConnectionService) {
    
      this.contactForm = fb.group({
        'contactFormName': ['', Validators.required],
        'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
        'contactFormSubjects': ['', Validators.required],
        'contactFormMessage': ['', Validators.required],
        'contactFormCopy': [''],
        });
      }
      ngOnInit() {
          this.isLoading = false;
      }
    
      onSubmit() {
        // this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
        //   alert('Your message has been sent.');
        //   this.contactForm.reset();
        //   this.disabledSubmitButton = true;
        // }, error => {
        //   console.log('Error', error);
        // });
      }
      goToLogin() {
          this.router.navigate(['/Register'])
      }
}
