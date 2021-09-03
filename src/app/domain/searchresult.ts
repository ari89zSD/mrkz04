import { SearchDocument } from './searchdocument';

export class SearchResult {
  private facet_counts: number[];
  private found: number;
  private hits: SearchDocument[];
  private out_of: number;
  private page: number;
}
