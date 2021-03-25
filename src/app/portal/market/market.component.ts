import { Component, OnInit } from '@angular/core';

declare const Typesense: any;

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss'],
})
export class MarketComponent implements OnInit {
  constructor() {}

  client = new Typesense.Client({
    nodes: [
      {
        host: 'localhost',
        port: '8108',
        protocol: 'http',
      },
    ],
    apiKey: 'Rhsdhas2asasdasj2',
    connectionTimeoutSeconds: 2,
  });

  ngOnInit(): void {
    // let booksSchema = {
    //   'name': 'books',
    //   'fields': [
    //     {'name': 'title', 'type': 'string' },
    //     {'name': 'authors', 'type': 'string[]' },
    //     {'name': 'image_url', 'type': 'string' },
    //     {'name': 'publication_year', 'type': 'int32' },
    //     {'name': 'ratings_count', 'type': 'int32' },
    //     {'name': 'average_rating', 'type': 'float' },
    //     {'name': 'authors_facet', 'type': 'string[]', 'facet': true },
    //     {'name': 'publication_year_facet', 'type': 'string', 'facet': true },
    //   ],
    //   'default_sorting_field': 'ratings_count'
    // };
    // this.client.collections().create(booksSchema)
    //   .then(function (data) {
    //     console.log(data)
    // })
  }

  loadSearchData() {
    let bookDocument = JSON.parse(
      '{"publication_year_facet": "1997", "title": "Harry Potter and the Philosophers Stone", "authors": ["J.K. Rowling", " Mary GrandPr\u00e9"], "publication_year": 1997, "id": "2", "average_rating": 4.44, "image_url": "https://images.gr-assets.com/books/1474154022m/3.jpg", "ratings_count": 4602479, "authors_facet": ["J.K. Rowling", " Mary GrandPr\u00e9"]}'
    );
    this.client.collections('books').documents().create(bookDocument);
  }

  displaySearchData() {
    let searchParameters = {
      q: 'harry',
      query_by: 'title',
      sort_by: 'ratings_count:desc',
    };

    this.client
      .collections('books')
      .documents()
      .search(searchParameters)
      .then(function (searchResults) {
        console.log(searchResults);
      });
  }
}
