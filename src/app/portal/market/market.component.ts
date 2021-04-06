import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import instantsearch from 'instantsearch.js';
import {
  searchBox,
  hits,
  pagination,
  configure,
} from 'instantsearch.js/es/widgets';
import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss'],
})
export class MarketComponent implements OnInit {
  constructor() {}

  typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
    server: {
      apiKey: environment.typesenseServer.apiKey, // Be sure to use the search-only-api-key
      nodes: [
        {
          host: environment.typesenseServer.node1.host,
          port: environment.typesenseServer.node1.port,
          protocol: environment.typesenseServer.node1.protocol,
        },
      ],
    },
    // The following parameters are directly passed to Typesense's search API endpoint.
    //  So you can pass any parameters supported by the search endpoint below.
    //  queryBy is required.
    additionalSearchParameters: {
      queryBy: 'title,authors',
    },
  });

  ngOnInit(): void {
    let searchClient = this.typesenseInstantsearchAdapter.searchClient;
    const search = instantsearch({
      searchClient,
      indexName: 'books',
    });

    search.addWidgets([
      searchBox({
        container: '#searchbox',
      }),
    ]);

    search.start();
  }
}
