import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import instantsearch from 'instantsearch.js';
import { searchBox, hits } from 'instantsearch.js/es/widgets';
import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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

  ngOnInit() {
    let searchClient = this.typesenseInstantsearchAdapter.searchClient;
    const search = instantsearch({
      searchClient,
      indexName: 'books',
    });

    search.addWidgets([
      searchBox({
        container: '#searchbox',
      }),
      hits({
        container: '#hits',
      }),
    ]);

    search.start();
  }
}
