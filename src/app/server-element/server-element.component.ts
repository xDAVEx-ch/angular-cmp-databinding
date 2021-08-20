import { Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  SimpleChanges, 
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ContentChild,
  ElementRef} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  /* Change the encapsulation (how styles are applied in this component) 
    behavior. Emulated is by default
  */
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy{

  /*Properties are only accessible from inside the component.
  Adding @Input decorator, any other component implementing this
  component by its selector can binds to it.
  */

  @Input() element: {type: string, name: string, content: string}
  //@Input('alias to external reference')
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef

  constructor() {
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    //Calling here the local reference doesn't show anything because elements aren't rendered yet
    console.log(this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log('ngDoCheck');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit');
    /*Calling here the local reference show text content correctly 
      because now is after content init method
    */
    console.log(this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
  }

}
