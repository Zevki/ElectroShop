import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/mockData";

const AllProducts = () => {
  const { filter } = useParams<{ filter: string }>();
  const { t } = useTranslation();

  const filteredProducts = products.filter((product) => {
    switch (filter) {
      case "featured":
        return product.isFeatured;
      case "new":
        return product.isNew;
      case "bestSelling":
        return product.isBestSelling;
      default:
        return true;
    }
  });

  const getTitle = (filter: string) => {
    switch (filter) {
      case "featured":
        return t("featured");
      case "new":
        return t("newArrivals");
      case "bestSelling":
        return t("bestSelling");
      default:
        return t("allProducts");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Back button */}
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ChevronLeft className="w-4 h-4 mr-2" />
            {t("backToHome")}
          </Button>
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {getTitle(filter || "")}
          </h1>
          <p className="text-muted-foreground">
            {filteredProducts.length} {t("productsFound")}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              {t("noProductsFound")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;