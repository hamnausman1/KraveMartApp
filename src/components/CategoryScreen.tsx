import CategoryComponent from '../imports/Category';
import { ttsMessages } from '../utils/ttsMessages';
import { speak } from '../utils/textToSpeech';
import { useLanguage } from '../contexts/LanguageContext';
import BottomNavigation from './BottomNavigation';
import { ArrowLeft } from 'lucide-react';

interface CategoryScreenProps {
  onCategorySelect: (categoryName: string) => void;
  onBack: () => void;
  onNavigateHome: () => void;
  onNavigateSearch: () => void;
  onNavigateCart: () => void;
  onNavigateNotifications: () => void;
  onNavigateAccount: () => void;
}

const categories = [
  { name: 'Fruits & Vegetables', left: 16, top: 120 },
  { name: 'Snacks & Confectioneries', left: 196, top: 120 },
  { name: 'Cleaning and Laundry', left: 16, top: 318 },
  { name: 'Meat & Fish', left: 195, top: 318 },
  { name: 'Breakfast', left: 15, top: 516 },
  { name: 'Beverages', left: 196, top: 516 },
];

export default function CategoryScreen({ onCategorySelect, onBack, onNavigateHome, onNavigateSearch, onNavigateCart, onNavigateNotifications, onNavigateAccount }: CategoryScreenProps) {
  const { language } = useLanguage();

  const handleSpeakerClick = () => {
    const message = language === 'english' ? ttsMessages.category.english : ttsMessages.category.urdu;
    speak(message, language);
  };

  return (
    <div className="relative size-full">
      <CategoryComponent />
      
      {/* Invisible clickable overlays for each category card */}
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => onCategorySelect(category.name)}
          className="absolute h-[160px] w-[165px] bg-transparent border-none cursor-pointer z-10"
          style={{ left: `${category.left}px`, top: `${category.top}px` }}
          aria-label={`View ${category.name}`}
        />
      ))}
      
      {/* Back button overlay */}
      <button
        onClick={onBack}
        className="absolute left-[16px] top-[50px] bg-white rounded-full p-2 shadow-md border-none cursor-pointer z-50 hover:bg-gray-100 transition-colors"
        aria-label="Go back"
      >
        <ArrowLeft className="w-[24px] h-[24px] text-[#37474f]" strokeWidth={2.5} />
      </button>
      
      {/* Speaker icon overlay - make it clickable */}
      <button
        onClick={handleSpeakerClick}
        className="absolute left-[341px] size-[16px] top-[53px] bg-transparent border-none cursor-pointer z-20 p-0"
        aria-label="Read category screen information"
      />
      
      {/* Remove embedded chatbot icon by covering it */}
      <div className="absolute bottom-[74px] left-[15px] size-[54px] bg-white rounded-full z-[5]" />
      
      {/* Bottom navigation with higher z-index */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <BottomNavigation
          currentPage="home"
          onNavigateHome={onNavigateHome}
          onNavigateSearch={onNavigateSearch}
          onNavigateCart={onNavigateCart}
          onNavigateNotifications={onNavigateNotifications}
          onNavigateAccount={onNavigateAccount}
        />
      </div>
    </div>
  );
}