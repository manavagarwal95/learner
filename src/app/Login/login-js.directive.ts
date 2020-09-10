import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector : '[appLoginJs]'
})

export class LoginJSDirective implements OnInit {
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
  const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const container = document.getElementById('container');

  signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
  });

  signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
  });
  }

}
