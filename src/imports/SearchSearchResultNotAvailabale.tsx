import svgPaths from "./svg-ytrexcgxjq";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import { imgMain1 } from "./svg-iwxxr";

function Group3() {
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

function Group4() {
  return (
    <div className="absolute contents inset-[-15.21%_-58.02%_73.97%_-7.26%]">
      <Group3 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-gradient-to-b from-[rgba(252,252,252,0.6)] inset-[0.02%_-0.16%_73.97%_-0.01%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.16px_0px] mask-size-[374.954px_811.834px] to-[rgba(255,255,255,0.6)]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function Group2() {
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

function Group5() {
  return (
    <div className="absolute contents inset-[66.22%_-0.06%_-0.03%_0.03%]">
      <Group2 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-[rgba(254,254,254,0.55)] bottom-0 left-[0.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-537.513px] mask-size-[374.954px_811.834px] right-[-0.02%] top-[66.22%]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute bottom-0 contents left-[0.03%] right-[-0.02%] top-[0.02%]" data-name="Mask Group">
      <Group4 />
      <Group5 />
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

function ContentFilterList24Px() {
  return (
    <div className="absolute right-[14.42px] size-[24px] top-1/2 translate-y-[-50%]" data-name="content/filter_list_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="content/filter_list_24px"></g>
      </svg>
    </div>
  );
}

function ActionSearch24Px() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="action/search_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="action/search_24px">
          <path clipRule="evenodd" d={svgPaths.p308c8f70} fill="var(--fill-0, #37474F)" fillRule="evenodd" id="icon/action/search_24px" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <ActionSearch24Px />
    </div>
  );
}

function Frame1() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Poppins:Regular',sans-serif] items-start leading-[normal] not-italic overflow-clip px-[10px] py-0 relative shrink-0 text-nowrap whitespace-pre">
      <p className="relative shrink-0 text-[#ffd037] text-[12px]">Search</p>
      <p className="relative shrink-0 text-[#37474f] text-[16px]">Samyang Jjajang</p>
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
      <ContentFilterList24Px />
      <Frame2 />
    </div>
  );
}

function FormElementsMobileInputFieldsActiveFilled() {
  return (
    <div className="absolute h-[52px] left-[54px] top-[55px] w-[306px]" data-name="form elements/mobile/input fields/active/filled">
      <Group />
    </div>
  );
}

function BackgroundSimpleInject() {
  return (
    <div className="absolute inset-[27.27%_17.21%_48.17%_13.95%]" data-name="background simple  inject 77">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 259 200">
        <g id="background simple  inject 77">
          <path d={svgPaths.p2c921880} fill="var(--fill-0, #F37A20)" id="Vector" />
          <path d={svgPaths.p2c921880} fill="var(--fill-0, white)" id="Vector_2" opacity="0.9" />
        </g>
      </svg>
    </div>
  );
}

function ShadowInject() {
  return (
    <div className="absolute inset-[56.57%_10.48%_41.33%_11.55%]" data-name="Shadow  inject 77">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 293 18">
        <g id="Shadow  inject 77">
          <path d={svgPaths.p16794700} fill="var(--fill-0, #F5F5F5)" id="path  inject 77" />
        </g>
      </svg>
    </div>
  );
}

function CharacterInject() {
  return (
    <div className="absolute inset-[27.05%_59.77%_42.38%_20.23%]" data-name="Character  inject 77">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76 249">
        <g id="Character  inject 77">
          <path d={svgPaths.p1c821a00} fill="var(--fill-0, #F37A20)" id="Vector" />
          <path d={svgPaths.p11e6fc40} fill="var(--fill-0, #F37A20)" id="Vector_2" />
          <path d={svgPaths.pce64500} fill="var(--fill-0, #263238)" id="Vector_3" />
          <path d={svgPaths.p19b44880} fill="var(--fill-0, #F37A20)" id="Vector_4" />
          <path d={svgPaths.p3694bf00} fill="var(--fill-0, #F37A20)" id="Vector_5" />
          <path d={svgPaths.pd5876f0} fill="var(--fill-0, #263238)" id="Vector_6" />
          <path d={svgPaths.p31402c00} fill="var(--fill-0, #F37A20)" id="Vector_7" />
          <path d={svgPaths.p225a7c00} fill="var(--fill-0, black)" id="Vector_8" opacity="0.3" />
          <path d={svgPaths.p30e30b00} fill="var(--fill-0, #F37A20)" id="Vector_9" />
          <path d={svgPaths.p1bb84500} fill="var(--fill-0, #FFC3BD)" id="Vector_10" />
          <path d={svgPaths.p2c3f0b70} fill="var(--fill-0, #FFC3BD)" id="Vector_11" />
          <path d={svgPaths.p2ec4d700} fill="var(--fill-0, #FFC3BD)" id="Vector_12" />
          <path d={svgPaths.p1126cbf0} fill="var(--fill-0, #263238)" id="Vector_13" />
          <path d={svgPaths.p13d63b80} fill="var(--fill-0, #ED847E)" id="Vector_14" />
          <path d={svgPaths.p1f617600} fill="var(--fill-0, #FFC3BD)" id="Vector_15" />
          <path d={svgPaths.p249ea00} fill="var(--fill-0, #FFC3BD)" id="Vector_16" />
          <path d={svgPaths.p13729880} fill="var(--fill-0, #F37A20)" id="Vector_17" />
          <path d={svgPaths.p3c20fe80} fill="var(--fill-0, #F37A20)" id="Vector_18" />
          <path d={svgPaths.p2d5de5c0} fill="var(--fill-0, white)" id="Vector_19" />
          <path d={svgPaths.p8167c80} fill="var(--fill-0, #F37A20)" id="Vector_20" />
          <path d={svgPaths.p25522a00} fill="var(--fill-0, #FFC3BD)" id="Vector_21" />
          <path d={svgPaths.p144a8580} fill="var(--fill-0, #263238)" id="Vector_22" />
          <path d={svgPaths.p38b39c00} fill="var(--fill-0, #FFC3BD)" id="Vector_23" />
          <path d={svgPaths.p89d86b0} fill="var(--fill-0, #F37A20)" id="Vector_24" />
          <path d={svgPaths.p1938b000} fill="var(--fill-0, #263238)" id="Vector_25" />
          <path d={svgPaths.p1938b000} fill="var(--fill-0, white)" id="Vector_26" opacity="0.1" />
          <path d={svgPaths.p15545500} fill="var(--fill-0, #FFC3BD)" id="Vector_27" />
          <path d={svgPaths.p1881fa80} fill="var(--fill-0, #263238)" id="Vector_28" opacity="0.4" />
          <path d={svgPaths.p21687580} fill="var(--fill-0, #F37A20)" id="Vector_29" />
          <path d={svgPaths.p197c8ef0} fill="var(--fill-0, #263238)" id="Vector_30" />
          <path d={svgPaths.p197c8ef0} fill="var(--fill-0, white)" id="Vector_31" opacity="0.1" />
          <path d={svgPaths.p116abc00} fill="var(--fill-0, #263238)" id="Vector_32" opacity="0.4" />
          <path d={svgPaths.pd69e440} fill="var(--fill-0, #FFC3BD)" id="Vector_33" />
          <path d={svgPaths.p14eb7700} fill="var(--fill-0, #263238)" id="Vector_34" />
          <path d={svgPaths.p19d30b00} fill="var(--fill-0, #F37A20)" id="Vector_35" />
          <path d={svgPaths.p19d30b00} fill="var(--fill-0, white)" id="Vector_36" opacity="0.2" />
          <path d={svgPaths.p180e5000} fill="var(--fill-0, #F37A20)" id="Vector_37" />
          <path d={svgPaths.p18d6e700} fill="var(--fill-0, #FFC3BD)" id="Vector_38" />
          <path d={svgPaths.p1ca15c00} fill="var(--fill-0, #263238)" id="Vector_39" />
          <path d={svgPaths.p1ca15c00} fill="var(--fill-0, white)" id="Vector_40" opacity="0.1" />
          <path d={svgPaths.p3e680600} fill="var(--fill-0, #F37A20)" id="Vector_41" />
        </g>
      </svg>
    </div>
  );
}

function SmartphoneInject() {
  return (
    <div className="absolute inset-[29.2%_20.53%_42.98%_42.59%]" data-name="Smartphone  inject 77">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 139 226">
        <g id="Smartphone  inject 77">
          <path d={svgPaths.p6bf6600} fill="var(--fill-0, #263238)" id="Vector" />
          <path d={svgPaths.p20901800} fill="var(--fill-0, #F37A20)" id="Vector_2" />
          <path d={svgPaths.p5571b00} fill="var(--fill-0, #F37A20)" id="Vector_3" />
          <path d={svgPaths.pf088480} fill="var(--fill-0, #F37A20)" id="Vector_4" />
          <path d={svgPaths.p28fb1680} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p4a31e80} fill="var(--fill-0, #F37A20)" id="Vector_6" opacity="0.2" />
          <path d={svgPaths.p2fcefc00} fill="var(--fill-0, #F37A20)" id="Vector_7" />
          <path d={svgPaths.p1ab14e00} fill="var(--fill-0, white)" id="Vector_8" opacity="0.5" />
          <path d={svgPaths.p3aa9c7f0} fill="var(--fill-0, #F37A20)" id="Vector_9" />
          <path d={svgPaths.pff7aa40} fill="var(--fill-0, #F37A20)" id="Vector_10" />
          <path d={svgPaths.p17361b00} fill="var(--fill-0, #F37A20)" id="Vector_11" />
          <path d={svgPaths.p5620280} fill="var(--fill-0, #F37A20)" id="Vector_12" />
          <path d={svgPaths.p5c5f1f0} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p196c0b00} fill="var(--fill-0, #F37A20)" id="Vector_14" />
          <path d={svgPaths.p392db580} fill="var(--fill-0, #FF5552)" id="Vector_15" />
        </g>
      </svg>
    </div>
  );
}

function NavigationClose24Px() {
  return (
    <div className="absolute inset-[52.22%_37.07%_44.83%_56.53%]" data-name="navigation/close_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="navigation/close_24px">
          <path d={svgPaths.p3e370b00} fill="var(--fill-0, white)" id="icon/navigation/close_24px" />
        </g>
      </svg>
    </div>
  );
}

function AddToBagRafiki() {
  return (
    <div className="absolute contents inset-[27.05%_10.48%_41.33%_11.55%]" data-name="Add to Bag-rafiki 1">
      <BackgroundSimpleInject />
      <ShadowInject />
      <CharacterInject />
      <SmartphoneInject />
      <NavigationClose24Px />
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
  return (
    <div className="absolute h-[88px] left-[-9px] top-[-13px] w-[375px]" data-name="components/mobile/appbar/secondery">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[58px] not-italic text-[#37474f] text-[16px] text-nowrap top-[47.32px] whitespace-pre">&nbsp;</p>
      <NavigationArrowBackward24Px />
    </div>
  );
}

function Group1() {
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
      <Group1 />
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
    <div className="absolute h-[44px] left-px overflow-clip right-[-1px] top-[710px]" data-name="Tabs">
      <TabBarItem />
      <TabBarItem1 />
      <TabBarItem2 />
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute left-[88px] size-[54px] top-[709px]" data-name="menu">
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

function Search() {
  return (
    <div className="absolute inset-[89.16%_66.4%_7.88%_27.2%]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="search">
          <path d={svgPaths.pc423380} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-0 top-[696px]">
      <Navbar />
      <Tabs />
      <Menu />
      <Search />
    </div>
  );
}

function IconPerson() {
  return (
    <div className="absolute h-[26px] left-[314px] top-[720px] w-[29px]" data-name="Icon/Person">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 26">
        <g id="Icon/Person" opacity="0.28">
          <rect fill="white" height="26" width="29" />
          <path d={svgPaths.p1391dd00} fill="var(--fill-0, black)" id="person" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-0 top-[696px]">
      <Group6 />
      <IconPerson />
    </div>
  );
}

function Mic() {
  return (
    <div className="absolute h-[24px] left-[20px] top-[70px] w-[28px]" data-name="Mic">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 24">
        <g id="Mic">
          <rect height="24" stroke="var(--stroke-0, black)" width="28" />
          <path d={svgPaths.p2767ba00} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

export default function SearchSearchResultNotAvailabale() {
  return (
    <div className="bg-white relative size-full" data-name="Search--Search Result--Not Availabale">
      <MaskGroup />
      <ComponentsMobileAppbarPrimary />
      <BarsStatusBarIPhoneLight />
      <FormElementsMobileInputFieldsActiveFilled />
      <AddToBagRafiki />
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[188px] not-italic text-[#37474f] text-[16px] text-center top-[566px] tracking-[0.6px] translate-x-[-50%] w-[310px]">Oops! We can’t find your product!</p>
      <ComponentsMobileAppbarSecondery />
      <Group7 />
      <Mic />
    </div>
  );
}