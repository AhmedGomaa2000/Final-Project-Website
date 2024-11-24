import { Component, Input } from '@angular/core';
import { ITopDestCard } from '../i-top-dest-card';

@Component({
  selector: 'app-top-dest-card',
  standalone: true,
  imports: [],
  templateUrl: './top-dest-card.component.html',
  styleUrl: './top-dest-card.component.css'
})
export class TopDestCardComponent {
  @Input() topDestCard!: ITopDestCard;
}
