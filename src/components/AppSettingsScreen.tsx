import { useState } from 'react';
import svgPaths from "../imports/svg-73gzpnq613";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import imgLanguage from "figma:asset/691320f631ac760839edc171da27beaad9c35cac.png";
import imgImage34 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import { imgMain1 } from "../imports/svg-g538o";
import { useFontSize } from '../contexts/FontSizeContext';
import { useChatbot } from '../contexts/ChatbotContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Volume2, Mic } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import BottomNavigation from './BottomNavigation';

interface AppSettingsScreenProps {
  onBack: () => void;
  onNavigateHome?: () => void;
  onNavigateCart?: () => void;
  onNavigateNotifications?: () => void;
  onNavigateSearch?: () => void;
}

function Group2() {
  return (
    <div className="absolute contents inset-[-16.34%_-58.02%_72.85%_-7.26%]">
      <div className="absolute flex inset-[-15.21%_-58.02%_73.97%_-7.26%] items-center justify-center">
        <div className="flex-none h-[580.301px] rotate-[260.329deg] skew-x-[358.27deg] w-[258.39px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[27.266px_123.674px] mask-size-[373.954px_811.858px] opacity-80 relative size-full" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[333.28%] left-[-725%] max-w-none top-[-109.86%] w-[1406.64%]" src={imgMain2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[-16.34%_-58.02%_72.85%_-7.26%]">
      <Group2 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-gradient-to-b from-[rgba(252,252,252,0.6)] inset-[0.02%_-0.16%_73.97%_-0.01%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.159px_0px] mask-size-[373.954px_811.858px] to-[rgba(255,255,255,0.6)]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[81.29%_-0.06%_-0.03%_0.03%]">
      <div className="absolute flex inset-[81.29%_-0.06%_-0.03%_0.03%] items-center justify-center">
        <div className="flex-none h-[374.153px] rotate-[90deg] skew-x-[359.134deg] w-[146.538px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-659.938px] mask-size-[373.954px_811.858px] relative size-full" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
            <div className="absolute inset-0 opacity-75 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[415.76%] left-[-1201.44%] max-w-none top-[-144.82%] w-[1987.8%]" src={imgMain2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[66.22%_-0.06%_-0.03%_0.03%]">
      <Group1 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-[rgba(254,254,254,0.55)] bottom-0 left-[0.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-537.53px] mask-size-[373.954px_811.858px] right-[-0.02%] top-[66.22%]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute bottom-0 contents left-[0.03%] right-[-0.02%] top-[0.02%]" data-name="Mask Group">
      <Group3 />
      <Group4 />
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute inset-[39.39%_3.82%_34.85%_89.69%]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 10">
        <rect height="8.6464" id="Border" opacity="0.35" rx="2.16667" stroke="black" width="20.9413" x="0.5" y="0.5" />
        <path d={svgPaths.p146eaa00} fill="black" id="Cap" opacity="0.4" />
        <rect fill="black" height="6.24179" id="Capacity" rx="1.33333" width="17.952" x="1.99467" y="1.70231" />
      </svg>
    </div>
  );
}

function TimeStyle() {
  return (
    <div className="absolute inset-[15.91%_80%_36.36%_5.6%]" data-name="Time Style">
      <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] left-0 not-italic right-[-0.8%] text-[15px] text-black text-center top-[calc(50%-4.94px)] tracking-[-0.24px]">9:41</p>
    </div>
  );
}

function BarsStatusBarIPhoneLight() {
  return (
    <div className="absolute bottom-[95.39%] left-0 right-0 top-0" data-name="Bars / Status Bar / iPhone / Light">
      <Battery />
      <div className="absolute inset-[39.39%_11.64%_35.61%_84.27%]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 10">
          <path d={svgPaths.p200f31f0} fill="black" id="Wifi" />
        </svg>
      </div>
      <div className="absolute inset-[40.15%_17.07%_35.61%_78.4%]" data-name="Cellular Connection">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 10">
          <path d={svgPaths.p3773b4f0} fill="black" id="Cellular Connection" />
        </svg>
      </div>
      <TimeStyle />
    </div>
  );
}

export default function AppSettingsScreen({ 
  onBack, 
  onNavigateHome, 
  onNavigateCart, 
  onNavigateNotifications,
  onNavigateSearch
}: AppSettingsScreenProps) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [voiceOverEnabled, setVoiceOverEnabled] = useState(false);
  const { fontSize, increaseFontSize, decreaseFontSize } = useFontSize();
  const { isChatbotEnabled, toggleChatbot } = useChatbot();
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (lang: 'english' | 'urdu') => {
    setLanguage(lang);
    toast.success(`${t('languageChanged')} ${lang === 'english' ? t('english') : t('urdu')}`);
  };

  const handleChatbotToggle = () => {
    toggleChatbot();
    toast.success(isChatbotEnabled ? t('chatbotDisabled') : t('chatbotEnabled'));
  };

  return (
    <div className="bg-white relative size-full">
      <MaskGroup />
      <BarsStatusBarIPhoneLight />

      {/* Header */}
      <div className="absolute h-[88px] left-[21px] top-[-11px] w-[375px]">
        <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[16px] not-italic text-[#37474f] text-[20px] text-nowrap top-[calc(50%+7.5px)] whitespace-pre">{t('appSettings')}</p>
      </div>

      {/* Back Button */}
      <button onClick={onBack} className="absolute left-[9px] size-[24px] top-[44px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.p6a58300} fill="#37474F" />
        </svg>
      </button>

      {/* Scrollable Content */}
      <div className="absolute left-0 right-0 top-[100px] bottom-[130px] overflow-y-auto">
        {/* Font Size Section */}
        <div className="px-[16px] mb-4">
          <p className="font-['Poppins:Medium',sans-serif] text-[16px] text-[#37474f] mb-3">{t('fontSize')}</p>
          <div className="bg-white rounded-[12px] p-[16px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.12)] flex items-center justify-between">
            <button 
              onClick={decreaseFontSize}
              disabled={fontSize <= 50}
              className="bg-[#f37a20] disabled:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-[7px] size-[40px] flex items-center justify-center transition-all"
            >
              <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                <rect x="4" y="7" width="8" height="2" fill="white" rx="1" />
              </svg>
            </button>
            <div className="flex flex-col items-center">
              <p className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#37474f]">{fontSize}%</p>
              <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#888888]">{t('currentSize')}</p>
            </div>
            <button 
              onClick={increaseFontSize}
              disabled={fontSize >= 200}
              className="bg-[#ffd037] disabled:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-[7px] size-[40px] flex items-center justify-center transition-all"
            >
              <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                <rect x="4" y="7" width="8" height="2" fill="white" rx="1" />
                <rect x="7" y="4" width="2" height="8" fill="white" rx="1" />
              </svg>
            </button>
          </div>
          {/* Font Size Range Indicator */}
          <div className="mt-2 flex justify-between px-2">
            <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#888888]">50%</p>
            <p className="font-['Poppins:Regular',sans-serif] text-[11px] text-[#888888]">200%</p>
          </div>
        </div>

        {/* Language Section */}
        <div className="px-[16px] mb-4">
          <p className="font-['Poppins:Medium',sans-serif] text-[16px] text-[#37474f] mb-3">{t('language')}</p>
          
          {/* English Option */}
          <button
            onClick={() => handleLanguageChange('english')}
            className={`w-full ${language === 'english' ? 'bg-[#ffd037]' : 'bg-white'} rounded-[8px] h-[60px] mb-2 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.12)] relative`}
          >
            <div className="absolute content-stretch flex items-center justify-between left-[16px] right-[16px] top-[calc(50%-0.5px)] translate-y-[-50%]">
              <div className="flex items-center gap-[12px]">
                <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                  <text x="2" y="18" className="font-['Poppins:Medium',sans-serif] text-[16px]" fill="#37474f">A</text>
                </svg>
                <p className={`font-['Poppins:Medium',sans-serif] text-[14px] ${language === 'english' ? 'text-[#37474f]' : 'text-[#37474f]'}`}>
                  {t('english')}
                </p>
              </div>
              <Volume2 className="w-5 h-5 text-[#37474f]" />
            </div>
          </button>

          {/* Urdu Option */}
          <button
            onClick={() => handleLanguageChange('urdu')}
            className={`w-full ${language === 'urdu' ? 'bg-[#ffd037]' : 'bg-white'} rounded-[8px] h-[60px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.12)] relative`}
          >
            <div className="absolute content-stretch flex items-center justify-between left-[16px] right-[16px] top-[calc(50%-0.5px)] translate-y-[-50%]">
              <div className="flex items-center gap-[12px]">
                <img alt="" className="size-[24px]" src={imgLanguage} />
                <p className={`font-['Poppins:Medium',sans-serif] text-[14px] ${language === 'urdu' ? 'text-[#37474f]' : 'text-[#37474f]'}`}>
                  {t('urdu')}
                </p>
              </div>
              <Volume2 className="w-5 h-5 text-[#37474f]" />
            </div>
          </button>
        </div>

        {/* Toggles Section */}
        <div className="px-[16px]">
          <p className="font-['Poppins:Medium',sans-serif] text-[16px] text-[#37474f] mb-3">{t('preferences')}</p>
          
          {/* Disable Chatbot */}
          <div className="bg-white rounded-[8px] h-[60px] mb-2 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.12)] flex items-center justify-between px-[16px]">
            <div className="flex items-center gap-[12px]">
              <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p262f4d00} fill="#FFD037" fillRule="evenodd" clipRule="evenodd" />
              </svg>
              <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#37474f]">{t('disableChatbot')}</p>
            </div>
            <button 
              onClick={handleChatbotToggle} 
              className={`${!isChatbotEnabled ? 'bg-[#ffd037]' : 'bg-gray-400'} box-border flex h-[28px] items-center p-[2px] rounded-[100px] w-[52px] transition-colors`}
            >
              <div className={`bg-white h-[24px] rounded-[100px] w-[24px] transition-transform ${!isChatbotEnabled ? 'translate-x-[24px]' : 'translate-x-0'}`} />
            </button>
          </div>

          {/* Enable Push Notifications */}
          <div className="bg-white rounded-[8px] h-[60px] mb-2 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.12)] flex items-center justify-between px-[16px]">
            <div className="flex items-center gap-[12px]">
              <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p27eac080} fill="black" />
              </svg>
              <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#37474f]">{t('enablePushNotifications')}</p>
            </div>
            <button 
              onClick={() => setNotificationsEnabled(!notificationsEnabled)} 
              className={`${notificationsEnabled ? 'bg-[#ffd037]' : 'bg-gray-400'} box-border flex h-[28px] items-center p-[2px] rounded-[100px] w-[52px] transition-colors`}
            >
              <div className={`bg-white h-[24px] rounded-[100px] w-[24px] transition-transform ${notificationsEnabled ? 'translate-x-[24px]' : 'translate-x-0'}`} />
            </button>
          </div>

          {/* Enable Voice Over */}
          <div className="bg-white rounded-[8px] h-[60px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.12)] flex items-center justify-between px-[16px]">
            <div className="flex items-center gap-[12px]">
              <Mic className="w-6 h-6 text-[#37474f]" />
              <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#37474f]">{t('enableVoiceOver')}</p>
            </div>
            <button 
              onClick={() => setVoiceOverEnabled(!voiceOverEnabled)} 
              className={`${voiceOverEnabled ? 'bg-[#ffd037]' : 'bg-gray-400'} box-border flex h-[28px] items-center p-[2px] rounded-[100px] w-[52px] transition-colors`}
            >
              <div className={`bg-white h-[24px] rounded-[100px] w-[24px] transition-transform ${voiceOverEnabled ? 'translate-x-[24px]' : 'translate-x-0'}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation
        currentPage="account"
        onNavigateHome={onNavigateHome || (() => {})}
        onNavigateSearch={onNavigateSearch || (() => {})}
        onNavigateCart={onNavigateCart || (() => {})}
        onNavigateNotifications={onNavigateNotifications || (() => {})}
        onNavigateAccount={() => {}}
      />
    </div>
  );
}