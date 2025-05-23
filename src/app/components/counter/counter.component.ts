import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [],
  imports: [CommonModule],
})
export class CounterComponent implements OnInit {
  count = 0; // useState équivalent
  fetchedData: string | null = null;

  ngOnInit() {
    // useEffect équivalent (au montage uniquement)
    console.log('Component mounted');
    setTimeout(() => {
      this.fetchedData = 'Voici des données récupérées après 2 secondes ⏳';
    }, 2000);
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
