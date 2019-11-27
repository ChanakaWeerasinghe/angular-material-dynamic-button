import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

    items = [
    { name: 'Button 1' },
    { name: 'Button 2' },
    { name: 'Button 3' }
  ];

  lastClickedIndex;
  changeActive(i) {
    console.log("clicked ",i)
    this.lastClickedIndex = i;
  }
}
