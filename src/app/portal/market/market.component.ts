import { Component, OnInit } from '@angular/core';
import { TypesenseInstantsearchAdapterService } from 'src/app/services/typesense-instantsearch-adapter.service';
declare const Typesense: any;

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss'],
})
export class MarketComponent implements OnInit {
  private searchClient;
  constructor(
    private typesenseInstantsearchAdapterService: TypesenseInstantsearchAdapterService
  ) {
    this.searchClient = this.typesenseInstantsearchAdapterService.getSearchClient();
  }

  ngOnInit(): void {}

  loadSearchData() {
    let bookDocument = JSON.parse(
      '{"publication_year_facet": "1997", "title": "Harry Potter and the Philosophers Stone", "authors": ["J.K. Rowling", " Mary GrandPr\u00e9"], "publication_year": 1997, "id": "2", "average_rating": 4.44, "image_url": "https://images.gr-assets.com/books/1474154022m/3.jpg", "ratings_count": 4602479, "authors_facet": ["J.K. Rowling", " Mary GrandPr\u00e9"]}'
    );
    this.searchClient.collections('books').documents().create(bookDocument);
  }

  displaySearchData() {
    let searchParameters = {
      q: 'harry',
      query_by: 'title',
      sort_by: 'ratings_count:desc',
    };
  }
}
