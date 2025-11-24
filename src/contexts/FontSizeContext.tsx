import { createContext, useContext, useState, ReactNode } from 'react';

interface FontSizeContextType {
  fontSize: number;
  setFontSize: (size: number) => void;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  getFontScale: () => number;
  getBaseFontSize: () => number;
}

const FontSizeContext = createContext<FontSizeContextType | undefined>(undefined);

export function FontSizeProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSize] = useState(75); // Default to 75%

  const increaseFontSize = () => {
    setFontSize(prev => Math.min(prev + 25, 200)); // Increase by 25%, max 200%
  };

  const decreaseFontSize = () => {
    setFontSize(prev => Math.max(prev - 25, 50)); // Decrease by 25%, min 50%
  };

  const getFontScale = () => fontSize / 100;

  // Convert percentage to pixel values
  const getBaseFontSize = () => {
    const sizeMap: { [key: number]: number } = {
      50: 8,   // 50% → 8px
      75: 12,  // 75% → 12px (default)
      100: 16, // 100% → 16px
      125: 20, // 125% → 20px
      150: 24, // 150% → 24px
      175: 28, // 175% → 28px
      200: 32  // 200% → 32px
    };
    return sizeMap[fontSize] || 12; // Default to 12px if not found
  };

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSize, increaseFontSize, decreaseFontSize, getFontScale, getBaseFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
}

export function useFontSize() {
  const context = useContext(FontSizeContext);
  if (context === undefined) {
    throw new Error('useFontSize must be used within a FontSizeProvider');
  }
  return context;
}