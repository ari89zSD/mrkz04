import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';

@Injectable({
  providedIn: 'root',
})
export class TypesenseInstantsearchAdapterService {
  private typesenseInstantsearchAdapter;

  constructor() {
    this.typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
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
  }

  getSearchClient() {
    return this.typesenseInstantsearchAdapter.searchClient;
  }
}
