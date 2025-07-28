import { useTranslation } from "react-i18next";
import { useSearch } from "@/contexts/SearchProvider";
import ProductCard from "./ProductCard";
import { Search } from "lucide-react";

const SearchResults = () => {
  const { t } = useTranslation();
  const { searchQuery, filteredProducts, isSearching } = useSearch();

  if (!isSearching) {
    return null;
  }

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Search Results for "{searchQuery}"
          </h2>
          <p className="text-muted-foreground">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Suggested Products</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <Search className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No products found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or browse our categories
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchResults;