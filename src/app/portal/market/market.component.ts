import { Component, OnInit } from '@angular/core';
import instantsearch from 'instantsearch.js';
import { searchBox, hits } from 'instantsearch.js/es/widgets';
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

  ngOnInit() {
    let searchClient = this.typesenseInstantsearchAdapterService.getSearchClient();
    const search = instantsearch({
      searchClient,
      indexName: 'books',
    });

    search.addWidgets([
      searchBox({
        container: '#search-container',
      }),
      hits({
        container: '#products-loader',
        templates: {
          item: `
            <div class="hit-name">
              {{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}
            </div>
          `,
        },
      }),
    ]);

    search.start();
  }
}
