import { Component, OnInit } from '@angular/core';
import { gsap, Power4, Power1, Elastic, Back } from 'gsap'
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  slideTheme: boolean = false
  language: boolean = false
  classTheme: string = this.slideTheme ? "'hotTheme'": ""

  constructor() { }

  ngOnInit(): void {
  gsap.registerPlugin(ScrollTrigger)


  gsap.from('#b', {
      scrollTrigger: {
        trigger: '#b',
        start: 'top 20%',
        end: "top 30%",
        scrub: true,
        toggleActions: 'restart pause reverse none'
      },

      backgroundColor: 'rgba(37, 107, 187, 0.822)',
      ease: Power1.easeOut
  })

  
// gsap.from('.matlist2', {
//   scrollTrigger: {
//     trigger: '.c',
//     start: "top top",
//     end: "+=100%",
//     scrub: true,
//     pin: true,
//   },
//   scaleX: 0, 
//   transformOrigin: "left center", 
//   ease: "none"
// })



gsap.from('.matlist1', {
  scrollTrigger: {
    trigger: '#b',
    start: 'top top',
    end: '+=100%',
    pin: true,
    
    scrub: true,
  },
  duration: 2,
  delay: 1,
  opacity: 0,
  scale: 0,
  x: '-100%',
  ease: Power4.easeOut
})

gsap.from('.matlist2', {
  scrollTrigger: {
    trigger: '#c',
    start: 'top top',
    end: '+=100%',
    pin: true,
    scrub: true,
  },
  duration: 2,
  delay: 1,
  rotation: 720,
  opacity: 0,
  scale: 0,
  // x: '-100%',
  ease: Power1.easeOut
})

gsap.from('.matlist3', {
  scrollTrigger: {
    trigger: '#d',
    start: 'top top',
    end: '+=100%',
    pin: true,
    scrub: true,
  },

  duration: 2,
  delay: 1,
  opacity: 0,
  scale: 0,
  xPercent: '100',
  ease: Power4.easeOut
})

gsap.from('.matlist4', {
  scrollTrigger: {
    trigger: '#e',
    start: 'top top',
    end: '+=100%',
    pin: true,
    scrub: true,
  },
  duration: 2,
  delay: 1,
  opacity: 0,
  scale: 0,
  rotateZ: 720,
  xPercent: '-100',
  ease: Power4.easeOut
})

gsap.from('.matlist5', {
  scrollTrigger: {
    trigger: '#f',
    start: 'top top',
    end: '+=100%',
    pin: true,
    scrub: 2,
  },
  duration: 2,
  delay: 1,
  opacity: 0,
  scale: 0,
  ease: Elastic.easeOut.config(2, 1)
})

gsap.from('.matlist6', {
  scrollTrigger: {
    trigger: '#g',
    start: 'top top',
    end: '+=100%',
    pin: true,
    scrub: true,
  },
  duration: 2,
  delay: 1,
  opacity: 0,
  scale: 0,
  y: '200%',
  ease: Back.easeOut.config(1)
})

gsap.from('#d', {
  scrollTrigger: {
    trigger: '#d',
    start: 'top top',
    end: '+=100%',
    scrub: true,
  },
  duration: 2,
  delay: 1,
  // opacity: 0,
  // scale: 0,
  xPercent: -100,
  ease: Power4.easeOut
})

gsap.from('#e', {
  scrollTrigger: {
    trigger: '#e',
    start: 'top top',
    end: '+=100%',
    scrub: true,
  },
  duration: 2,
  delay: 1,
  // opacity: 0,
  // scale: 0,
  xPercent: 100,
  ease: Power4.easeOut
})






  // gsap.to('.c', 
  //   { 
  //     scrollTrigger: {
  //       trigger: '.c',
  //       start: 'top center',
  //       end: 'top 100px',
  //       scrub: 2,
  //       pin: true,
  //       pinSpacing: false,
  //       toggleActions: 'restart pause reverse none' //primeiros dois de cima pra baixa e os outros o inverso
  //     },
  //     x: 400, 
  //     rotation: 360, 
  //     duration: 3, 
  //     ease: 'power2.in' })
  }

}
