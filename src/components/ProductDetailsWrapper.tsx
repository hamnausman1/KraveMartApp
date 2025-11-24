import { useState, useEffect } from 'react';
import ProductDetails from './ProductDetails';
import { Product, getCategoryProducts } from '../data/categoryProducts';

interface ProductDetailsWrapperProps {
  product: Product;
  onBack: () => void;
  onProductClick: (product: Product) => void;
}

export default function ProductDetailsWrapper({ product, onBack, onProductClick }: ProductDetailsWrapperProps) {
  const [productImage, setProductImage] = useState('');
  const [relatedProductImages, setRelatedProductImages] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Images are now embedded in the product data
    setProductImage(product.image);

    // Load related products images
    const categoryProducts = getCategoryProducts(product.category);
    const relatedProducts = categoryProducts.filter(p => p.id !== product.id).slice(0, 2);
    
    const imageMap: Record<string, string> = {};
    relatedProducts.forEach((p) => {
      imageMap[p.id] = p.image;
    });
    
    setRelatedProductImages(imageMap);
    setLoading(false);
  }, [product]);

  if (loading) {
    return (
      <div className="bg-white relative size-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#ffd037] border-t-transparent rounded-full animate-spin" />
          <p className="text-[#37474f] font-['Poppins:Medium',sans-serif]">Loading product details...</p>
        </div>
      </div>
    );
  }

  return (
    <ProductDetails
      product={product}
      productImage={productImage}
      onBack={onBack}
      relatedProductImages={relatedProductImages}
      onProductClick={onProductClick}
    />
  );
}