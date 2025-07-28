import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Star, ShoppingCart, Truck, Shield, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { products } from "@/data/mockData";
import { useCart } from "@/contexts/CartProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { addItem } = useCart();

  const product = products.find(p => p.id === id);

  const formatPrice = (price: number) => {
    if (i18n.language === "vi") {
      return `${(price * 24000).toLocaleString("vi-VN")}₫`;
    }
    return `$${price.toLocaleString()}`;
  };

  const handleAddToCart = () => {
    if (product) {
      addItem(product);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Button 
          onClick={() => navigate("/")} 
          variant="ghost" 
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {t("backToProducts")}
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 lg:h-[500px] object-cover rounded-lg"
            />
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.isNew && (
                <Badge className="bg-accent text-accent-foreground">
                  {t("newArrivals")}
                </Badge>
              )}
              {product.originalPrice && (
                <Badge variant="destructive">
                  {t("sale")}
                </Badge>
              )}
              {product.isBestSelling && (
                <Badge className="bg-warning text-warning-foreground">
                  🔥 {t("bestSelling")}
                </Badge>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {product.name}
              </h1>
              <p className="text-muted-foreground text-lg">
                {product.description}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "text-rating fill-rating"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-muted-foreground">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-price">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              {product.originalPrice && (
                <Badge variant="destructive" className="text-sm">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </Badge>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Stock:</span>
              <span className={`text-sm font-medium ${
                product.stock > 10 ? "text-green-600" : 
                product.stock > 0 ? "text-yellow-600" : "text-red-600"
              }`}>
                {product.stock > 10 ? "In Stock" : 
                 product.stock > 0 ? `Only ${product.stock} left` : "Out of Stock"}
              </span>
            </div>

            {/* Add to Cart */}
            <Button 
              size="lg" 
              className="w-full h-12"
              disabled={product.stock === 0}
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              {product.stock === 0 ? "Out of Stock" : t("addToCart")}
            </Button>

            {/* Features */}
            <div className="grid grid-cols-1 gap-3 pt-4">
              <div className="flex items-center gap-3 text-sm">
                <Truck className="h-5 w-5 text-primary" />
                <span>Free shipping on orders over $100</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Shield className="h-5 w-5 text-primary" />
                <span>2-year warranty included</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <RotateCcw className="h-5 w-5 text-primary" />
                <span>30-day return policy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Information Tabs */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Product Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-muted-foreground mb-2">Category</h4>
                  <p className="capitalize">{product.category}</p>
                </div>
                <div>
                  <h4 className="font-medium text-muted-foreground mb-2">Model</h4>
                  <p>{product.name}</p>
                </div>
                <div>
                  <h4 className="font-medium text-muted-foreground mb-2">Availability</h4>
                  <p>{product.stock > 0 ? "In Stock" : "Out of Stock"}</p>
                </div>
                <div>
                  <h4 className="font-medium text-muted-foreground mb-2">SKU</h4>
                  <p>{product.id.toUpperCase()}</p>
                </div>
              </div>
              {product.tags && product.tags.length > 0 && (
                <>
                  <Separator className="my-4" />
                  <div>
                    <h4 className="font-medium text-muted-foreground mb-2">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description} This premium device offers exceptional performance 
                and cutting-edge technology. Perfect for both professional and personal use, 
                it delivers outstanding value with its innovative features and reliable build quality.
                Experience the latest in technological advancement with this carefully crafted product.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;