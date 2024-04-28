import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'tailwindapp';
  isCollapsed = false;
  bgImages = ["../assets/backgroun-images/background_1.jpg", "../assets/backgroun-images/background_2.jpg", "../assets/backgroun-images/background_3.jpg", "../assets/backgroun-images/background_4.jpg"];
  current = 0;
  image:any;
  id:any;
  subscription!: Subscription;
  constructor()
  {
   this.image = "url(" + this.bgImages[0] + ")";
   this.id = setInterval(() => this.NextImage(), 4000);
  }
  ngOnInit() {
    //const source = interval(1000);
   // this.subscription = source.subscribe({next: () => console.log("test")},);
  }
  ngOnDestroy() {
    // if (this.id) {
    //   clearInterval(this.id);
    // }
    //this.subscription && this.subscription.unsubscribe();
  }
  OnClick()
  {
    if(this.isCollapsed)
        this.isCollapsed = false;
    else
      this.isCollapsed = true;
  }
  NextImage()
  {
    if(this.current < this.bgImages.length-1)
      this.current += 1;
    else
      this.current = 0;
    this.image = "url(" + this.bgImages[this.current] + ")";
  }
  PreviousImage()
  {
    if(this.current > 0)
      this.current -= 1;
    else
      this.current = this.bgImages.length-1;
    this.image = "url(" + this.bgImages[this.current] + ")";
  }
  
}
