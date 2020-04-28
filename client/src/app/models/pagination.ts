import { Product } from './product';

export interface Pagination {
    pageIndex: number;
    pageSize: number;
    count: number;
    data: Product[];
  }