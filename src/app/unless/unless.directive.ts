import { Input, TemplateRef, ViewContainerRef } from "@angular/core";
import { Directive } from "@angular/core";


@Directive({
    selector: '[appUnless]'
})

export class UnlessDirective{

    @Input() set appUnless(condition: boolean){
        console.log(condition);
        if(!condition){
            this.vcRef.createEmbeddedView(this.templateRef);
        } else {
            this.vcRef.clear();
        }
    }
    //Template is what: What needs to be render, container is where: where we will render
    constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef){}
}