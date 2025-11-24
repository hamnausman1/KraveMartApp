import FruitsAndVegetablesHome from '../imports/FruitsAndVegetablesHome';

interface CategoryProductScreenProps {
  categoryName: string;
  onBack: () => void;
  onAddToCart: (productName: string) => void;
}

// Product positions for Fruits & Vegetables category
const products = [
  { name: 'Onion - Piyaz', left: 16, top: 121, addToCartTop: 372 },
  { name: 'Apple Golden - Seb', left: 195, top: 121, addToCartTop: 372 },
  { name: 'Red Tomatoes - Timatar', left: 16, top: 465, addToCartTop: 716 },
  { name: 'Coriander - Dhaniya', left: 195, top: 465, addToCartTop: 716 },
];

export default function CategoryProductScreen({ categoryName, onBack, onAddToCart }: CategoryProductScreenProps) {
  // For now, we only have Fruits & Vegetables design
  // Other categories would show the same layout as placeholder
  
  return (
    <div className="relative size-full">
      <FruitsAndVegetablesHome />
      
      {/* Back button overlay */}
      <button
        onClick={onBack}
        className="absolute left-[16px] top-[47px] size-[24px] bg-transparent border-none cursor-pointer z-10"
        aria-label="Go back"
      />
      
      {/* Add to Cart button overlays */}
      {products.map((product) => (
        <button
          key={product.name}
          onClick={() => {
            onAddToCart(product.name);
            alert(`${product.name} added to cart!`);
          }}
          className="absolute h-[35px] w-[164px] bg-transparent border-none cursor-pointer z-10"
          style={{ left: `${product.left}px`, top: `${product.addToCartTop}px` }}
          aria-label={`Add ${product.name} to cart`}
        />
      ))}
      
      {/* Home button overlay (orange button at bottom) */}
      <button
        onClick={() => {
          // Navigate to home - handled by parent
          onBack();
        }}
        className="absolute left-[13px] top-[715px] size-[54px] bg-transparent border-none cursor-pointer z-10 rounded-full"
        aria-label="Go to home"
      />
    </div>
  );
}
