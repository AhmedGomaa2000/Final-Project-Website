import { Component, Input } from '@angular/core';
import { ITrendDestCard } from '../i-trend-dest-card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-trend-dest-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './trend-dest-card.component.html',
  styleUrl: './trend-dest-card.component.css'
})
export class TrendDestCardComponent {
  @Input() trendDestCard!: ITrendDestCard;
}
