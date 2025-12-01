import svgPaths from "./svg-ndyk6wo212";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import imgImage2 from "figma:asset/fa648c5523e71d3cada7cfbd9e1cfadd48c513b4.png";
import imgImage3 from "figma:asset/a620297fbf227a3ab6fe91eccab8903996bdf979.png";
import imgImage4 from "figma:asset/0ced866058738cecc5549cb918032a0367df51a0.png";
import imgImage5 from "figma:asset/a365cc32f85645ba97d1b9db104e9ea434d7e253.png";
import imgImage6 from "figma:asset/c8379383a4b6d3fb9358bd166ecf904c14f49ce3.png";
import imgImage7 from "figma:asset/8afa9ef9bcb8e9a0b4a903e549c27a862b8c7922.png";
import imgImage31 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import { imgMain1 } from "./svg-y8u2b";
import { useLanguage } from '../contexts/LanguageContext';

function Group1() {
  return (
    <div className="absolute contents h-[calc(1px*((var(--transform-inner-width)*0.15237344801425934)+(var(--transform-inner-height)*0.9883230328559875)))] left-[-65.03px] top-[-368.65px] w-[calc(1px*((var(--transform-inner-height)*0.15237344801425934)+(var(--transform-inner-width)*0.9883230328559875)))]">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.9883230261239031)+(var(--transform-inner-height)*0.15237349167983347)))] items-center justify-center left-[-27.23px] top-[-123.5px] w-[calc(1px*((var(--transform-inner-height)*0.9883230261239031)+(var(--transform-inner-width)*0.15237349167983347)))]" style={{ "--transform-inner-width": "248", "--transform-inner-height": "589" } as React.CSSProperties}>
        <div className="flex-none rotate-[261.236deg]">
          <div className="h-[588.878px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[27.34px_123.671px] mask-size-[374.954px_811.834px] opacity-80 relative w-[248.041px]" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[333.28%] left-[-725%] max-w-none top-[-109.86%] w-[1406.64%]" src={imgMain2} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.9883230261239031)+(var(--transform-inner-height)*0.15237349167983347)))] items-center justify-center left-[-65.03px] top-[-368.65px] w-[calc(1px*((var(--transform-inner-height)*0.9883230261239031)+(var(--transform-inner-width)*0.15237349167983347)))]" style={{ "--transform-inner-width": "248", "--transform-inner-height": "589" } as React.CSSProperties}>
        <div className="flex-none rotate-[261.236deg]">
          <div className="h-[588.878px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[65.135px_368.815px] mask-size-[374.954px_811.834px] opacity-80 relative w-[248.041px]" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[333.28%] left-[-866.5%] max-w-none top-[-110.7%] w-[1406.64%]" src={imgMain2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[-65.03px] top-[-368.65px]">
      <Group1 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-[rgba(252,252,252,0.6)] h-[211.203px] left-[-0.05px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.16px_0px] mask-size-[374.954px_811.834px] top-[0.17px] w-[375.655px]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents left-[0.11px] top-[0.17px]" data-name="Mask Group">
      <Group2 />
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

function ComponentsMobileAppbarPrimary1() {
  const { t } = useLanguage();
  
  return (
    <div className="absolute h-[88px] left-[33px] top-0 w-[375px]" data-name="components/mobile/appbar/primary">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[24px] not-italic text-[#37474f] text-[20px] text-nowrap top-[calc(50%+7.5px)] whitespace-pre">{t('allCategories')}</p>
    </div>
  );
}

function CardCategory() {
  const { t } = useLanguage();
  
  return (
    <div className="absolute h-[160px] left-[15px] top-[516px] w-[165px]" data-name="card/category">
      <div className="absolute bg-[#ffd037] inset-0 rounded-[9px] shadow-[0px_4px_88px_0px_rgba(0,0,0,0.05)]" />
      <div className="absolute inset-[5%_6.67%_25.63%_6.67%]" data-name="image 2">
        <img 
          alt="Breakfast" 
          className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full rounded-[4px]" 
          src="https://images.unsplash.com/photo-1579029746681-b88914be04be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2Zhc3QlMjBjZXJlYWwlMjBtaWxrfGVufDF8fHx8MTc2Mzk3MTEzOXww&ixlib=rb-4.1.0&q=80&w=400" 
        />
      </div>
      <p className="absolute bottom-[6.88%] font-['Poppins:Medium',sans-serif] leading-[normal] left-0 not-italic right-[0.61%] text-[#37474f] text-[13px] text-center top-[80.63%]">{t('breakfast')}</p>
    </div>
  );
}

function CardCategory1() {
  const { t } = useLanguage();
  
  return (
    <div className="absolute h-[160px] left-[195px] top-[318px] w-[165px]" data-name="card/category">
      <div className="absolute bg-[#ffd037] inset-0 rounded-[9px] shadow-[0px_4px_88px_0px_rgba(0,0,0,0.05)]" />
      <div className="absolute inset-[5%_6.67%_25.63%_6.67%]" data-name="image 2">
        <img 
          alt="Meat and Fish" 
          className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full rounded-[4px]" 
          src="https://images.unsplash.com/photo-1642517245891-74906b8d8873?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXclMjBtZWF0JTIwZmlzaHxlbnwxfHx8fDE3NjM5NzExMzl8MA&ixlib=rb-4.1.0&q=80&w=400" 
        />
      </div>
      <p className="absolute bottom-[6.88%] font-['Poppins:Medium',sans-serif] leading-[normal] left-0 not-italic right-[0.61%] text-[#37474f] text-[13px] text-center top-[80.63%]">{t('meatAndFish')}</p>
    </div>
  );
}

function CardCategory2() {
  const { t } = useLanguage();
  
  return (
    <div className="absolute h-[160px] left-[16px] top-[318px] w-[165px]" data-name="card/category">
      <div className="absolute bg-[#ffd037] inset-0 rounded-[9px] shadow-[0px_4px_88px_0px_rgba(0,0,0,0.05)]" />
      <div className="absolute inset-[16.25%_9.7%_21.88%_9.7%]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
      <p className="absolute bottom-[6.88%] font-['Poppins:Medium',sans-serif] leading-[normal] left-0 not-italic right-[0.61%] text-[#37474f] text-[13px] text-center top-[80.63%]">{t('cleaningAndLaundry')}</p>
    </div>
  );
}

function CardCategory3() {
  const { t } = useLanguage();
  
  return (
    <div className="absolute h-[160px] left-[196px] top-[516px] w-[165px]" data-name="card/category">
      <div className="absolute bg-[#ffd037] inset-0 rounded-[9px] shadow-[0px_4px_88px_0px_rgba(0,0,0,0.05)]" />
      <div className="absolute inset-[5%_6.67%_25.63%_6.67%]" data-name="image 2">
        <img 
          alt="Beverages" 
          className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full rounded-[4px]" 
          src="https://images.unsplash.com/photo-1739138056344-3c852f4efc28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXZlcmFnZXMlMjBqdWljZSUyMGJvdHRsZXN8ZW58MXx8fHwxNzYzOTcxMTQwfDA&ixlib=rb-4.1.0&q=80&w=400" 
        />
      </div>
      <p className="absolute bottom-[6.88%] font-['Poppins:Medium',sans-serif] leading-[normal] left-0 not-italic right-[0.61%] text-[#37474f] text-[13px] text-center top-[80.63%]">{t('beverages')}</p>
    </div>
  );
}

function CardCategory4() {
  const { t } = useLanguage();
  
  return (
    <div className="absolute h-[160px] left-[196px] top-[120px] w-[165px]" data-name="card/category">
      <div className="absolute bg-[#ffd037] inset-0 rounded-[9px] shadow-[0px_4px_88px_0px_rgba(0,0,0,0.05)]" />
      <div className="absolute inset-[5%_6.67%_25.63%_6.67%]" data-name="image 2">
        <img 
          alt="Snacks and Confectioneries" 
          className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full rounded-[4px]" 
          src="https://images.unsplash.com/photo-1748765968997-ba9bae9cfd7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbmFja3MlMjBjaGlwcyUyMGNvbmZlY3Rpb25lcnl8ZW58MXx8fHwxNzYzOTcxMTQwfDA&ixlib=rb-4.1.0&q=80&w=400" 
        />
      </div>
      <p className="absolute bottom-[6.88%] font-['Poppins:Medium',sans-serif] leading-[normal] left-0 not-italic right-[0.61%] text-[#37474f] text-[13px] text-center top-[80.63%]">{t('snacksConfectioneries')}</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="Icon">
          <path d={svgPaths.p3fab4980} fill="var(--fill-0, black)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center relative shrink-0 w-full" data-name="State-layer">
      <Icon />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute bg-[#ffd037] box-border content-stretch flex flex-col inset-[74.51%_2.4%_15.64%_76.27%] items-center justify-center overflow-clip rounded-[100px] shadow-[0px_4px_5px_5px_rgba(0,0,0,0.25)]" data-name="Content">
      <StateLayer />
    </div>
  );
}

function NavigationArrowBackward24Px() {
  return (
    <div className="absolute left-[15px] size-[24px] top-[55px]" data-name="navigation/arrow_backward_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="navigation/arrow_backward_24px">
          <path d={svgPaths.p6a58300} fill="var(--fill-0, #37474F)" id="icon/navigation/arrow_backward_24px" />
        </g>
      </svg>
    </div>
  );
}

function CardCategory5() {
  const { t } = useLanguage();
  
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[160px] left-[16px] top-[120px] w-[165px]" data-name="card/category">
      <div className="absolute bg-[#ffd037] inset-0 rounded-[9px] shadow-[0px_4px_88px_0px_rgba(0,0,0,0.05)]" />
      <div className="absolute inset-[5%_6.67%_25.63%_6.67%]" data-name="image 2">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[128.83%] left-0 max-w-none top-[-28.63%] w-full" src={imgImage7} />
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[128.83%] left-0 max-w-none top-[-28.63%] w-full" src={imgImage7} />
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[128.83%] left-0 max-w-none top-[-28.63%] w-full" src={imgImage7} />
          </div>
        </div>
      </div>
      <p className="absolute bottom-[6.88%] font-['Poppins:Medium',sans-serif] leading-[normal] left-0 not-italic right-[0.61%] text-[13px] text-black text-center top-[80.63%]">{t('fruits')}</p>
    </div>
  );
}

function Group() {
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
      <Group />
      <BarsHomeIndicatorIPhoneLightPortrait />
    </div>
  );
}

function IconTabHomeFill() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon_Tab/Home_Fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon_Tab/Home_Fill">
          <path clipRule="evenodd" d={svgPaths.pee438f0} fill="var(--fill-0, black)" fillRule="evenodd" id="home_fill" />
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

function IconPerson() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon/Person">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon/Person">
          <path d={svgPaths.p3d834a00} fill="var(--fill-0, black)" id="person" />
        </g>
      </svg>
    </div>
  );
}

function TabBarItem3() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-start left-[calc(50%+150.5px)] opacity-[0.24] pb-[8px] pt-[12px] px-[26px] top-0 translate-x-[-50%]" data-name="Tab Bar Item">
      <IconPerson />
    </div>
  );
}

function Tabs() {
  return (
    <div className="absolute h-[44px] left-0 overflow-clip right-0 top-[714px]" data-name="Tabs">
      <TabBarItem />
      <TabBarItem1 />
      <Search />
      <TabBarItem2 />
      <TabBarItem3 />
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute left-[15px] size-[54px] top-[711px]" data-name="menu">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
        <g id="menu">
          <rect fill="white" height="54" width="54" />
          <circle cx="27" cy="27" fill="var(--fill-0, #F37A20)" id="Ellipse 18" r="27" />
          <g id="action/home_24px">
            <path clipRule="evenodd" d={svgPaths.p35ff0100} fill="var(--fill-0, white)" fillRule="evenodd" id="icon/action/home_24px" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function Category() {
  const { language } = useLanguage();
  return (
    <div className="bg-white relative size-full" data-name="Category">
      <MaskGroup />
      <ComponentsMobileAppbarPrimary />
      <BarsStatusBarIPhoneLight />
      <ComponentsMobileAppbarPrimary1 />
      <CardCategory />
      <CardCategory1 />
      <CardCategory2 />
      <CardCategory3 />
      <CardCategory4 />
      <NavigationArrowBackward24Px />
      <CardCategory5 />
      <Navbar />
      <Tabs />
      <Navbar />
      <Tabs />
      <Menu />
      <div className="absolute left-[341px] size-[16px] top-[53px]" data-name="image 31">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage31} />
      </div>
    </div>
  );
}