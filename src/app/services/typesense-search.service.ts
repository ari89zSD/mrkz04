import { Injectable } from '@angular/core';

declare var Typesense: any;

@Injectable({
  providedIn: 'root',
})
export class TypesenseSearchService {
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

  search(keyword: string): any[] {
    let searchParameters = {
      q: keyword,
      query_by: 'product_name',
      sort_by: 'product_id:desc',
    };

    let results: any[];

    this.client
      .collections('products')
      .documents()
      .search(searchParameters)
      .then(function (searchResults) {
        //console.log(searchResults);
        results = searchResults.hits;
      });
    return results;
  }
}
