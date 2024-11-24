import { Component} from '@angular/core';
import { RouterLink } from '@angular/router';

import { ITopDestCard } from '../TopDestSection/i-top-dest-card';  
import { TopDestCardComponent } from '../TopDestSection/top-dest-card/top-dest-card.component';

import { IPopTourCard } from '../PopularTourSection/i-pop-tour-card';
import { PopularTourCardComponent } from '../PopularTourSection/popular-tour-card/popular-tour-card.component';

import { ITrendDestCard } from '../TrendingDestinationSection/i-trend-dest-card';
import { TrendDestCardComponent } from '../TrendingDestinationSection/trend-dest-card/trend-dest-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, TopDestCardComponent, PopularTourCardComponent, TrendDestCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  topDestCard: ITopDestCard[] = [
    { // Card 1
      title: "Batu, East Java",
      description: "86 Destination", 
      imageSrc: "assets/images/top-destination-img-1.png"
    },
    { // Card 2
      title: "Kuta",
      description: "86 Destination", 
      imageSrc: "assets/images/top-destination-img-2.png"
    },
    { // Card 3
      title: "Surabaya, East Java",
      description: "86 Destination", 
      imageSrc: "assets/images/top-destination-img-3.png"
    },
    { // Card 4
      title: "Malang, East Java",
      description: "86 Destination", 
      imageSrc: "assets/images/top-destination-img-4.png"
    },
    { // Card 5
      title: "Doemg, Central Java",
      description: "86 Destination", 
      imageSrc: "assets/images/top-destination-img-4.png"
    },
    { // Card 6
      title: "Nusa Dua, Lombok",
      description: "86 Destination", 
      imageSrc: "assets/images/top-destination-img-3.png"
    },
    { // Card 7
      title: "Bandung, West Java",
      description: "86 Destination", 
      imageSrc: "assets/images/top-destination-img-2.png"
    },
    {
      title: "Watatobi, Sumatera",
      description: "86 Destination", 
      imageSrc: "assets/images/top-destination-img-1.png"
    }
  ];

  popTourCard: IPopTourCard[] = [
    { // Card 1
      title: "California",
      description: "Lorem ipsum dolor sit amet consectetur.",
      imageSrc: "assets/images/destination-img-1.png",
      price: 150
    },
    { // Card 2
      title: "Cappadocia",
      description: "Lorem ipsum dolor sit amet consectetur.",
      imageSrc: "assets/images/destination-img-2.png",
      price: 200
    },
    { // Card 3
      title: "Bodrum",
      description: "Lorem ipsum dolor sit amet consectetur.",
      imageSrc: "assets/images/destination-img-3.png",
      price: 250
    },
    { // Card 4
      title: "Bali",
      description: "Lorem ipsum dolor sit amet consectetur.",
      imageSrc: "assets/images/destination-img-4.png",
      price: 300
    },
    { // Card 5
      title: "Jordan",
      description: "Lorem ipsum dolor sit amet consectetur.",
      imageSrc: "assets/images/destination-img-5.png",
      price: 350
    },
    { // Card 6
      title: "Istanbul",
      description: "Lorem ipsum dolor sit amet consectetur.",
      imageSrc: "assets/images/destination-img-6.png",
      price: 400
    },
  ];

  trendDestCard: ITrendDestCard[] = [
    { // Card 1
      title: "Manila",
      imageSrc: "assets/images/trending-img-1.png",
      price: 100
    },
    { // Card 2
      title: "Dubai",
      imageSrc: "assets/images/trending-img-2.png",
      price: 150
    },
    { // Card 3
      title: "France",
      imageSrc: "assets/images/trending-img-3.png",
      price: 200
    },
    { // Card 4
      title: "Himalaya",
      imageSrc: "assets/images/trending-img-4.png",
      price: 250
    },
    { // Card 5
      title: "Kashmir",
      imageSrc: "assets/images/trending-img-5.png",
      price: 300
    },
    { // Card 6
      title: "Bihu",
      imageSrc: "assets/images/trending-img-6.png",
      price: 350
    },
    { // Card 7
      title: "Jordan",
      imageSrc: "assets/images/trending-img-7.png",
      price: 400
    },
    { // Card 8
      title: "Waterfall",
      imageSrc: "assets/images/trending-img-8.png",
      price: 450
    },
    { // Card 9
      title: "Forest",
      imageSrc: "assets/images/trending-img-9.png",
      price: 500
    }
  ];
}
