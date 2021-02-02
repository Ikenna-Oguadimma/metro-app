import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  data={name: "", email: "", username: ""};
  datad={name: "", email: "", username: ""};

  postUsers(data){
    // const url = "http://68.47.103.78:8080/users"
    const url = "http://localhost:8080/users"
    const options = {
      method: 'Post',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    }

    fetch(url, options)
    .then(resp => resp.json())
    .then(resp => (console.log(resp)));
  }

  postDrivers(datad){
    // const url = "http://68.47.103.78:8080/users"
    const url = "http://localhost:8080/drivers"
    const options = {
      method: 'Post',
      body: JSON.stringify(datad),
      headers:{
        'Content-Type': 'application/json'
      }
    }

    fetch(url, options)
    .then(resp => resp.json())
    .then(resp => (console.log(resp)));
  }


  constructor() { }

  ngOnInit() {}

}
