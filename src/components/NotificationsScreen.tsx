import { useState } from 'react';
import svgPaths from "../imports/svg-7nfdeea9xv";
import imgImage16 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import { imgMain1 } from "../imports/svg-g538o";
import { useLanguage } from '../contexts/LanguageContext';
import BottomNavigation from './BottomNavigation';
import { speak } from '../utils/textToSpeech';
import { ArrowLeft } from 'lucide-react';

interface NotificationsScreenProps {
  onBack: () => void;
  onNavigateHome: () => void;
  onNavigateSearch: () => void;
  onNavigateCart: () => void;
  onNavigateAccount: () => void;
}

interface Notification {
  id: string;
  orderId: string;
  message: string;
  time: string;
  type: 'confirmed' | 'delivering' | 'completed';
  isRead: boolean;
}

function Group7() {
  return (
    <div className="absolute contents inset-[-15.21%_-58.02%_73.97%_-7.26%]">
      <div className="absolute flex inset-[-15.21%_-58.02%_73.97%_-7.26%] items-center justify-center">
        <div className="flex-none h-[588.878px] rotate-[261.236deg] w-[248.041px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[27.34px_123.671px] mask-size-[374.954px_811.834px] opacity-80 relative size-full" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[333.28%] left-[-725%] max-w-none top-[-109.86%] w-[1406.64%]" src={imgMain2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[-15.21%_-58.02%_73.97%_-7.26%]">
      <Group7 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-gradient-to-b from-[rgba(252,252,252,0.6)] inset-[0.02%_-0.16%_73.97%_-0.01%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.16px_0px] mask-size-[374.954px_811.834px] to-[rgba(255,255,255,0.6)]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[81.29%_-0.06%_-0.03%_0.03%]">
      <div className="absolute flex inset-[81.29%_-0.06%_-0.03%_0.03%] items-center justify-center">
        <div className="flex-none h-[375.153px] rotate-[90deg] skew-x-[359.139deg] w-[146.533px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-659.933px] mask-size-[374.954px_811.834px] relative size-full" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
            <div className="absolute inset-0 opacity-75 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[415.76%] left-[-1201.44%] max-w-none top-[-144.82%] w-[1987.8%]" src={imgMain2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[66.22%_-0.06%_-0.03%_0.03%]">
      <Group6 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-[rgba(254,254,254,0.55)] bottom-0 left-[0.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-537.513px] mask-size-[374.954px_811.834px] right-[-0.02%] top-[66.22%]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute bottom-0 contents left-[0.03%] right-[-0.02%] top-[0.02%]" data-name="Mask Group">
      <Group8 />
      <Group9 />
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute inset-[39.39%_3.82%_34.85%_89.69%]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 12">
        <g id="Battery">
          <rect height="10.3333" id="Border" opacity="0.35" rx="2.16667" stroke="var(--stroke-0, black)" width="21" x="0.5" y="0.5" />
          <path d={svgPaths.p9ed9280} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="7.33333" id="Capacity" rx="1.33333" width="18" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function TimeStyle() {
  return (
    <div className="absolute inset-[15.91%_80%_36.36%_5.6%]" data-name="Time Style">
      <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] left-0 not-italic right-0 text-[15px] text-black text-center top-[calc(50%-4.5px)] tracking-[-0.24px]">9:41</p>
    </div>
  );
}

function BarsStatusBarIPhoneLight() {
  return (
    <div className="absolute bottom-[94.58%] left-0 right-0 top-0" data-name="Bars / Status Bar / iPhone / Light">
      <Battery />
      <div className="absolute inset-[39.39%_11.64%_35.61%_84.27%]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 11">
          <path d={svgPaths.p39712400} fill="var(--fill-0, black)" id="Wifi" />
        </svg>
      </div>
      <div className="absolute inset-[40.15%_17.07%_35.61%_78.4%]" data-name="Cellular Connection">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 11">
          <path d={svgPaths.p26d17600} fill="var(--fill-0, black)" id="Cellular Connection" />
        </svg>
      </div>
      <TimeStyle />
    </div>
  );
}

interface NotificationItemProps {
  notification: Notification;
  onClick: () => void;
  index: number;
}

function NotificationItem({ notification, onClick, index }: NotificationItemProps) {
  const iconColor = notification.type === 'confirmed' 
    ? (index === 0 ? '#F37A20' : '#FF5552')
    : notification.type === 'delivering' 
    ? '#36B37E' 
    : '#FFD037';

  const iconType = notification.type === 'confirmed' || notification.type === 'completed' 
    ? 'subject' 
    : notification.type === 'delivering' 
    ? 'call'
    : 'star';

  const topPosition = 0 + (index * 111);
  const isUnread = !notification.isRead;

  return (
    <button 
      onClick={onClick}
      className={`absolute h-[95px] left-[16px] w-[343px] ${isUnread ? 'bg-[rgba(94,196,1,0.17)] rounded-[12px]' : ''}`}
      style={{ top: `${topPosition}px` }}
      data-name={isUnread ? "notifications/unread" : "notifications/read"}
    >
      <p className="absolute font-['Poppins:Medium',sans-serif] left-[20px] top-[12px] leading-[normal] not-italic text-[#37474f] text-[16px] tracking-[0.6px] text-left">{notification.orderId}</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] left-[20px] top-[37px] right-[80px] leading-[normal] not-italic text-[#37474f] text-[14px] text-left">{notification.message}</p>
      
      <div className="absolute right-[21px] top-[37px] w-[36px] h-[36px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
          <g id="Group 94">
            <circle cx="18" cy="18" fill={iconColor} id="Ellipse 3" r="18" />
            {iconType === 'subject' && (
              <path clipRule="evenodd" d={svgPaths.p115e5770} fill="var(--fill-0, white)" fillRule="evenodd" id="icon/action/subject_24px" />
            )}
            {iconType === 'call' && (
              <path clipRule="evenodd" d={svgPaths.p377b8740} fill="var(--fill-0, white)" fillRule="evenodd" id="icon/communication/call_24px" />
            )}
            {iconType === 'star' && (
              <path d={svgPaths.p1892f300} fill="var(--fill-0, white)" id="Vector" />
            )}
          </g>
        </svg>
      </div>

      <p className="absolute font-['Poppins:Regular',sans-serif] right-[21px] top-[14px] leading-[normal] not-italic text-[#37474f] text-[11px] text-right">{notification.time}</p>
      
      {index < 4 && (
        <div className="absolute bottom-[-1.05%] left-0 right-0 top-full" data-name="Line">
          <div className="absolute bottom-0 left-[-0.15%] right-[-0.15%] top-0">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344 1">
              <path d="M0.5 0.5H343.5" id="Line" stroke="var(--stroke-0, #E1E1E1)" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      )}
    </button>
  );
}

export default function NotificationsScreen({ onBack, onNavigateHome, onNavigateSearch, onNavigateCart, onNavigateAccount }: NotificationsScreenProps) {
  const { t, language } = useLanguage();
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      orderId: 'Order #345',
      message: 'Your Order is Confirmed. Please check everything is okay',
      time: '3:57 PM',
      type: 'confirmed',
      isRead: false
    },
    {
      id: '2',
      orderId: 'Order #345',
      message: 'Your Order is Delivering to your home',
      time: '2:33 PM',
      type: 'delivering',
      isRead: true
    },
    {
      id: '3',
      orderId: 'Order #345',
      message: 'Your Order is Confirmed. Please check everything is okay',
      time: '4:12 AM',
      type: 'confirmed',
      isRead: true
    },
    {
      id: '4',
      orderId: 'Order #345',
      message: 'Your Order is Completed. Please rate the experince',
      time: '12:07 AM',
      type: 'completed',
      isRead: true
    },
    {
      id: '5',
      orderId: 'Order #345',
      message: 'Your Order is Confirmed. Please check everything is okay',
      time: '11:01 AM',
      type: 'confirmed',
      isRead: true
    }
  ]);

  const handleNotificationClick = (id: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, isRead: true } : notif
      )
    );
    speak(t('notification_read'));
  };

  const handleSpeakerClick = () => {
    const text = language === 'english' 
      ? "This is the notifications screen. Here you can view all your order updates, promotions, and app notifications."
      : "یہ اطلاعات کی اسکرین ہے۔ یہاں آپ اپنے تمام آرڈر اپ ڈیٹس، پروموشنز، اور ایپ کی اطلاعات دیکھ سکتے ہیں۔";
    speak(text, language);
  };

  return (
    <div className="bg-white relative size-full" data-name="Notifications">
      <MaskGroup />
      <BarsStatusBarIPhoneLight />

      {/* Header */}
      <div className="absolute h-[88px] left-0 top-0 w-[375px] z-10" data-name="components/mobile/appbar/secondery">
        <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[58px] not-italic text-[#37474f] text-[20px] text-nowrap top-[47.32px] whitespace-pre">{t('notifications')}</p>
        <button 
          onClick={onBack} 
          className="absolute left-[16px] top-[47.32px] z-50 bg-white rounded-full p-1 shadow-lg border-none cursor-pointer hover:bg-gray-100 transition-colors w-[32px] h-[32px] flex items-center justify-center" 
          aria-label="Go back"
        >
          <ArrowLeft className="block w-[20px] h-[20px]" fill="#37474F" />
        </button>
        <button 
          onClick={handleSpeakerClick}
          className="absolute left-[342px] size-[16px] top-[51px] cursor-pointer bg-transparent border-none p-0"
          aria-label="Read notifications screen information"
        >
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage16} />
        </button>
      </div>

      {/* Notifications List */}
      <div className="absolute left-0 right-0 top-[88px] bottom-[116px] overflow-y-auto">
        {notifications.map((notification, index) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onClick={() => handleNotificationClick(notification.id)}
            index={index}
          />
        ))}
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation
        currentPage="notifications"
        onNavigateHome={onNavigateHome}
        onNavigateSearch={onNavigateSearch}
        onNavigateCart={onNavigateCart}
        onNavigateNotifications={() => {}}
        onNavigateAccount={onNavigateAccount}
      />
    </div>
  );
}