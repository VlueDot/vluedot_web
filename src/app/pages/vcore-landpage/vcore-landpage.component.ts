import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-vcore-landpage',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './vcore-landpage.component.html',
  styleUrl: './vcore-landpage.component.scss'
})
export class VcoreLandpageComponent implements OnInit {
  selectedCountryCode: string = '+51'
  customer_phoneNumber: string = '983569250'
  code_to_verify: string = ''
  // CodeValidationIsVisible: boolean = false
  isModalOpen = false;
  NotValidCode: boolean = false;
  block_send_code = false
  modalmessage: string = "You must entry a valid code"


  private http = inject(HttpClient);
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  ngOnInit(): void {
    this.openOAuthWindow()
  }
  

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  async verify_code() {
    this.block_send_code = true

    try {
      if (!this.code_to_verify || !/^\d{6}$/.test(this.code_to_verify.trim())) {
        console.log("not validated")
        this.NotValidCode = true
        this.modalmessage = "You must entry a valid code"
        this.block_send_code = false

        return
      }

      this.NotValidCode = false
      const url = `https://us-central1-vcore-dev.cloudfunctions.net/veep_accounts_services/validateverificationcode`;


      const requestOptions = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phonenumber: this.selectedCountryCode + this.customer_phoneNumber,
          code: this.code_to_verify
        })
      };

      // console.log(requestOptions)

      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const res_json = await response.json();

      if (!res_json.success) {


        this.NotValidCode = true
        this.modalmessage = "You must entry a valid code"
        if (res_json.message == "Code expired") {

          this.modalmessage = "Code expired. Return to create a new one."

        }
      } else {
        this.closeModal()
        this.openOAuthWindow()
      }

      this.block_send_code = false

      return

    } catch (error) {

      console.error("Error 0404251405:", error);
      this.block_send_code = false
      return

    }


  }

  async openOAuthWindow() {
    
    const url = 'https://us-central1-vcore-dev.cloudfunctions.net/vcore_auth_services/generateOauthLink'
    const requestOptions = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({}) // Convertir datos a JSON
    };

    try {
      const response = await fetch(url, requestOptions);
      const res_json = await response.json();

      window.open(res_json.url, '_blank', 'width=500,height=600,width=500,height=600,resizable=no,scrollbars=no,toolbar=no,menubar=no,status=no,location=no');


     
      
    } catch (error) {
      console.error("Error:", error);
    }
   


  }

  async send_veep_demo_request() {

    if (!this.customer_phoneNumber) {
      alert('Please enter your phone number.');
      return;
    }

    if (!/^\d{9}$/.test(this.customer_phoneNumber.trim())) {
      alert('Please enter a valid 9-digit phone number without spaces or special characters.');
      return;
    }

    const fullPhone = this.selectedCountryCode + this.customer_phoneNumber;
    const url = `https://us-central1-vcore-dev.cloudfunctions.net/veep_accounts_services/getverificationcode`;

    const requestOptions = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ phonenumber: fullPhone }) // Convertir datos a JSON
    };

    try {

      this.openModal()
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const res_json = await response.json();

      // console.log("Response:", res_json);
      // // this.CodeValidationIsVisible = true

      // // alert('Verification code sent successfully!');
    } catch (error) {
      console.error("Error:", error);
      alert('Failed to send verification code. Please try again.');
    }

  }
}
