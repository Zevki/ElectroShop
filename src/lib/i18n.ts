import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      home: "Home",
      categories: "Categories",
      products: "Products",
      cart: "Cart",
      login: "Login",
      signup: "Sign Up",
      logout: "Logout",
      
      // Hero Section
      heroTitle: "Latest Electronic Devices",
      heroSubtitle: "Discover cutting-edge technology at unbeatable prices",
      shopNow: "Shop Now",
      
      // Categories
      smartphones: "Smartphones",
      laptops: "Laptops", 
      tablets: "Tablets",
      accessories: "Accessories",
      gaming: "Gaming",
      audio: "Audio",
      
      // Products
      bestSelling: "Best Selling",
      featured: "Featured Products",
      newArrivals: "New Arrivals",
      addToCart: "Add to Cart",
      price: "Price",
      sale: "Sale",
      
      // Common
      search: "Search products...",
      currency: "$",
      viewAll: "View All",
      loading: "Loading...",
      backToProducts: "Back to Products",
      
      // Footer
      aboutUs: "About Us",
      contactUs: "Contact Us",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      
      // Authentication
      signIn: "Sign In",
      signUp: "Sign Up",
      signOut: "Sign Out",
      email: "Email",
      password: "Password",
      displayName: "Display Name",
      emailPlaceholder: "Enter your email",
      passwordPlaceholder: "Enter your password",
      displayNamePlaceholder: "Enter your name",
      welcomeMessage: "Sign in to your account or create a new one",
      signingIn: "Signing in...",
      signingUp: "Signing up...",
      checkEmail: "Check your email",
      checkEmailDesc: "We sent you a sign up link. Check your email to complete registration.",
      welcome: "Welcome!",
      signInSuccess: "You have successfully signed in.",
      error: "Authentication Error",
      account: "Account",
    }
  },
  vi: {
    translation: {
      // Navigation
      home: "Trang chủ",
      categories: "Danh mục",
      products: "Sản phẩm",
      cart: "Giỏ hàng",
      login: "Đăng nhập",
      signup: "Đăng ký",
      logout: "Đăng xuất",
      
      // Hero Section
      heroTitle: "Thiết bị điện tử mới nhất",
      heroSubtitle: "Khám phá công nghệ tiên tiến với giá cả không thể cạnh tranh",
      shopNow: "Mua ngay",
      
      // Categories
      smartphones: "Điện thoại",
      laptops: "Laptop",
      tablets: "Máy tính bảng",
      accessories: "Phụ kiện",
      gaming: "Gaming",
      audio: "Âm thanh",
      
      // Products
      bestSelling: "Bán chạy",
      featured: "Sản phẩm nổi bật",
      newArrivals: "Hàng mới về",
      addToCart: "Thêm vào giỏ",
      price: "Giá",
      sale: "Giảm giá",
      
      // Common
      search: "Tìm kiếm sản phẩm...",
      currency: "₫",
      viewAll: "Xem tất cả",
      loading: "Đang tải...",
      backToProducts: "Quay lại sản phẩm",
      
      // Footer
      aboutUs: "Về chúng tôi",
      contactUs: "Liên hệ",
      privacy: "Chính sách bảo mật",
      terms: "Điều khoản dịch vụ",
      
      // Authentication
      signIn: "Đăng nhập",
      signUp: "Đăng ký",
      signOut: "Đăng xuất",
      email: "Email",
      password: "Mật khẩu",
      displayName: "Tên hiển thị",
      emailPlaceholder: "Nhập email của bạn",
      passwordPlaceholder: "Nhập mật khẩu",
      displayNamePlaceholder: "Nhập tên của bạn",
      welcomeMessage: "Đăng nhập vào tài khoản hoặc tạo tài khoản mới",
      signingIn: "Đang đăng nhập...",
      signingUp: "Đang đăng ký...",
      checkEmail: "Kiểm tra email",
      checkEmailDesc: "Chúng tôi đã gửi link đăng ký. Kiểm tra email để hoàn tất đăng ký.",
      welcome: "Chào mừng!",
      signInSuccess: "Bạn đã đăng nhập thành công.",
      error: "Lỗi xác thực",
      account: "Tài khoản",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;