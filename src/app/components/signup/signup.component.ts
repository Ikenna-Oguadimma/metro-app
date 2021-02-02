import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  data={name: "", email: "", username: ""};
  datad={name: "", email: "", username: ""};

  constructor() { }

  ngOnInit(): void {
  }
}
