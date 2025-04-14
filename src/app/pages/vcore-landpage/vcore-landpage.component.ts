import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  validated_phonenumber: string = ''
  phoneexists: boolean = false
  consentNeeded: boolean = true

  pre_url = 'http://127.0.0.1:5001/vcore-dev/us-central1'
  // pre_url = "https://us-central1-vcore-dev.cloudfunctions.net"



  ngOnInit(): void {

    window.addEventListener('message', this.handleOAuthMessage.bind(this), false);
  }

  async handleOAuthMessage(event: MessageEvent) {


    // Seguridad: podrías validar event.origin si es necesario
    if (event.data && typeof event.data === 'object') {
      let data = event.data

      if (data['type'] == 'consent') {

        this.consentNeeded = false

      }
      else if (data['type'] == 'createAccount') {
        data['main_phonenumber'] = this.validated_phonenumber

        let url = this.pre_url + '/vcore_auth_services/createVCoreAccount';

        let requestOptions = {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        };


        const response = await fetch(url, requestOptions);
        let response_ = (await response.json())['res']
        if (response_ == 'VCoreAccountCreated') {

          console.log("_________ created - create response ")


          url = this.pre_url + '/veep_messenger_services/sendmessage'
          requestOptions =
          {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(
              {
                "keyword": "ask_consent",
                "data": { 'main_phonenumber': data['main_phonenumber'] }
              }
            )
          };

          console.log("requestOptions >>>>", requestOptions)

          const response2 = await fetch(url, requestOptions);


        }

      }

    }
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.NotValidCode = false;
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
      // const url = `https://us-central1-vcore-dev.cloudfunctions.net/veep_accounts_services/validateverificationcode`;
      const url = this.pre_url + '/veep_accounts_services/validateverificationcode';

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
        this.openOAuthWindow()
        this.closeModal()
        this.validated_phonenumber = this.selectedCountryCode + this.customer_phoneNumber


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



    // const url = 'https://us-central1-vcore-dev.cloudfunctions.net/vcore_auth_services/generateOauthLink'
    const url = this.pre_url + '/vcore_auth_services/generateOauthLink'

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

      const oauthWindow = window.open(res_json.url, '_blank', 'width=700,height=500,resizable=no,scrollbars=no,toolbar=no,menubar=no,status=no,location=no');



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
    // const url = `https://us-central1-vcore-dev.cloudfunctions.net/veep_accounts_services/getverificationcode`;
    const url = this.pre_url + '/veep_accounts_services/getverificationcode';

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

      const res_json = await response.json();


      if (response.status == 200) {
        if (res_json['res'] == 'phoneexists') {

          this.phoneexists = true

        }
        // else if (res_json['res'] == 'CodeAlreadySent') {
        //   // alert('Code already sent');
        // }
      }
      else {
        console.error("Error V1304251905:", res_json);
      }


    } catch (error) {
      console.error("Error:", error);
      alert('Failed to send verification code. Please try again.');
    }

  }

  async send_veep_consent() {

    if (!this.customer_phoneNumber) {
      alert('Please enter your phone number.');
      return;
    }

    if (!/^\d{9}$/.test(this.customer_phoneNumber.trim())) {
      alert('Please enter a valid 9-digit phone number without spaces or special characters.');
      return;
    }

    const fullPhone = this.selectedCountryCode + this.customer_phoneNumber;
    // const url = `https://us-central1-vcore-dev.cloudfunctions.net/veep_accounts_services/giveConsent`;
    const url = this.pre_url + '/veep_accounts_services/giveConsent';


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

      // const res_json = await response.json();

      return response
    }

    catch (error) {
      console.error("Error:", error);
      // alert('Failed to send verification code. Please try again.');
      return
    }

  }







}
