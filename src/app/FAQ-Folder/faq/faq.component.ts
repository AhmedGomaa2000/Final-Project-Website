import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IQuestions } from '../i-questions';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
}
