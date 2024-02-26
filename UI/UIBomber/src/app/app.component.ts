import { Component } from '@angular/core';
import { MailService } from './mail.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UIBomber';

  to: string;
  subject: string;
  count: number;
  // responseMessage: string;

  constructor(private mailService: MailService,private tostr :ToastrService) {
    this.to = '';
    this.subject = '';
    this.count = 1;
    // this.responseMessage = '';
  }

  sendEmails() {


    const requestData = {
      to: this.to,
      subject: this.subject,
      count: this.count
    };

      // Display a toast notification
      this.tostr.success('wait.....');
      // Reset the input fields after successful API call
      this.to = '';
      this.subject = '';
      this.count = 1;
    
    this.mailService.sendMultipleEmails(requestData).subscribe(
      response => {
         // Display a toast notification
        this.tostr.success('sent.....');
        
      },
      error => {
        console.error('Error:', error);
        // this.responseMessage = 'Temporary Not Working'
        this.tostr.success('Temporary Not Working!');
       }
     );
  }
}
