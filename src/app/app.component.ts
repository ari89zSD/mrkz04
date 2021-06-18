import { Component } from '@angular/core';

declare var Typesense: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private client;

  constructor() {
    this.client = new Typesense.Client({
      nodes: [
        {
          host: 'localhost', // For Typesense Cloud use xxx.a1.typesense.net
          port: '8108', // For Typesense Cloud use 443
          protocol: 'http', // For Typesense Cloud use https
        },
      ],
      apiKey: 'Rhsdhas2asasdasj2',
      connectionTimeoutSeconds: 2,
    });
  }

  //https://medium.com/@nacimidjakirene/angular-search-autosuggest-with-observables-6f42987f80e6
  //Search as you type using rxjs in link above

  ngOnInit() {
    let searchParameters = {
      q: 'Vizio',
      query_by: 'brand',
      sort_by: 'product_id:desc',
    };

    this.client
      .collections('products')
      .documents()
      .search(searchParameters)
      .then(function (searchResults) {
        console.log(searchResults);
      });
  }
}
