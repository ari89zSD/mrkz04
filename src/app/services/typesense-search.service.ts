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

  search(keyword: string): Promise<any[]> {
    let searchParameters = {
      q: keyword,
      query_by: 'product_name',
      sort_by: 'product_id:desc',
    };
    console.log('Searching for: ' + keyword);

    let results: any[] = [];

    this.client
      .collections('products')
      .documents()
      .search(searchParameters)
      .then(function (searchResults) {
        console.log('Found search results within service: ' + searchResults);
        results.push(searchResults.hits);
      });
    return Promises.push(results);
  }
}
