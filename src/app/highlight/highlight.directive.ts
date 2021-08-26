/*import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})

export class highlightDirective implements OnInit{
    constructor(private elementRef: ElementRef){}

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }

    This directive access directly to the DOM using style property. Angular can be executed 
    in service workers where there's no DOM causing errors
}*/

import { Input } from "@angular/core";
import { 
    Directive, 
    ElementRef, 
    HostBinding, 
    HostListener, 
    OnInit, 
    Renderer2 
} from "@angular/core";

@Directive({
    selector: '[appBetterHighlight]'
})

export class betterHighlight implements OnInit{

    @Input('appBetterHighlight') defaultColor: string = 'transparent';
    @Input() highlightColor: string = 'blue';

    //Binding to style property of the element we are sitting
    @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

    constructor(private elementRef: ElementRef, private renderer: Renderer2){}

    ngOnInit(){
        this.backgroundColor = this.defaultColor;
        //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    }

    @HostListener('mouseenter') mouseover(eventData: Event){
        //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') mouseleave(eventData: Event){
        //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = this.defaultColor;
    }
}