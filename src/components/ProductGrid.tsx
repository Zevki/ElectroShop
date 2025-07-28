import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import { products } from "@/data/mockData";

interface ProductGridProps {
  title: string;
  filter: "featured" | "new" | "bestSelling";
  limit?: number;
}

const ProductGrid = ({ title, filter, limit = 6 }: ProductGridProps) => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);

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

  const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, limit);
  const hasMoreProducts = filteredProducts.length > limit;

  return (
    <section id="products" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t(title)}
          </h2>
          {hasMoreProducts && (
            <Button 
              variant="outline" 
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? t("viewLess") : t("viewAll")}
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;