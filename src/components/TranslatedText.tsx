import { useLanguage } from '../contexts/LanguageContext';

interface TranslatedTextProps {
  children: string;
  className?: string;
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'button' | 'label';
}

// Simple text mapping for common phrases
const textMapping: Record<string, string> = {
  // Navigation
  'Home': 'home',
  'Cart': 'myCart',
  'Account': 'account',
  'Notifications': 'notifications',
  'Search': 'search',
  
  // Buttons
  'Continue': 'continue',
  'Next': 'next',
  'Back': 'back',
  'Finish': 'finish',
  'Submit': 'submit',
  'Save': 'save',
  'Cancel': 'cancel',
  'Delete': 'delete',
  'Edit': 'edit',
  'Add': 'add',
  'Remove': 'remove',
  'Verify': 'verify',
  'Resend': 'resend',
  
  // Screens
  'Edit Profile': 'editProfile',
  'My Address': 'myAddresses',
  'My Orders': 'myOrders',
  'My Cart': 'myCart',
  'All Categories': 'allCategories',
  'App Settings': 'appSettings',
  
  // Common
  'See All': 'seeAll',
  'View All': 'viewAll',
  'View Details': 'viewDetails',
  'Yes': 'yes',
  'No': 'no',
  'OK': 'ok',
  'Close': 'close',
  'Loading...': 'loading',
};

export default function TranslatedText({ children, className, as: Component = 'span' }: TranslatedTextProps) {
  const { t } = useLanguage();
  
  // Try to find a mapping key
  const mappingKey = textMapping[children];
  const translatedText = mappingKey ? t(mappingKey) : children;
  
  return <Component className={className}>{translatedText}</Component>;
}
