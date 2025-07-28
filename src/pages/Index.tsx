import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import ProductGrid from "@/components/ProductGrid";
import SearchResults from "@/components/SearchResults";
import Footer from "@/components/Footer";
import { useSearch } from "@/contexts/SearchProvider";

const Index = () => {
  const { isSearching } = useSearch();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {isSearching ? (
        <SearchResults />
      ) : (
        <>
          <Hero />
          <Categories />
          <ProductGrid title="featured" filter="featured" limit={6} />
          <ProductGrid title="bestSelling" filter="bestSelling" limit={6} />
          <ProductGrid title="newArrivals" filter="new" limit={6} />
        </>
      )}
      <Footer />
    </div>
  );
};

export default Index;
