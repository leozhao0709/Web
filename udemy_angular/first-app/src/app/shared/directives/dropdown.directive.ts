import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  @Input() initialDropDown;
  @HostBinding('class.open') isOpen = false;

  constructor() {
  }

  ngOnInit() {
    this.isOpen = this.initialDropDown;
  }

  @HostListener('click') onClick() {
    this.isOpen = !this.isOpen;
  }
}
