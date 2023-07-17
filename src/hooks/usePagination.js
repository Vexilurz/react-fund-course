import { useMemo } from 'react';
import { getPagesArray } from '../utils/pages';

export default function usePagination(totalPages) {
  const pagesArray = useMemo(() => getPagesArray(totalPages), [totalPages]);
  return pagesArray;
}
