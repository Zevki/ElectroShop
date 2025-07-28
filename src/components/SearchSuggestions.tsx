import { useSearch } from "@/contexts/SearchProvider";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Clock } from "lucide-react";

interface SearchSuggestionsProps {
  onSuggestionClick: (suggestion: string) => void;
}

const SearchSuggestions = ({ onSuggestionClick }: SearchSuggestionsProps) => {
  const { searchQuery, searchSuggestions, showSuggestions } = useSearch();

  if (!showSuggestions || !searchQuery.trim()) {
    return null;
  }

  const recentSearches = [
    "iPhone 15 Pro Max",
    "MacBook Pro",
    "Samsung Galaxy",
    "Sony Headphones"
  ].filter(search => search.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <Card className="absolute top-full left-0 right-0 z-50 mt-1 max-h-96 overflow-y-auto">
      <CardContent className="p-0">
        {searchQuery.trim() && (
          <div className="p-3 border-b">
            <p className="text-sm text-muted-foreground mb-2">Did you mean to search for:</p>
            <Button
              variant="ghost"
              className="w-full justify-start p-2 h-auto"
              onClick={() => onSuggestionClick(searchQuery)}
            >
              <Search className="h-4 w-4 mr-2" />
              <span className="font-medium">{searchQuery}</span>
            </Button>
          </div>
        )}

        {searchSuggestions.length > 0 && (
          <div className="p-3 border-b">
            <p className="text-sm text-muted-foreground mb-2">Suggestions:</p>
            <div className="space-y-1">
              {searchSuggestions.map((suggestion, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start p-2 h-auto"
                  onClick={() => onSuggestionClick(suggestion)}
                >
                  <Search className="h-4 w-4 mr-2" />
                  {suggestion}
                </Button>
              ))}
            </div>
          </div>
        )}

        {recentSearches.length > 0 && (
          <div className="p-3">
            <p className="text-sm text-muted-foreground mb-2">Recent searches:</p>
            <div className="space-y-1">
              {recentSearches.slice(0, 3).map((search, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start p-2 h-auto"
                  onClick={() => onSuggestionClick(search)}
                >
                  <Clock className="h-4 w-4 mr-2" />
                  {search}
                </Button>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SearchSuggestions;