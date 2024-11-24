import { Component, Input } from '@angular/core';
import { IPopTourCard } from '../i-pop-tour-card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-popular-tour-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './popular-tour-card.component.html',
  styleUrl: './popular-tour-card.component.css'
})
export class PopularTourCardComponent {
  @Input() popTourCard!: IPopTourCard;
}
