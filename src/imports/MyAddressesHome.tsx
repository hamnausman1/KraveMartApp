import svgPaths from "./svg-jy8ih43eo5";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import imgImage43 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import { imgMain1 } from "./svg-twsyg";

function Group6() {
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

function Group7() {
  return (
    <div className="absolute contents inset-[-15.21%_-58.02%_73.97%_-7.26%]">
      <Group6 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-gradient-to-b from-[rgba(252,252,252,0.6)] inset-[0.02%_-0.16%_73.97%_-0.01%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.16px_0px] mask-size-[374.954px_811.834px] to-[rgba(255,255,255,0.6)]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function Group5() {
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

function Group8() {
  return (
    <div className="absolute contents inset-[66.22%_-0.06%_-0.03%_0.03%]">
      <Group5 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-[rgba(254,254,254,0.55)] bottom-0 left-[0.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-537.513px] mask-size-[374.954px_811.834px] right-[-0.02%] top-[66.22%]" style={{ maskImage: `url('${imgMain1}')` }} />
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
  return (
    <div className="absolute h-[88px] left-px top-0 w-[375px]" data-name="components/mobile/appbar/secondery">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[58px] not-italic text-[#37474f] text-[20px] text-nowrap top-[47.32px] whitespace-pre">My Addresses</p>
      <NavigationArrowBackward24Px />
    </div>
  );
}

function ContentAdd24Px() {
  return (
    <div className="absolute right-[16px] size-[24px] top-1/2 translate-y-[-50%]" data-name="content/add_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="content/add_24px">
          <path d={svgPaths.p298d3d00} fill="var(--fill-0, black)" id="icon/content/add_24px" />
        </g>
      </svg>
    </div>
  );
}

function ButtonsMobileSolidTextSymbolTextSymbol() {
  return (
    <div className="absolute inset-[77.83%_4.27%_16.26%_4.27%]" data-name="buttons/mobile/solid/text + symbol/text → symbol">
      <div className="absolute bg-[#ffd037] inset-0 rounded-[8px]" data-name="Rectangle" />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[164px] not-italic text-[16px] text-black text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">Add New Address</p>
      </div>
      <ContentAdd24Px />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.7%_18.37%_39.13%_71.14%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Group 93">
          <circle cx="18" cy="18" fill="var(--fill-0, #F37A20)" id="Ellipse 3" r="18" />
          <g id="image/edit_24px">
            <path clipRule="evenodd" d={svgPaths.pe78c1f0} fill="var(--fill-0, white)" fillRule="evenodd" id="icon/image/edit_24px" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[8.7%_2.33%_39.13%_87.17%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Group 94">
          <circle cx="18" cy="18" fill="var(--fill-0, #FF5552)" id="Ellipse 3" r="18" />
          <g id="action/delete_outline_24px">
            <path clipRule="evenodd" d={svgPaths.p1bea9500} fill="var(--fill-0, white)" fillRule="evenodd" id="icon/action/delete_outline_24px" />
            <mask height="16" id="mask0_8_469" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="12" x="12" y="10">
              <path clipRule="evenodd" d={svgPaths.p1bea9500} fill="var(--fill-0, white)" fillRule="evenodd" id="icon/action/delete_outline_24px_2" />
            </mask>
            <g mask="url(#mask0_8_469)"></g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function ListAddress() {
  return (
    <div className="absolute h-[69px] left-[16px] top-[121px] w-[343px]" data-name="list/address">
      <p className="absolute bottom-[65.22%] font-['Poppins:Medium',sans-serif] leading-[normal] left-0 not-italic right-[85.42%] text-[#37474f] text-[16px] text-nowrap top-0 tracking-[0.6px] whitespace-pre">Home</p>
      <Group />
      <Group1 />
      <div className="absolute bottom-[27.54%] font-['Poppins:Regular',sans-serif] leading-[normal] left-0 not-italic right-[36.73%] text-[#37474f] text-[14px] top-[37.68%]">
        <p className="mb-0">24-A, Shaheed-e-Millat Rd.</p>
        <p className="mb-0">&nbsp;</p>
        <p>&nbsp;</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-[98.55%]" data-name="Line">
        <div className="absolute bottom-0 left-[-0.15%] right-[-0.15%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344 1">
            <path d="M0.5 0.5H343.5" id="Line" stroke="var(--stroke-0, #E1E1E1)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[8.7%_18.37%_39.13%_71.14%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Group 93">
          <circle cx="18" cy="18" fill="var(--fill-0, #F37A20)" id="Ellipse 3" r="18" />
          <g id="image/edit_24px">
            <path clipRule="evenodd" d={svgPaths.pe78c1f0} fill="var(--fill-0, white)" fillRule="evenodd" id="icon/image/edit_24px" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[8.7%_2.33%_39.13%_87.17%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Group 94">
          <circle cx="18" cy="18" fill="var(--fill-0, #FF5552)" id="Ellipse 3" r="18" />
          <g id="action/delete_outline_24px">
            <path clipRule="evenodd" d={svgPaths.p1bea9500} fill="var(--fill-0, white)" fillRule="evenodd" id="icon/action/delete_outline_24px" />
            <mask height="16" id="mask0_8_469" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="12" x="12" y="10">
              <path clipRule="evenodd" d={svgPaths.p1bea9500} fill="var(--fill-0, white)" fillRule="evenodd" id="icon/action/delete_outline_24px_2" />
            </mask>
            <g mask="url(#mask0_8_469)"></g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function ListAddress1() {
  return (
    <div className="absolute h-[69px] left-[16px] top-[207px] w-[343px]" data-name="list/address">
      <p className="absolute bottom-[65.22%] font-['Poppins:Medium',sans-serif] leading-[normal] left-0 not-italic right-[87.46%] text-[#37474f] text-[16px] text-nowrap top-0 tracking-[0.6px] whitespace-pre">Work</p>
      <Group2 />
      <Group3 />
      <p className="absolute bottom-[27.54%] font-['Poppins:Regular',sans-serif] leading-[normal] left-0 not-italic right-[36.73%] text-[#37474f] text-[14px] top-[37.68%]">IBA Main Campus</p>
      <div className="absolute bottom-0 left-0 right-0 top-[98.55%]" data-name="Line">
        <div className="absolute bottom-0 left-[-0.15%] right-[-0.15%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344 1">
            <path d="M0.5 0.5H343.5" id="Line" stroke="var(--stroke-0, #E1E1E1)" strokeLinecap="round" />
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
    <div className="absolute h-[116px] left-0 top-[696px] w-[375px]" data-name="navbar">
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
    <div className="absolute h-[44px] left-0 overflow-clip right-0 top-[710px]" data-name="Tabs">
      <TabBarItem />
      <TabBarItem1 />
      <Search />
      <TabBarItem2 />
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute left-[307px] size-[54px] top-[707px]" data-name="menu">
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
    <div className="absolute left-[322px] size-[24px] top-[721px]" data-name="Icon/Person">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon/Person">
          <path d={svgPaths.p3d834a00} fill="var(--fill-0, white)" id="person" />
        </g>
      </svg>
    </div>
  );
}

export default function MyAddressesHome() {
  return (
    <div className="bg-white relative size-full" data-name="My Addresses home">
      <MaskGroup />
      <ComponentsMobileAppbarPrimary />
      <BarsStatusBarIPhoneLight />
      <ComponentsMobileAppbarSecondery />
      <ButtonsMobileSolidTextSymbolTextSymbol />
      <ListAddress />
      <ListAddress1 />
      <Navbar />
      <Tabs />
      <Menu />
      <IconPerson />
      <div className="absolute left-[347px] size-[14px] top-[55px]" data-name="image 43">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage43} />
      </div>
    </div>
  );
}