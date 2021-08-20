import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];

  onServerAdded(serverInfo: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'server',
      name: serverInfo.serverName,
      content: serverInfo.serverContent
    });
  }

  onBlueprintAdded(blueprintInfo: {blueprintName: string, blueprintContent: string}){
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintInfo.blueprintName,
      content: blueprintInfo.blueprintContent
    });
  }

  onDestroyElement(){
    this.serverElements.splice(0, 1);
  }
}
