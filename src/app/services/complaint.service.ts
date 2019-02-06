import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(public firebase: AngularFireDatabase) {
    this.complaintList = this.firebase.list('complaint');
   }
  
  complaintList: AngularFireList<any>;
  
  form = new FormGroup({
    $key: new FormControl(null),
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zip_code: new FormControl('', [Validators.required,Validators.minLength(6),Validators.maxLength(6)]),
    report: new FormControl('', [Validators.required]),
    resolved: new FormControl('', [Validators.required])
  });

  getComplaint() 
  {
    this.complaintList = this.firebase.list('test-firebase-4a0a2');
    return this.complaintList.snapshotChanges();
  }

  insertComplaint(complaint) 
  {
    this.complaintList.push({
      first_name: complaint.first_name,
      last_name: complaint.last_name,
      email: complaint.email,
      phone: complaint.phone,
      address: complaint.address,
      city: complaint.city,
      state: complaint.state,
      zip_code: complaint.zip_code,
      report: complaint.report,
      resolved: complaint.resolved
    });
  }

  populateForm(complaint) 
  {
    this.form.setValue(complaint);
  }

  updateComplaint(complaint) 
  {
    this.complaintList.update(complaint.$key,
      {
        first_name: complaint.first_name,
        last_name: complaint.last_name,
        email: complaint.email,
        phone: complaint.phone,
        address: complaint.address,
        city: complaint.city,
        state: complaint.state,
        zip_code: complaint.zip_code,
        report: complaint.report,
        resolved: complaint.resolved
      });
  }

  deleteComplaint($key: string) 
  {
    this.complaintList.remove($key);
  }
}
