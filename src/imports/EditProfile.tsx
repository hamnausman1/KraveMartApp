import svgPaths from "./svg-25pxbvohu0";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import imgEllipse6 from "figma:asset/3f525ab94b74471712f1ec9f56f08b4b20f3083f.png";
import imgImage42 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import { imgMain1 } from "./svg-7hccy";
import { useLanguage } from '../contexts/LanguageContext';

function Group5() {
  return (
    <div className="absolute contents inset-[-15.21%_-58.02%_73.97%_-7.26%]">
      <div className="absolute flex inset-[-15.21%_-58.02%_73.97%_-7.26%] items-center justify-center">
        <div className="flex-none h-[588.878px] rotate-[261.236deg] w-[248.041px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[27.34px_123.67px] mask-size-[374.954px_811.834px] opacity-80 relative size-full" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[333.28%] left-[-725%] max-w-none top-[-109.86%] w-[1406.64%]" src={imgMain2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[-15.21%_-58.02%_73.97%_-7.26%]">
      <Group5 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-gradient-to-b from-[rgba(252,252,252,0.6)] inset-[0.02%_-0.16%_73.97%_-0.01%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.16px_0px] mask-size-[374.954px_811.834px] to-[rgba(255,255,255,0.6)]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function Group4() {
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

function Group7() {
  return (
    <div className="absolute contents inset-[66.22%_-0.06%_-0.03%_0.03%]">
      <Group4 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-[rgba(254,254,254,0.55)] bottom-0 left-[0.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-537.513px] mask-size-[374.954px_811.834px] right-[-0.02%] top-[66.22%]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute bottom-0 contents left-[0.03%] right-[-0.02%] top-[0.02%]" data-name="Mask Group">
      <Group6 />
      <Group7 />
    </div>
  );
}

function ComponentsMobileAppbarPrimary() {
  return (
    <div className="absolute h-[88px] left-px top-0 w-[375px]" data-name="components/mobile/appbar/primary">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[16px] not-italic text-[#37474f] text-[12px] text-nowrap top-[calc(50%+7.5px)] whitespace-pre">&nbsp;</p>
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

function NavigationArrowBackward24Px() {
  return (
    <div className="absolute left-[16px] size-[24px] top-[47.32px]" data-name="navigation/arrow_backward_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="navigation/arrow_backward_24px">
          <path d={svgPaths.p6a58300} fill="var(--fill-0, #37474F)" id="icon/navigation/arrow_backward_24px" />
        </g>
      </svg>
    </div>
  );
}

function ComponentsMobileAppbarSecondery() {
  const { t } = useLanguage();
  
  return (
    <div className="absolute h-[88px] left-px top-0 w-[375px]" data-name="components/mobile/appbar/secondery">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[58px] not-italic text-[#37474f] text-[20px] text-nowrap top-[47.32px] whitespace-pre">{t('editProfile')}</p>
      <NavigationArrowBackward24Px />
    </div>
  );
}

function ActionAccountCircle24Px() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="action/account_circle_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="action/account_circle_24px">
          <path clipRule="evenodd" d={svgPaths.pa35dc80} fill="var(--fill-0, #37474F)" fillRule="evenodd" id="icon/action/account_circle_24px" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <ActionAccountCircle24Px />
    </div>
  );
}

function Frame1() {
  const { t } = useLanguage();
  
  return (
    <div className="box-border content-stretch flex flex-col font-['Poppins:Regular',sans-serif] items-start leading-[normal] not-italic overflow-clip px-[10px] py-0 relative shrink-0 text-[#37474f] text-nowrap whitespace-pre">
      <p className="relative shrink-0 text-[12px]">{t('fullName')}</p>
      <p className="relative shrink-0 text-[16px]">Hamna Usman</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex items-center left-[6px] overflow-clip top-[6px]">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-0 overflow-clip">
      <div className="absolute bg-[#f0f1f2] inset-0 rounded-[8px]" data-name="Rectangle" />
      <Frame2 />
    </div>
  );
}

function FormElementsMobileInputFieldsActiveFilled() {
  return (
    <div className="absolute inset-[39.9%_4.27%_53.69%_4.27%]" data-name="form elements/mobile/input fields/active/filled">
      <Group />
    </div>
  );
}

function ImageCamera24Px() {
  return (
    <div className="absolute left-[233px] size-[18px] top-[242px]" data-name="image/camera_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="image/camera_24px">
          <path clipRule="evenodd" d={svgPaths.p1b9992c0} fill="var(--fill-0, white)" fillRule="evenodd" id="icon/image/camera_24px" />
        </g>
      </svg>
    </div>
  );
}

function SocialVisibility24Px() {
  return (
    <div className="absolute right-[14.42px] size-[24px] top-1/2 translate-y-[-50%]" data-name="social/visibility_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="social/visibility_24px">
          <path clipRule="evenodd" d={svgPaths.pb3f0d80} fill="var(--fill-0, #37474F)" fillRule="evenodd" id="icon/social/visibility_24px" />
        </g>
      </svg>
    </div>
  );
}

function ActionLock24Px() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="action/lock_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="action/lock_24px">
          <path clipRule="evenodd" d={svgPaths.p30734500} fill="var(--fill-0, #37474F)" fillRule="evenodd" id="icon/action/lock_24px" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <ActionLock24Px />
    </div>
  );
}

function Frame4() {
  const { t } = useLanguage();
  
  return (
    <div className="box-border content-stretch flex flex-col font-['Poppins:Regular',sans-serif] items-start leading-[normal] not-italic overflow-clip px-[10px] py-0 relative shrink-0 text-[#37474f] text-nowrap whitespace-pre">
      <p className="relative shrink-0 text-[12px]">{t('password')}</p>
      <p className="relative shrink-0 text-[16px]">• • • • • • •</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex items-center left-[6px] overflow-clip top-[6px]">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-0 overflow-clip">
      <div className="absolute bg-[#f0f1f2] inset-0 rounded-[8px]" data-name="Rectangle" />
      <SocialVisibility24Px />
      <Frame5 />
    </div>
  );
}

function FormElementsMobileInputFieldsActiveFilled1() {
  return (
    <div className="absolute inset-[48.15%_4%_45.44%_4.53%]" data-name="form elements/mobile/input fields/active/filled">
      <Group1 />
    </div>
  );
}

function CommunicationCall24Px() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="communication/call_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="communication/call_24px">
          <path clipRule="evenodd" d={svgPaths.p1ab7d640} fill="var(--fill-0, #37474F)" fillRule="evenodd" id="icon/communication/call_24px" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <CommunicationCall24Px />
    </div>
  );
}

function Frame7() {
  const { t } = useLanguage();
  
  return (
    <div className="box-border content-stretch flex flex-col font-['Poppins:Regular',sans-serif] items-start leading-[normal] not-italic overflow-clip px-[10px] py-0 relative shrink-0 text-[#37474f] text-nowrap whitespace-pre">
      <p className="relative shrink-0 text-[12px]">{t('phoneNo')}</p>
      <p className="relative shrink-0 text-[16px]">03XX-XXXXXXX</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex items-center left-[6px] overflow-clip top-[6px]">
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-0 overflow-clip">
      <div className="absolute bg-[#f0f1f2] inset-0 rounded-[8px]" data-name="Rectangle" />
      <Frame8 />
    </div>
  );
}

function FormElementsMobileInputFieldsActiveFilled2() {
  return (
    <div className="absolute inset-[56.4%_4.27%_37.19%_4.27%]" data-name="form elements/mobile/input fields/active/filled">
      <Group2 />
    </div>
  );
}

function FileSave24Px() {
  return (
    <div className="absolute right-[16px] size-[24px] top-1/2 translate-y-[-50%]" data-name="file/save_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="file/save_24px">
          <path clipRule="evenodd" d={svgPaths.p3b1b9870} fill="var(--fill-0, black)" fillRule="evenodd" id="icon/content/save_24px" />
        </g>
      </svg>
    </div>
  );
}

function ButtonsMobileSolidTextSymbolTextSymbol() {
  const { t } = useLanguage();
  
  return (
    <div className="absolute inset-[77.71%_4%_16.38%_4.53%]" data-name="buttons/mobile/solid/text + symbol/text → symbol">
      <div className="absolute bg-[#ffd037] inset-0 rounded-[8px]" data-name="Rectangle" />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[164px] not-italic text-[16px] text-black text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">{t('save')}</p>
      </div>
      <FileSave24Px />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-white inset-0 rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_2px_7px_0px_rgba(0,0,0,0.24)]" data-name="Rectangle" />
    </div>
  );
}

function BarsHomeIndicatorIPhoneLightPortrait() {
  return (
    <div className="absolute bottom-0 left-[32.53%] right-[31.73%] top-[72.36%]" data-name="Bars / Home Indicator / iPhone / Light - Portrait">
      <div className="absolute bg-black bottom-[12.07px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute h-[116px] left-0 top-[696px] w-[375px]" data-name="navbar">
      <Group3 />
      <BarsHomeIndicatorIPhoneLightPortrait />
    </div>
  );
}

function IconTabHomeFill() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon_Tab/Home_Fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon_Tab/Home_Fill">
          <path clipRule="evenodd" d={svgPaths.pee438f0} fill="var(--fill-0, black)" fillRule="evenodd" id="home_fill" opacity="0.28" />
        </g>
      </svg>
    </div>
  );
}

function TabBarItem() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-start left-[calc(50%-149.5px)] pb-[8px] pt-[12px] px-[26px] top-[2px] translate-x-[-50%]" data-name="Tab Bar Item">
      <IconTabHomeFill />
    </div>
  );
}

function IconmonstrShoppingCart() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="iconmonstr-shopping-cart-2 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="iconmonstr-shopping-cart-2 1">
          <path d={svgPaths.p3de6f800} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TabBarItem1() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-start left-[calc(50%+0.5px)] opacity-40 pb-[8px] pt-[12px] px-[26px] top-0 translate-x-[-50%]" data-name="Tab Bar Item">
      <IconmonstrShoppingCart />
    </div>
  );
}

function Search() {
  return (
    <div className="absolute inset-[27.27%_66.67%_18.18%_26.93%]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="search" opacity="0.56">
          <path d={svgPaths.pc423380} fill="var(--fill-0, #1D1B20)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Icon3PtBell() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon_3pt/Bell">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon_3pt/Bell">
          <path d={svgPaths.p27eac080} fill="var(--fill-0, black)" id="bell" />
        </g>
      </svg>
    </div>
  );
}

function TabBarItem2() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-start left-[calc(50%+75.5px)] opacity-[0.32] pb-[8px] pt-[12px] px-[26px] top-0 translate-x-[-50%]" data-name="Tab Bar Item">
      <Icon3PtBell />
    </div>
  );
}

function Tabs() {
  return (
    <div className="absolute h-[44px] left-[-3px] overflow-clip right-[3px] top-[710px]" data-name="Tabs">
      <TabBarItem />
      <TabBarItem1 />
      <Search />
      <TabBarItem2 />
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute left-[305px] size-[54px] top-[707px]" data-name="menu">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
        <g id="menu">
          <rect fill="white" height="54" width="54" />
          <circle cx="27" cy="27" fill="var(--fill-0, #F37A20)" id="Ellipse 18" r="27" />
          <g id="action/home_24px"></g>
        </g>
      </svg>
    </div>
  );
}

function IconPerson() {
  return (
    <div className="absolute left-[319px] size-[24px] top-[722px]" data-name="Icon/Person">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon/Person">
          <path d={svgPaths.p3d834a00} fill="var(--fill-0, white)" id="person" />
        </g>
      </svg>
    </div>
  );
}

export default function EditProfile() {
  return (
    <div className="bg-white relative size-full" data-name="Edit Profile">
      <MaskGroup />
      <ComponentsMobileAppbarPrimary />
      <BarsStatusBarIPhoneLight />
      <ComponentsMobileAppbarSecondery />
      <FormElementsMobileInputFieldsActiveFilled />
      <div className="absolute left-[119px] size-[138px] top-[139px]">
        <img alt="" className="block max-w-none size-full" height="138" src={imgEllipse6} width="138" />
      </div>
      <div className="absolute left-[225px] size-[33px] top-[235px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
          <circle cx="16.5" cy="16.5" fill="var(--fill-0, #F37A20)" id="Ellipse 13" r="16.5" />
        </svg>
      </div>
      <ImageCamera24Px />
      <FormElementsMobileInputFieldsActiveFilled1 />
      <FormElementsMobileInputFieldsActiveFilled2 />
      <ButtonsMobileSolidTextSymbolTextSymbol />
      <Navbar />
      <Tabs />
      <Menu />
      <IconPerson />
      <div className="absolute left-[346px] size-[14px] top-[52px]" data-name="image 42">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage42} />
      </div>
    </div>
  );
}