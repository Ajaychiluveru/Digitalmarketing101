export type PageType = 'home' | 'skills';

export interface NavigationProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
}
