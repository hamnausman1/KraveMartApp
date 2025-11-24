import HomeScreen from './HomeScreen';
import { useAddress } from '../contexts/AddressContext';

interface HomeScreenWrapperProps {
  onCategoriesClick: () => void;
  onLocationClick: () => void;
  onCategoryClick: (categoryName: string) => void;
  onNavigateCart: () => void;
  onNavigateNotifications: () => void;
  onNavigateAccount: () => void;
  onNavigateSearch: () => void;
}

export default function HomeScreenWrapper({ onCategoriesClick, onLocationClick, onCategoryClick, onNavigateCart, onNavigateNotifications, onNavigateAccount, onNavigateSearch }: HomeScreenWrapperProps) {
  const { selectedAddress } = useAddress();
  
  return (
    <HomeScreen
      onCategoryClick={onCategoryClick}
      onCategoriesClick={onCategoriesClick}
      onLocationClick={onLocationClick}
      selectedAddress={selectedAddress?.label || 'IBA Main Campus'}
      onNavigateCart={onNavigateCart}
      onNavigateNotifications={onNavigateNotifications}
      onNavigateAccount={onNavigateAccount}
      onNavigateSearch={onNavigateSearch}
    />
  );
}