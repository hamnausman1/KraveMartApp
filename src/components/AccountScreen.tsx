import { useState } from 'react';
import svgPaths from '../imports/svg-2h47n1ddb9';
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import imgOval from "figma:asset/6b7d77eaeddf8ebbf8ae87f61d1caeb7a4bf72d0.png";
import imgSpeaker from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import { imgMain1 } from "../imports/svg-g538o";
import LogoutAlertDialog from './LogoutAlertDialog';
import { useLanguage } from '../contexts/LanguageContext';
import BottomNavigation from './BottomNavigation';
import { speak } from '../utils/textToSpeech';
import { ttsMessages } from '../utils/ttsMessages';
import { ChevronRight } from 'lucide-react';

interface AccountScreenProps {
  onBack?: () => void;
  onNavigateHome: () => void;
  onNavigateSearch: () => void;
  onNavigateCart: () => void;
  onNavigateNotifications: () => void;
  onEditProfile: () => void;
  onMyAddress: () => void;
  onMyOrders: () => void;
  onVouchers: () => void;
  onContactUs: () => void;
  onAppSettings: () => void;
  onHelp: () => void;
  onLogout: () => void;
}

function MaskGroup() {
  return (
    <div className="absolute bottom-0 contents left-[0.03%] right-[-0.02%] top-[0.02%]">
      <div className="absolute contents inset-[-15.21%_-58.02%_73.97%_-7.26%]">
        <div className="absolute flex inset-[-15.21%_-58.02%_73.97%_-7.26%] items-center justify-center">
          <div className="flex-none h-[591.473px] rotate-[262.524deg] skew-x-[2.788deg] w-[290.492px]">
            <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[27.34px_145.302px] mask-size-[374.954px_953.834px] opacity-80 relative size-full" style={{ maskImage: `url('${imgMain1}')` }}>
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[333.28%] left-[-725%] max-w-none top-[-109.86%] w-[1406.64%]" src={imgMain2} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute backdrop-blur-[45px] backdrop-filter bg-gradient-to-b from-[rgba(252,252,252,0.6)] inset-[0.02%_-0.16%_73.97%_-0.01%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.16px_0px] mask-size-[374.954px_953.834px] to-[rgba(255,255,255,0.6)]" style={{ maskImage: `url('${imgMain1}')` }} />
      </div>
      <div className="absolute contents inset-[66.22%_-0.06%_-0.03%_0.03%]">
        <div className="absolute contents inset-[81.29%_-0.06%_-0.03%_0.03%]">
          <div className="absolute flex inset-[81.29%_-0.06%_-0.03%_0.03%] items-center justify-center">
            <div className="flex-none h-[375.169px] rotate-[90deg] skew-x-[358.988deg] w-[172.164px]">
              <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-775.364px] mask-size-[374.954px_953.834px] relative size-full" style={{ maskImage: `url('${imgMain1}')` }}>
                <div className="absolute inset-0 opacity-75 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[415.76%] left-[-1201.44%] max-w-none top-[-144.82%] w-[1987.8%]" src={imgMain2} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute backdrop-blur-[45px] backdrop-filter bg-[rgba(254,254,254,0.55)] bottom-0 left-[0.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-631.531px] mask-size-[374.954px_953.834px] right-[-0.02%] top-[66.22%]" style={{ maskImage: `url('${imgMain1}')` }} />
      </div>
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute inset-[39.39%_3.82%_34.85%_89.69%]">
      <svg className="block size-full" fill="none" viewBox="0 0 25 12">
        <rect height="10.3333" opacity="0.35" rx="2.16667" stroke="black" width="21" x="0.5" y="0.5" />
        <path d={svgPaths.p9ed9280} fill="black" opacity="0.4" />
        <rect fill="black" height="7.33333" rx="1.33333" width="18" x="2" y="2" />
      </svg>
    </div>
  );
}

function TimeStyle() {
  return (
    <div className="absolute inset-[15.91%_80%_36.36%_5.6%]">
      <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] left-0 not-italic right-0 text-[15px] text-black text-center top-[calc(50%-4.5px)] tracking-[-0.24px]">9:41</p>
    </div>
  );
}

function BarsStatusBarIPhoneLight() {
  return (
    <div className="absolute bottom-[95.39%] left-0 right-0 top-0">
      <Battery />
      <div className="absolute inset-[39.39%_11.64%_35.61%_84.27%]">
        <svg className="block size-full" fill="none" viewBox="0 0 16 11">
          <path d={svgPaths.p39712400} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[40.15%_17.07%_35.61%_78.4%]">
        <svg className="block size-full" fill="none" viewBox="0 0 17 11">
          <path d={svgPaths.p26d17600} fill="black" />
        </svg>
      </div>
      <TimeStyle />
    </div>
  );
}

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  iconColor?: string;
  showDivider?: boolean;
}

function MenuItem({ icon, label, onClick, iconColor = '#37474F', showDivider = true }: MenuItemProps) {
  return (
    <div className="w-full bg-white rounded-[8px] h-[67px] mb-[-1px] relative">
      <button 
        onClick={onClick}
        className="absolute inset-0 w-full h-full bg-transparent border-none cursor-pointer text-left"
      >
        <div className="absolute content-stretch flex items-center left-[7px] overflow-clip top-[calc(50%-0.5px)] translate-y-[-50%]">
          <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
            {icon}
          </div>
          <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
            <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap whitespace-pre">{label}</p>
          </div>
        </div>
        
        <div className="absolute right-[16px] top-[calc(50%-10px)]">
          <ChevronRight className="w-[20px] h-[20px] text-black" strokeWidth={2} />
        </div>
      </button>

      {showDivider && (
        <div className="absolute bottom-[-1px] h-[2px] left-[0.27%] right-[-0.27%] pointer-events-none">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 376 2">
            <path d={svgPaths.pcffcb00} stroke="#F0F0F0" strokeLinecap="square" />
          </svg>
        </div>
      )}
    </div>
  );
}

export default function AccountScreen({
  onBack,
  onNavigateHome,
  onNavigateSearch,
  onNavigateCart,
  onNavigateNotifications,
  onEditProfile,
  onMyAddress,
  onMyOrders,
  onVouchers,
  onContactUs,
  onAppSettings,
  onHelp,
  onLogout
}: AccountScreenProps) {
  const [isLogoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const { t, language } = useLanguage();

  const handleLogoutClick = () => {
    setLogoutDialogOpen(true);
  };

  const handleLogoutConfirm = () => {
    onLogout();
    setLogoutDialogOpen(false);
  };

  const handleLogoutCancel = () => {
    setLogoutDialogOpen(false);
  };

  const handleSpeakerClick = () => {
    const message = language === 'english' ? ttsMessages.account.english : ttsMessages.account.urdu;
    speak(message, language);
  };

  const handleNameSpeakerClick = () => {
    speak("Hamna Usman", language);
  };

  const handlePhoneSpeakerClick = () => {
    speak("03XX-XXXXXXX", language);
  };

  return (
    <div className="bg-white relative size-full" dir={language === 'urdu' ? 'rtl' : 'ltr'}>
      <MaskGroup />
      <BarsStatusBarIPhoneLight />

      {/* Header */}
      <div className="absolute h-[88px] left-px top-0 w-[375px]">
        <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[16px] not-italic text-[#37474f] text-[20px] text-nowrap top-[calc(50%+7.5px)] whitespace-pre">{t('account')}</p>
        <button 
          onClick={handleSpeakerClick}
          className="absolute right-[16px] top-[51px] cursor-pointer bg-transparent border-none p-0"
          aria-label="Read account screen information"
        >
          <img alt="" className="w-[16px] h-[16px]" src={imgSpeaker} />
        </button>
      </div>

      {/* Profile Section */}
      <div className="absolute h-[51px] left-[18px] overflow-visible top-[122px] w-[340px]">
        <div className="absolute bottom-0 left-0 w-[50px] top-[1.96%]">
          <img alt="" className="block max-w-none size-full" height="50" src={imgOval} width="50" />
        </div>
        
        <p className="absolute left-[66px] top-0 font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic text-[#3f3f3f] text-[18px] text-nowrap whitespace-pre">Hamna Usman</p>
        
        <p className="absolute left-[66px] bottom-[2px] font-['Poppins:Medium',sans-serif] leading-[23px] not-italic text-[#555555] text-[15px]">03XX-XXXXXXX</p>
      </div>

      {/* Scrollable Menu Items */}
      <div className="absolute left-[1px] right-[1px] top-[211px] bottom-[116px] overflow-y-auto px-2">
        <MenuItem
          icon={
            <svg className="block size-[24px]" fill="none" viewBox="0 0 24 24">
              <path clipRule="evenodd" d={svgPaths.p366f4500} fill="#236CD9" fillRule="evenodd" />
            </svg>
          }
          label={t('editProfile')}
          onClick={onEditProfile}
        />

        <MenuItem
          icon={
            <svg className="block size-[24px]" fill="none" viewBox="0 0 24 24">
              <path clipRule="evenodd" d={svgPaths.p36683780} fill="#37474F" fillRule="evenodd" />
            </svg>
          }
          label={t('myAddresses')}
          onClick={onMyAddress}
        />

        <MenuItem
          icon={
            <svg className="block size-[24px]" fill="none" viewBox="0 0 24 24">
              <path clipRule="evenodd" d={svgPaths.p16b0ed80} fill="#37474F" fillRule="evenodd" />
            </svg>
          }
          label={t('myOrders')}
          onClick={onMyOrders}
        />

        <MenuItem
          icon={
            <svg className="block size-[24px]" fill="none" viewBox="0 0 24 24">
              <path clipRule="evenodd" d={svgPaths.p262f4d00} fill="#FFD037" fillRule="evenodd" />
            </svg>
          }
          label={t('vouchers')}
          onClick={onVouchers}
        />

        <MenuItem
          icon={
            <svg className="block size-[24px]" fill="none" viewBox="0 0 24 24">
              <path clipRule="evenodd" d={svgPaths.p1ab7d640} fill="#F37A20" fillRule="evenodd" />
            </svg>
          }
          label={t('contactUs')}
          onClick={onContactUs}
        />

        <MenuItem
          icon={
            <div className="relative size-[24px]">
              <svg className="block size-full" fill="none" viewBox="0 0 26 27">
                <path d={svgPaths.p4a20900} fill="#1D1B20" />
              </svg>
            </div>
          }
          label={t('appSettings')}
          onClick={onAppSettings}
        />

        <MenuItem
          icon={
            <div className="relative size-[24px]">
              <svg className="block size-full" fill="none" viewBox="0 0 29 28">
                <path d={svgPaths.p2a745780} stroke="#1E1E1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          }
          label={t('help')}
          onClick={onHelp}
        />

        <MenuItem
          icon={
            <svg className="block size-[24px]" fill="none" viewBox="0 0 24 24">
              <path clipRule="evenodd" d={svgPaths.p2595f880} fill="#FF5552" fillRule="evenodd" />
            </svg>
          }
          label={t('logout')}
          onClick={handleLogoutClick}
          showDivider={false}
        />
      </div>

      {/* Logout AlertDialog */}
      <LogoutAlertDialog
        isOpen={isLogoutDialogOpen}
        onConfirm={handleLogoutConfirm}
        onCancel={handleLogoutCancel}
      />

      {/* Bottom Navigation */}
      <BottomNavigation
        currentPage="account"
        onNavigateHome={onNavigateHome}
        onNavigateSearch={onNavigateSearch}
        onNavigateCart={onNavigateCart}
        onNavigateNotifications={onNavigateNotifications}
        onNavigateAccount={() => {}}
      />
    </div>
  );
}