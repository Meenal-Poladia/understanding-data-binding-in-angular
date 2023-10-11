import {
  AfterContentInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() {
    console.log('Constructor is called');
  }

  ngOnChanges(changes:SimpleChanges){
    console.log('In ngOnChanges');
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('In ngOnInIt');
  }

  ngDoCheck() {
    console.log('Do check');
  }

  ngAfterContentInit() {
    console.log('After content init')
  }
}
