import { useState, useEffect } from 'react';
import CategoryProductsScreen from './CategoryProductsScreen';
import { getCategoryProducts, Product } from '../data/categoryProducts';

interface CategoryProductsWrapperProps {
  categoryName: string;
  onBack: () => void;
  onProductClick: (product: Product) => void;
  onNavigateHome?: () => void;
  onNavigateCart?: () => void;
  onNavigateSearch?: () => void;
  onNavigateNotifications?: () => void;
  onNavigateAccount?: () => void;
}

export default function CategoryProductsWrapper({ 
  categoryName, 
  onBack, 
  onProductClick,
  onNavigateHome,
  onNavigateCart,
  onNavigateSearch,
  onNavigateNotifications,
  onNavigateAccount
}: CategoryProductsWrapperProps) {
  const [productImages, setProductImages] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Images are now embedded in the product data, so just map them directly
    const products = getCategoryProducts(categoryName);
    const imageMap: Record<string, string> = {};
    products.forEach((product) => {
      imageMap[product.id] = product.image;
    });
    setProductImages(imageMap);
    setLoading(false);
  }, [categoryName]);

  if (loading) {
    return (
      <div className="bg-white relative size-full overflow-hidden flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#ffd037] border-t-transparent rounded-full animate-spin"></div>
          <p className="font-['Poppins:Medium',sans-serif] text-[16px] text-[#37474f]">Loading products...</p>
        </div>
      </div>
    );
  }

  return <CategoryProductsScreen 
    categoryName={categoryName} 
    onBack={onBack} 
    productImages={productImages} 
    onProductClick={onProductClick}
    onNavigateHome={onNavigateHome}
    onNavigateCart={onNavigateCart}
    onNavigateSearch={onNavigateSearch}
    onNavigateNotifications={onNavigateNotifications}
    onNavigateAccount={onNavigateAccount}
  />;
}