import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerLists: Listf[] = [];

  constructor() {
    this.footerLists = [
      {
        category: '',
        listOfItems: ['','']
      }
    ];
  }
}

interface Listf {
  category: string;
  listOfItems: any[];
}
