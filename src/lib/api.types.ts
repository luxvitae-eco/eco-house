// Simplified API types for the refactored application
export interface ApiResponse<T> {
  data?: T;
  hasMore?: boolean;
  totalRecords?: number;
  error?: string;
}

export interface GenericListResponse<T> {
  data?: T[];
  hasMore: boolean;
  totalRecords: number;
  error?: string;
}
