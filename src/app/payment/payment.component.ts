import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentHandler:any = null;

  constructor() { }

  ngOnInit(): void {
    this.invokeStripe();
  }

  makePayment(currency: string, amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51JIZ6dSCggQJJnKeLxwz1oDEFxqVI51uyL53JndbW1xi2oxmFOSsWRnrS3wjVsukfogvmlz7j4j2tyM6QczNqPWb00ujmwxoNb',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken)
        window.location.href = "/complete"
      }
    });

    paymentHandler.open({
      name: 'BookMyMovie',
      description: 'Tickets for Movie 1',
      amount: amount*100,
      currency: 'inr',
    });
  }

  invokeStripe() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51JIZ6dSCggQJJnKeLxwz1oDEFxqVI51uyL53JndbW1xi2oxmFOSsWRnrS3wjVsukfogvmlz7j4j2tyM6QczNqPWb00ujmwxoNb',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken)
            alert('Payment has been successfull!');
          }
        });
      }
        
      window.document.body.appendChild(script);
    }
  }

}
