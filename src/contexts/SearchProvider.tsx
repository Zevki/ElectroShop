import React, { createContext, useContext, useState, useMemo } from 'react';
import { Product } from '@/types/product';
import { products } from '@/data/mockData';

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredProducts: Product[];
  isSearching: boolean;
  searchSuggestions: string[];
  showSuggestions: boolean;
  setShowSuggestions: (show: boolean) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) {
      return products;
    }

    const query = searchQuery.toLowerCase().trim();
    return products.filter((product) => {
      return (
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    });
  }, [searchQuery]);

  // Generate search suggestions based on product data
  const searchSuggestions = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    const suggestions = new Set<string>();
    
    // Add matching product names
    products.forEach(product => {
      if (product.name.toLowerCase().includes(query)) {
        suggestions.add(product.name);
      }
      // Add matching categories
      if (product.category.toLowerCase().includes(query)) {
        suggestions.add(product.category.charAt(0).toUpperCase() + product.category.slice(1));
      }
      // Add matching tags
      product.tags?.forEach(tag => {
        if (tag.toLowerCase().includes(query)) {
          suggestions.add(tag);
        }
      });
    });
    
    return Array.from(suggestions).slice(0, 5);
  }, [searchQuery]);

  const isSearching = searchQuery.trim().length > 0;

  const value: SearchContextType = {
    searchQuery,
    setSearchQuery,
    filteredProducts,
    isSearching,
    searchSuggestions,
    showSuggestions,
    setShowSuggestions,
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};