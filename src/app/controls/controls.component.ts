import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  //EventEmitter generates new events objects
  
  /*@Output() marks a property in a child component as 
    a doorway through which data can travel from the child to the parent.
  */
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>();

  /*Two ways data bindin first solution
  newServerName = '';
  newServerContent = '';*/

  //Getting access to local property, this time, inside the typescript code
  @ViewChild('serverInputContent', {static: true}) serverInputContent: ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverInputContent.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      blueprintName: nameInput.value, 
      blueprintContent: this.serverInputContent.nativeElement.value
    });
  }

}
