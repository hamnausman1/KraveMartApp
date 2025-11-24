import svgPaths from "./svg-vhxv6d9ila";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import imgRectangle1 from "figma:asset/63a25816531ff80d90be2876c1dd71ec42c15207.png";
import imgRectangle2 from "figma:asset/976732cc8700a986b169e5fc726b621dbc00cfd3.png";
import imgRectangle3 from "figma:asset/692b0117404b06af64b0cfeef981346e03f367bd.png";
import imgRectangle4 from "figma:asset/062eeca10a802eee1c012aade3421573bbfd999b.png";
import imgImage32 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import { imgMain1 } from "./svg-f6hzs";

function Group2() {
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

function Group3() {
  return (
    <div className="absolute contents inset-[-15.21%_-58.02%_73.97%_-7.26%]">
      <Group2 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-gradient-to-b from-[rgba(252,252,252,0.6)] inset-[0.02%_-0.16%_73.97%_-0.01%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.16px_0px] mask-size-[374.954px_811.834px] to-[rgba(255,255,255,0.6)]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function Group1() {
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

function Group4() {
  return (
    <div className="absolute contents inset-[66.22%_-0.06%_-0.03%_0.03%]">
      <Group1 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-[rgba(254,254,254,0.55)] bottom-0 left-[0.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-537.513px] mask-size-[374.954px_811.834px] right-[-0.02%] top-[66.22%]" style={{ maskImage: `url('${imgMain1}')` }} />
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
      <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] left-0 not-italic right-[40.53%] text-[15px] text-black text-center top-[calc(50%-8.5px)] tracking-[-0.24px]">9:41</p>
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

function BarsHomeIndicatorIPhoneLightPortrait() {
  return (
    <div className="absolute bottom-0 left-[32.53%] right-[31.73%] top-[95.81%]" data-name="Bars / Home Indicator / iPhone / Light - Portrait">
      <div className="absolute bg-black bottom-[12px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
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
    <div className="absolute h-[88px] left-0 top-0 w-[375px]" data-name="components/mobile/appbar/secondery">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[58px] not-italic text-[#37474f] text-[20px] text-nowrap top-[47.32px] whitespace-pre">Fruits and Vegetables</p>
      <NavigationArrowBackward24Px />
    </div>
  );
}

function ActionBag24Px() {
  return (
    <div className="absolute left-[17px] size-[14px] top-[calc(50%+0.5px)] translate-y-[-50%]" data-name="action/bag_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="action/bag_24px ">
          <path d={svgPaths.p14bc6dd0} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="0.35" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return <div className="absolute h-[18px] left-[51px] top-[6px] w-[79px]" />;
}

function ButtonsWebSolidTextSymbolSymbolText() {
  return (
    <div className="absolute bg-[#ffd037] bottom-0 left-0 right-0 rounded-[7px] top-[88.05%]" data-name="buttons/web/solid/text + symbol/symbol → text">
      <ActionBag24Px />
      <Frame />
      <p className="absolute capitalize font-['Poppins:Medium',sans-serif] leading-[normal] not-italic right-[43px] text-[12px] text-black text-nowrap text-right top-[calc(50%-8.5px)] whitespace-pre">Add to Bag</p>
    </div>
  );
}

function CardProductNormal() {
  return (
    <div className="absolute h-[293px] left-[16px] top-[465px] w-[164px]" data-name="card/product/normal">
      <div className="absolute bg-[#f3f4f4] bottom-[53.92%] left-0 right-0 rounded-[9px] top-0" />
      <div className="absolute inset-[1.71%_15.24%_57%_14.63%] rounded-[9px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[9px] size-full" src={imgRectangle1} />
      </div>
      <div className="absolute bottom-[28.33%] font-['Poppins:Regular',sans-serif] leading-[normal] left-0 not-italic right-0 text-[14px] text-black top-[50.17%]">
        <p className="mb-0">Red Tomatoes - Timatar</p>
        <p>500g</p>
      </div>
      <p className="absolute bottom-[16.04%] font-['Poppins:Medium',sans-serif] leading-[normal] left-0 not-italic right-[70.12%] text-[#f37a20] text-[16px] text-nowrap top-[75.77%] tracking-[0.6px] whitespace-pre">Rs. 79</p>
      <ButtonsWebSolidTextSymbolSymbolText />
    </div>
  );
}

function ActionBag24Px1() {
  return (
    <div className="absolute left-[17px] size-[14px] top-[calc(50%+0.5px)] translate-y-[-50%]" data-name="action/bag_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="action/bag_24px ">
          <path d={svgPaths.p14bc6dd0} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="0.35" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return <div className="absolute h-[18px] left-[51px] top-[6px] w-[79px]" />;
}

function ButtonsWebSolidTextSymbolSymbolText1() {
  return (
    <div className="absolute bg-[#ffd037] bottom-0 left-0 right-0 rounded-[7px] top-[88.05%]" data-name="buttons/web/solid/text + symbol/symbol → text">
      <ActionBag24Px1 />
      <Frame1 />
      <p className="absolute capitalize font-['Poppins:Medium',sans-serif] leading-[normal] not-italic right-[43px] text-[12px] text-black text-nowrap text-right top-[calc(50%-8.5px)] whitespace-pre">Add to Bag</p>
    </div>
  );
}

function CardProductNormal1() {
  return (
    <div className="absolute h-[293px] left-[195px] top-[121px] w-[164px]" data-name="card/product/normal">
      <div className="absolute bg-[#f3f4f4] bottom-[53.92%] left-0 right-0 rounded-[9px] top-0" />
      <div className="absolute inset-[1.71%_15.24%_57%_14.63%] rounded-[9px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[9px] size-full" src={imgRectangle2} />
      </div>
      <div className="absolute bottom-[35.49%] font-['Poppins:Regular',sans-serif] leading-[normal] left-0 not-italic right-0 text-[14px] text-black top-[50.17%]">
        <p className="mb-0">Apple Golden - Seb</p>
        <p>1 kg</p>
      </div>
      <p className="absolute bottom-[16.04%] font-['Poppins:Medium',sans-serif] leading-[normal] left-0 not-italic right-[62.8%] text-[#f37a20] text-[16px] text-nowrap top-[75.77%] tracking-[0.6px] whitespace-pre">Rs. 499</p>
      <ButtonsWebSolidTextSymbolSymbolText1 />
    </div>
  );
}

function ActionBag24Px2() {
  return (
    <div className="absolute left-[17px] size-[14px] top-[calc(50%+0.5px)] translate-y-[-50%]" data-name="action/bag_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="action/bag_24px ">
          <path d={svgPaths.p14bc6dd0} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="0.35" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return <div className="absolute h-[18px] left-[51px] top-[6px] w-[79px]" />;
}

function ButtonsWebSolidTextSymbolSymbolText2() {
  return (
    <div className="absolute bg-[#ffd037] bottom-0 left-0 right-0 rounded-[7px] top-[88.05%]" data-name="buttons/web/solid/text + symbol/symbol → text">
      <ActionBag24Px2 />
      <Frame2 />
      <p className="absolute capitalize font-['Poppins:Medium',sans-serif] leading-[normal] not-italic right-[43px] text-[12px] text-black text-nowrap text-right top-[calc(50%-8.5px)] whitespace-pre">Add to Bag</p>
    </div>
  );
}

function CardProductNormal2() {
  return (
    <div className="absolute h-[293px] left-[195px] top-[465px] w-[164px]" data-name="card/product/normal">
      <div className="absolute bg-[#f3f4f4] bottom-[53.92%] left-0 right-0 rounded-[9px] top-0" />
      <div className="absolute inset-[1.71%_15.24%_57%_14.63%] rounded-[9px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[9px] size-full" src={imgRectangle3} />
      </div>
      <p className="absolute bottom-[42.66%] font-['Poppins:Regular',sans-serif] leading-[normal] left-0 not-italic right-0 text-[14px] text-black top-[50.17%]">Coriander - Dhaniya</p>
      <p className="absolute bottom-[16.04%] font-['Poppins:Medium',sans-serif] leading-[normal] left-0 not-italic right-[71.95%] text-[#f37a20] text-[16px] text-nowrap top-[75.77%] tracking-[0.6px] whitespace-pre">Rs. 10</p>
      <ButtonsWebSolidTextSymbolSymbolText2 />
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

function BarsHomeIndicatorIPhoneLightPortrait1() {
  return (
    <div className="absolute bottom-0 left-[32.53%] right-[31.73%] top-[72.36%]" data-name="Bars / Home Indicator / iPhone / Light - Portrait">
      <div className="absolute bg-black bottom-[12.07px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute h-[116px] left-0 top-[700px] w-[375px]" data-name="navbar">
      <Group />
      <BarsHomeIndicatorIPhoneLightPortrait1 />
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
    <div className="absolute h-[44px] left-0 overflow-clip right-0 top-[718px]" data-name="Tabs">
      <TabBarItem />
      <TabBarItem1 />
      <Search />
      <TabBarItem2 />
      <TabBarItem3 />
    </div>
  );
}

function NavigationArrowBackward24Px1() {
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

function ComponentsMobileAppbarSecondery1() {
  return (
    <div className="absolute h-[88px] left-0 top-0 w-[375px]" data-name="components/mobile/appbar/secondery">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[58px] not-italic text-[#37474f] text-[20px] text-nowrap top-[47.32px] whitespace-pre">&nbsp;</p>
      <NavigationArrowBackward24Px1 />
    </div>
  );
}

function ActionBag24Px3() {
  return (
    <div className="absolute left-[17px] size-[14px] top-[calc(50%+0.5px)] translate-y-[-50%]" data-name="action/bag_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="action/bag_24px ">
          <path d={svgPaths.p14bc6dd0} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="0.35" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return <div className="absolute h-[18px] left-[51px] top-[6px] w-[79px]" />;
}

function ButtonsWebSolidTextSymbolSymbolText3() {
  return (
    <div className="absolute bg-[#ffd037] bottom-0 left-0 right-0 rounded-[7px] top-[88.05%]" data-name="buttons/web/solid/text + symbol/symbol → text">
      <ActionBag24Px3 />
      <Frame3 />
      <p className="absolute capitalize font-['Poppins:Medium',sans-serif] leading-[normal] not-italic right-[43px] text-[12px] text-black text-nowrap text-right top-[calc(50%-8.5px)] whitespace-pre">Add to Cart</p>
    </div>
  );
}

function CardProductNormal3() {
  return (
    <div className="absolute h-[293px] left-[195px] top-[121px] w-[164px]" data-name="card/product/normal">
      <div className="absolute bg-[#f3f4f4] bottom-[53.92%] left-0 right-0 rounded-[9px] top-0" />
      <div className="absolute inset-[1.71%_15.24%_57%_14.63%] rounded-[9px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[9px] size-full" src={imgRectangle2} />
      </div>
      <div className="absolute bottom-[35.49%] font-['Poppins:Regular',sans-serif] leading-[normal] left-0 not-italic right-0 text-[14px] text-black top-[50.17%]">
        <p className="mb-0">Apple Golden - Seb</p>
        <p>1 kg</p>
      </div>
      <p className="absolute bottom-[16.04%] font-['Poppins:Medium',sans-serif] leading-[normal] left-0 not-italic right-[62.8%] text-[#f37a20] text-[16px] text-nowrap top-[75.77%] tracking-[0.6px] whitespace-pre">Rs. 499</p>
      <ButtonsWebSolidTextSymbolSymbolText3 />
    </div>
  );
}

function IconTabHomeFill1() {
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

function TabBarItem4() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-start left-[calc(50%-149.5px)] pb-[8px] pt-[12px] px-[26px] top-[2px] translate-x-[-50%]" data-name="Tab Bar Item">
      <IconTabHomeFill1 />
    </div>
  );
}

function IconmonstrShoppingCart1() {
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

function TabBarItem5() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-start left-[calc(50%+0.5px)] opacity-40 pb-[8px] pt-[12px] px-[26px] top-0 translate-x-[-50%]" data-name="Tab Bar Item">
      <IconmonstrShoppingCart1 />
    </div>
  );
}

function Search1() {
  return (
    <div className="absolute inset-[27.27%_66.67%_18.18%_26.93%] opacity-[0.56] overflow-clip" data-name="search">
      <div className="absolute inset-[12.5%]" data-name="icon">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(29, 27, 32, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p16b4a380} fill="var(--fill-0, #1D1B20)" id="icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon3PtBell1() {
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

function TabBarItem6() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-start left-[calc(50%+75.5px)] opacity-[0.32] pb-[8px] pt-[12px] px-[26px] top-0 translate-x-[-50%]" data-name="Tab Bar Item">
      <Icon3PtBell1 />
    </div>
  );
}

function IconPerson1() {
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

function TabBarItem7() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-start left-[calc(50%+150.5px)] opacity-[0.24] pb-[8px] pt-[12px] px-[26px] top-0 translate-x-[-50%]" data-name="Tab Bar Item">
      <IconPerson1 />
    </div>
  );
}

function Tabs1() {
  return (
    <div className="absolute h-[44px] left-0 overflow-clip right-0 top-[718px]" data-name="Tabs">
      <TabBarItem4 />
      <TabBarItem5 />
      <Search1 />
      <TabBarItem6 />
      <TabBarItem7 />
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute left-[13px] size-[54px] top-[715px]" data-name="menu">
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

function ActionBag24Px4() {
  return (
    <div className="absolute left-[17px] size-[14px] top-[calc(50%+0.5px)] translate-y-[-50%]" data-name="action/bag_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="action/bag_24px ">
          <path d={svgPaths.p14bc6dd0} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="0.35" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return <div className="absolute h-[18px] left-[51px] top-[6px] w-[79px]" />;
}

function ButtonsWebSolidTextSymbolSymbolText4() {
  return (
    <div className="absolute bg-[#ffd037] bottom-0 left-0 right-0 rounded-[7px] top-[88.05%]" data-name="buttons/web/solid/text + symbol/symbol → text">
      <ActionBag24Px4 />
      <Frame4 />
      <p className="absolute capitalize font-['Poppins:Medium',sans-serif] leading-[normal] not-italic right-[43px] text-[12px] text-black text-nowrap text-right top-[calc(50%-8.5px)] whitespace-pre">Add to Cart</p>
    </div>
  );
}

function CardProductNormal4() {
  return (
    <div className="absolute h-[293px] left-[16px] top-[121px] w-[164px]" data-name="card/product/normal">
      <div className="absolute bg-[#f3f4f4] bottom-[53.92%] left-0 right-0 rounded-[9px] top-0" />
      <div className="absolute bottom-[35.49%] font-['Poppins:Regular',sans-serif] leading-[normal] left-0 not-italic right-0 text-[14px] text-black top-[50.17%]">
        <p className="mb-0">Onion - Piyaz</p>
        <p>1 kg</p>
      </div>
      <p className="absolute bottom-[16.04%] font-['Poppins:Medium',sans-serif] leading-[normal] left-0 not-italic right-[65.24%] text-[#f37a20] text-[16px] text-nowrap top-[75.77%] tracking-[0.6px] whitespace-pre">Rs. 149</p>
      <ButtonsWebSolidTextSymbolSymbolText4 />
    </div>
  );
}

function CardProductNormal5() {
  return (
    <div className="absolute h-[242px] left-[16px] top-[130px] w-[164px]" data-name="card/product/normal">
      <div className="absolute bg-[#f3f4f4] bottom-[53.92%] left-0 right-0 rounded-[9px] top-0" />
      <div className="absolute inset-[1.71%_15.24%_57%_14.63%] rounded-[9px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[9px] size-full" src={imgRectangle4} />
      </div>
      <p className="absolute bottom-[42.66%] font-['Poppins:Regular',sans-serif] leading-[normal] left-0 not-italic right-0 text-[14px] text-black top-[50.17%]">&nbsp;</p>
      <p className="absolute bottom-[16.04%] font-['Poppins:Medium',sans-serif] leading-[normal] left-0 not-italic right-full text-[#f37a20] text-[16px] top-[75.77%] tracking-[0.6px]">&nbsp;</p>
      <div className="absolute aspect-[222/227] left-[79.88%] right-[10.37%] top-[213px]" data-name="image 32">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage32} />
      </div>
      <div className="absolute left-[139px] size-[16px] top-[554px]" data-name="image 32">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage32} />
      </div>
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
    <div className="absolute bg-[#ffd037] box-border content-stretch flex flex-col inset-[73.89%_4.27%_16.26%_74.4%] items-center justify-center overflow-clip rounded-[100px] shadow-[0px_4px_5px_5px_rgba(0,0,0,0.25)]" data-name="Content">
      <StateLayer />
    </div>
  );
}

export default function FruitsAndVegetablesHome() {
  return (
    <div className="bg-white relative size-full" data-name="Fruits and Vegetables home">
      <MaskGroup />
      <ComponentsMobileAppbarPrimary />
      <BarsStatusBarIPhoneLight />
      <BarsHomeIndicatorIPhoneLightPortrait />
      <ComponentsMobileAppbarSecondery />
      <CardProductNormal />
      <CardProductNormal1 />
      <CardProductNormal2 />
      <Navbar />
      <Tabs />
      <ComponentsMobileAppbarPrimary />
      <BarsStatusBarIPhoneLight />
      <BarsHomeIndicatorIPhoneLightPortrait />
      <ComponentsMobileAppbarSecondery1 />
      <CardProductNormal />
      <CardProductNormal3 />
      <CardProductNormal2 />
      <Navbar />
      <Tabs1 />
      <Menu />
      <CardProductNormal4 />
      <CardProductNormal5 />
      <Content />
      <div className="absolute left-[347px] size-[16px] top-[54px]" data-name="image 31">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage32} />
      </div>
      <div className="absolute left-[331px] size-[16px] top-[343px]" data-name="image 26">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage32} />
      </div>
    </div>
  );
}