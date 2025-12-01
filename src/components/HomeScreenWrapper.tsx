import HomeScreen from './HomeScreen';
import { useAddress } from '../contexts/AddressContext';

interface HomeScreenWrapperProps {
  onCategoriesClick: () => void;
  onBrandsClick?: () => void;
  onLocationClick: () => void;
  onCategoryClick: (categoryName: string) => void;
  onBrandClick?: (brandName: string) => void;
  onNavigateCart: () => void;
  onNavigateNotifications: () => void;
  onNavigateAccount: () => void;
  onNavigateSearch: () => void;
}

export default function HomeScreenWrapper({ onCategoriesClick, onBrandsClick, onLocationClick, onCategoryClick, onBrandClick, onNavigateCart, onNavigateNotifications, onNavigateAccount, onNavigateSearch }: HomeScreenWrapperProps) {
  const { selectedAddress } = useAddress();
  
  return (
    <HomeScreen
      onCategoryClick={onCategoryClick}
      onCategoriesClick={onCategoriesClick}
      onBrandsClick={onBrandsClick}
      onBrandClick={onBrandClick}
      onLocationClick={onLocationClick}
      selectedAddress={selectedAddress?.label || 'IBA Main Campus'}
      onNavigateCart={onNavigateCart}
      onNavigateNotifications={onNavigateNotifications}
      onNavigateAccount={onNavigateAccount}
      onNavigateSearch={onNavigateSearch}
    />
  );
}