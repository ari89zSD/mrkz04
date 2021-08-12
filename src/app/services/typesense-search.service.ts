import { Injectable } from '@angular/core';

declare var Typesense: any;

@Injectable({
  providedIn: 'root'
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

  search(keyword: string) {
    let searchParameters = {
      q: keyword,
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
