import { Component,ElementRef,OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('heading', { static: true }) body!: ElementRef<HTMLDivElement>;
  constructor(){}
  ngOnInit(): void {
    // this.initialAnimations();
  }
  title = 'llm-angular';
  initialAnimations(){
    gsap.from(this.body.nativeElement, {
      duration:0.5,
      opacity:0,
      y:-10,
      stagger:0.2,
      delay:0.4
    })
  } 
}
