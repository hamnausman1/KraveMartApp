import svgPaths from "./svg-edg8zgqzhf";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import imgImage34 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import { imgMain1 } from "./svg-9epae";

function Group6() {
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

function Group7() {
  return (
    <div className="absolute contents inset-[-16.34%_-58.02%_72.85%_-7.26%]">
      <Group6 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-gradient-to-b from-[rgba(252,252,252,0.6)] inset-[0.02%_-0.16%_73.97%_-0.01%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.159px_0px] mask-size-[373.954px_811.858px] to-[rgba(255,255,255,0.6)]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function Group5() {
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

function Group8() {
  return (
    <div className="absolute contents inset-[66.22%_-0.06%_-0.03%_0.03%]">
      <Group5 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-[rgba(254,254,254,0.55)] bottom-0 left-[0.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-537.53px] mask-size-[373.954px_811.858px] right-[-0.02%] top-[66.22%]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute bottom-0 contents left-[0.03%] right-[-0.02%] top-[0.02%]" data-name="Mask Group">
      <Group7 />
      <Group8 />
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 10">
        <g id="Battery">
          <rect height="8.6464" id="Border" opacity="0.35" rx="2.16667" stroke="var(--stroke-0, black)" width="20.9413" x="0.5" y="0.5" />
          <path d={svgPaths.p146eaa00} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="6.24179" id="Capacity" rx="1.33333" width="17.952" x="1.99467" y="1.70231" />
        </g>
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
          <path d={svgPaths.p200f31f0} fill="var(--fill-0, black)" id="Wifi" />
        </svg>
      </div>
      <div className="absolute inset-[40.15%_17.07%_35.61%_78.4%]" data-name="Cellular Connection">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 10">
          <path d={svgPaths.p3773b4f0} fill="var(--fill-0, black)" id="Cellular Connection" />
        </svg>
      </div>
      <TimeStyle />
    </div>
  );
}

function ComponentsMobileAppbarPrimary1() {
  return (
    <div className="absolute h-[88px] left-[21px] top-[-11px] w-[375px]" data-name="components/mobile/appbar/primary">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[16px] not-italic text-[#37474f] text-[20px] text-nowrap top-[calc(50%+7.5px)] whitespace-pre">App Settings</p>
    </div>
  );
}

function CommunicationChatBubbleOutline24Px() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="communication/chat_bubble_outline_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="communication/chat_bubble_outline_24px"></g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <CommunicationChatBubbleOutline24Px />
    </div>
  );
}

function Frame8() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap whitespace-pre">Enable Push Notifications</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex items-center left-[7px] overflow-clip top-[calc(50%-0.5px)] translate-y-[-50%]">
      <Frame9 />
      <Frame8 />
    </div>
  );
}

function ComponentsMobileMenuActive() {
  return (
    <div className="absolute h-[67px] left-0 top-[321px] w-[375px]" data-name="components/mobile/menu/active">
      <div className="absolute bg-white bottom-[1.49%] left-0 right-0 rounded-[8px] top-0" data-name="Rectangle" />
      <Frame3 />
      <div className="absolute bottom-[-1px] h-[2px] left-[0.27%] right-[-0.27%]" data-name="divider">
        <div className="absolute bottom-[-0.07%] left-[-0.13%] right-0 top-[-0.07%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 376 2">
            <path d={svgPaths.pcffcb00} id="divider" stroke="var(--stroke-0, #F0F0F0)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CommunicationChatBubbleOutline24Px1() {
  return (
    <div className="absolute left-[19px] size-[24px] top-[calc(50%-187px)] translate-y-[-50%]" data-name="communication/chat_bubble_outline_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="communication/chat_bubble_outline_24px">
          <path clipRule="evenodd" d={svgPaths.p262f4d00} fill="var(--fill-0, #FFD037)" fillRule="evenodd" id="icon/communication/chat_bubble_outline_24px" />
        </g>
      </svg>
    </div>
  );
}

function ImageEdit24Px() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="image/edit_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="image/edit_24px">
          <path clipRule="evenodd" d={svgPaths.p366f4500} fill="var(--fill-0, black)" fillRule="evenodd" id="icon/image/edit_24px" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <ImageEdit24Px />
    </div>
  );
}

function Frame11() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap whitespace-pre">Font Size</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex items-center left-[7px] overflow-clip top-[calc(50%-0.5px)] translate-y-[-50%]">
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function ComponentsMobileMenuActive1() {
  return (
    <div className="absolute h-[67px] left-px top-[121px] w-[375px]" data-name="components/mobile/menu/active">
      <div className="absolute bottom-[1.49%] left-0 right-0 rounded-[8px] top-0" data-name="Rectangle" />
      <Frame4 />
      <div className="absolute bottom-[-1px] h-[2px] left-[0.27%] right-[-0.27%]" data-name="divider">
        <div className="absolute bottom-[-0.07%] left-[-0.13%] right-0 top-[-0.07%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 376 2">
            <path d={svgPaths.pcffcb00} id="divider" stroke="var(--stroke-0, #F0F0F0)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] shrink-0" />;
}

function Frame13() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap whitespace-pre">Language</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex items-center left-[7px] overflow-clip top-[calc(50%-0.5px)] translate-y-[-50%]">
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function ComponentsMobileMenuActive2() {
  return (
    <div className="absolute h-[67px] left-0 top-[189px] w-[375px]" data-name="components/mobile/menu/active">
      <div className="absolute bg-white bottom-[1.49%] left-0 right-0 rounded-[8px] top-0" data-name="Rectangle" />
      <Frame5 />
      <div className="absolute bottom-[-1px] h-[2px] left-[0.27%] right-[-0.27%]" data-name="divider">
        <div className="absolute bottom-[-0.07%] left-[-0.13%] right-0 top-[-0.07%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 376 2">
            <path d={svgPaths.pcffcb00} id="divider" stroke="var(--stroke-0, #F0F0F0)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function NavigationArrowBackward24Px() {
  return (
    <div className="relative size-[24px]" data-name="navigation/arrow_backward_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="navigation/arrow_backward_24px">
          <path d={svgPaths.p6a58300} fill="var(--fill-0, #37474F)" id="icon/navigation/arrow_backward_24px" />
        </g>
      </svg>
    </div>
  );
}

function CommunicationMail24Px() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="communication/mail_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="communication/mail_24px"></g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <CommunicationMail24Px />
    </div>
  );
}

function Frame15() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap whitespace-pre">Enable Voice Over</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex items-center left-[7px] overflow-clip top-[calc(50%-0.5px)] translate-y-[-50%]">
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function ComponentsMobileMenuActive3() {
  return (
    <div className="absolute h-[67px] left-0 top-[388px] w-[375px]" data-name="components/mobile/menu/active">
      <div className="absolute bg-white bottom-[1.49%] left-0 right-0 rounded-[8px] top-0" data-name="Rectangle" />
      <Frame6 />
      <div className="absolute bottom-[-1px] h-[2px] left-[0.27%] right-[-0.27%]" data-name="divider">
        <div className="absolute bottom-[-0.07%] left-[-0.13%] right-0 top-[-0.07%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 376 2">
            <path d={svgPaths.pcffcb00} id="divider" stroke="var(--stroke-0, #F0F0F0)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ActionShoppingBasket24Px() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="action/shopping_basket_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="action/shopping_basket_24px"></g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <ActionShoppingBasket24Px />
    </div>
  );
}

function Frame17() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap whitespace-pre">Disable Chatbot</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex items-center left-[7px] overflow-clip top-[calc(50%-0.5px)] translate-y-[-50%]">
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function ComponentsMobileMenuActive4() {
  return (
    <div className="absolute h-[67px] left-0 top-[255px] w-[375px]" data-name="components/mobile/menu/active">
      <div className="absolute bg-white bottom-[1.49%] left-0 right-0 rounded-[8px] top-0" data-name="Rectangle" />
      <Frame7 />
      <div className="absolute bottom-[-1px] h-[2px] left-[0.27%] right-[-0.27%]" data-name="divider">
        <div className="absolute bottom-[-0.07%] left-[-0.13%] right-0 top-[-0.07%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 376 2">
            <path d={svgPaths.pcffcb00} id="divider" stroke="var(--stroke-0, #F0F0F0)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group4() {
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
    <div className="absolute h-[116px] left-0 top-[696.39px] w-[375px]" data-name="navbar">
      <Group4 />
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
    <div className="absolute box-border content-stretch flex gap-[10px] items-start left-[calc(50%-150px)] pb-[8px] pt-[12px] px-[26px] top-[2px] translate-x-[-50%]" data-name="Tab Bar Item">
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
    <div className="absolute box-border content-stretch flex gap-[10px] items-start left-1/2 opacity-40 pb-[8px] pt-[12px] px-[26px] top-0 translate-x-[-50%]" data-name="Tab Bar Item">
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
    <div className="absolute box-border content-stretch flex gap-[10px] items-start left-[calc(50%+75px)] opacity-[0.32] pb-[8px] pt-[12px] px-[26px] top-0 translate-x-[-50%]" data-name="Tab Bar Item">
      <Icon3PtBell />
    </div>
  );
}

function Search() {
  return (
    <div className="absolute inset-[35.47%_66.86%_18.1%_26.74%]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 21">
        <g id="search">
          <path d={svgPaths.p2c1aa400} fill="var(--fill-0, black)" fillOpacity="0.28" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Tabs() {
  return (
    <div className="absolute h-[44px] left-px overflow-clip right-[-1px] top-[710.39px]" data-name="Tabs">
      <TabBarItem />
      <TabBarItem1 />
      <TabBarItem2 />
      <Search />
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute left-[302px] size-[54px] top-[706.39px]" data-name="menu">
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

function Group9() {
  return (
    <div className="absolute contents left-0 top-[696.39px]">
      <Navbar />
      <Tabs />
      <Menu />
    </div>
  );
}

function IconPerson() {
  return (
    <div className="absolute h-[26px] left-[314px] top-[720.39px] w-[29px]" data-name="Icon/Person">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 26">
        <g id="Icon/Person">
          <path d={svgPaths.p1391dd00} fill="var(--fill-0, white)" id="person" />
        </g>
      </svg>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-0 top-[696.39px]">
      <Group9 />
      <IconPerson />
    </div>
  );
}

function Icon3PtBell1() {
  return (
    <div className="absolute left-[20px] size-[24px] top-[343px]" data-name="Icon_3pt/Bell">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon_3pt/Bell">
          <path d={svgPaths.p27eac080} fill="var(--fill-0, black)" id="bell" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Frame">
      <div className="bg-white h-[10px] shrink-0 w-px" data-name="AX Label" />
    </div>
  );
}

function Knob() {
  return <div className="bg-white h-[24px] rounded-[100px] shrink-0 w-[39px]" data-name="Knob" />;
}

function ToggleSwitch() {
  return (
    <div className="absolute bg-black box-border content-stretch flex h-[28px] items-center justify-between left-[295px] overflow-clip p-[2px] rounded-[100px] top-[276px] w-[63px]" data-name="Toggle - Switch">
      <Frame />
      <Knob />
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Frame">
      <div className="bg-white h-[10px] shrink-0 w-px" data-name="AX Label" />
    </div>
  );
}

function Knob1() {
  return <div className="bg-white h-[24px] rounded-[100px] shrink-0 w-[39px]" data-name="Knob" />;
}

function ToggleSwitch1() {
  return (
    <div className="absolute bg-black box-border content-stretch flex h-[28px] items-center justify-between left-[295px] overflow-clip p-[2px] rounded-[100px] top-[404px] w-[63px]" data-name="Toggle - Switch">
      <Frame1 />
      <Knob1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-center justify-center min-h-px min-w-px relative shrink-0" data-name="Frame">
      <div className="bg-white h-[10px] shrink-0 w-px" data-name="AX Label" />
    </div>
  );
}

function Knob2() {
  return <div className="bg-white h-[24px] rounded-[100px] shrink-0 w-[39px]" data-name="Knob" />;
}

function ToggleSwitch2() {
  return (
    <div className="absolute bg-black box-border content-stretch flex h-[28px] items-center justify-between left-[293px] overflow-clip p-[2px] rounded-[100px] top-[338px] w-[63px]" data-name="Toggle - Switch">
      <Frame2 />
      <Knob2 />
    </div>
  );
}

function Mic() {
  return (
    <div className="absolute h-[24px] left-[20px] top-[406px] w-[28px]" data-name="Mic">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 24">
        <g id="Mic">
          <rect height="24" stroke="var(--stroke-0, black)" width="28" />
          <path d={svgPaths.p2767ba00} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CommunicationChatBubbleOutline24Px2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="communication/chat_bubble_outline_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="communication/chat_bubble_outline_24px">
          <path clipRule="evenodd" d={svgPaths.p262f4d00} fill="var(--fill-0, black)" fillRule="evenodd" id="icon/communication/chat_bubble_outline_24px" />
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-center left-[9px] overflow-clip p-[10px] top-[265px]">
      <CommunicationChatBubbleOutline24Px2 />
    </div>
  );
}

function NavigationArrowBackward24Px1() {
  return (
    <div className="absolute left-[9px] size-[24px] top-[44px]" data-name="navigation/arrow_backward_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="navigation/arrow_backward_24px">
          <path d={svgPaths.p6a58300} fill="var(--fill-0, #37474F)" id="icon/navigation/arrow_backward_24px" />
        </g>
      </svg>
    </div>
  );
}

function Language() {
  return (
    <div className="absolute left-[18px] size-[24px] top-[210px]" data-name="language">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="language">
          <path d={svgPaths.p580740} fill="var(--fill-0, #1D1B20)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function ActionMinimize24Px() {
  return (
    <div className="absolute left-[255px] size-[14px] top-[calc(50%-251px)] translate-y-[-50%]" data-name="action/minimize_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="action/minimize_24px">
          <rect fill="#F37A20" height="14" width="14" />
          <path d={svgPaths.p1c69f680} fill="var(--fill-0, white)" id="icon/action/minimize_24px" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[245px] top-[137px]">
      <div className="absolute bg-[#f37a20] left-[245px] rounded-[7px] size-[35px] top-[137px]" />
      <ActionMinimize24Px />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[245px] top-[137px]">
      <Group />
    </div>
  );
}

function ContentAdd24Px() {
  return (
    <div className="absolute left-[343px] size-[14px] top-[calc(50%-253px)] translate-y-[-50%]" data-name="content/add_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="content/add_24px">
          <path d={svgPaths.p1777e200} fill="var(--fill-0, white)" id="icon/content/add_24px" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[331px] top-[137px]">
      <div className="absolute bg-[#ffd037] left-[331px] rounded-[7px] size-[35px] top-[137px]" />
      <ContentAdd24Px />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[331px] top-[137px]">
      <Group3 />
    </div>
  );
}

function ButtonsWebSolidTextSymbolSymbolText() {
  return (
    <div className="absolute contents inset-[16.87%_2.14%_78.82%_65.51%]" data-name="buttons/web/solid/text + symbol/symbol → text">
      <Group1 />
      <Group2 />
      <p className="absolute font-['Poppins:Medium',sans-serif] inset-[17.86%_13.1%_79.19%_77.01%] leading-[normal] not-italic text-[#37474f] text-[14px] text-center">100%</p>
    </div>
  );
}

export default function Settings() {
  return (
    <div className="bg-white relative size-full" data-name="Settings">
      <MaskGroup />
      <ComponentsMobileAppbarPrimary />
      <BarsStatusBarIPhoneLight />
      <ComponentsMobileAppbarPrimary1 />
      <ComponentsMobileMenuActive />
      <CommunicationChatBubbleOutline24Px1 />
      <ComponentsMobileMenuActive1 />
      <ComponentsMobileMenuActive2 />
      <div className="absolute flex items-center justify-center left-[335px] size-[24px] top-[209px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <NavigationArrowBackward24Px />
        </div>
      </div>
      <ComponentsMobileMenuActive3 />
      <ComponentsMobileMenuActive4 />
      <Group10 />
      <Icon3PtBell1 />
      <div className="absolute left-[137px] size-[16px] top-[146px]" data-name="image 34">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage34} />
      </div>
      <div className="absolute left-[145px] size-[16px] top-[215px]" data-name="image 35">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage34} />
      </div>
      <div className="absolute left-[186px] size-[16px] top-[277px]" data-name="image 36">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage34} />
      </div>
      <div className="absolute left-[249px] size-[16px] top-[343px]" data-name="image 37">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage34} />
      </div>
      <div className="absolute left-[203px] size-[16px] top-[411px]" data-name="image 38">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage34} />
      </div>
      <ToggleSwitch />
      <ToggleSwitch1 />
      <ToggleSwitch2 />
      <div className="absolute aspect-[222/227] left-[90.4%] right-[5.33%] top-[54px]" data-name="image 29">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage34} />
      </div>
      <Mic />
      <Frame18 />
      <NavigationArrowBackward24Px1 />
      <Language />
      <ButtonsWebSolidTextSymbolSymbolText />
    </div>
  );
}