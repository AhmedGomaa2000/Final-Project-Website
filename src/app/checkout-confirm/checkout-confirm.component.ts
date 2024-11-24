import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-checkout-confirm',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './checkout-confirm.component.html',
  styleUrl: './checkout-confirm.component.css'
})
export class CheckoutConfirmComponent {

  print() {
    window.print();
  }
}
