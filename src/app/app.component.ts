import { Component } from '@angular/core';
import { ComplaintService } from './services/complaint.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  submitted: boolean;
  showSuccessMessage: boolean;

  constructor(public complaint: ComplaintService) {
  }

  formControls = this.complaint.form.controls;

  onSubmit() 
  {
    this.submitted = true;
    console.log(this.complaint.form.valid);
    if (this.complaint.form.valid) 
    {
      if (this.complaint.form.get('$key').value == null)
      {
        this.complaint.insertComplaint(this.complaint.form.value);
      }
      else
      {
        this.complaint.updateComplaint(this.complaint.form.value);
      }
      
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
      this.complaint.form.reset();
      
      //this is to be done for proper reset operation
      this.complaint.form.setValue({
        $key: null,
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip_code: '',
        report: '',
        resolved: ''
      });
    }
  }
}
