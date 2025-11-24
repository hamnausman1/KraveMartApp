import svgPaths from "./svg-ug061n06bc";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import imgRectangle1 from "figma:asset/28a663eca39212b1e1b12d85e8666929b95b8fc1.png";
import imgRectangle2 from "figma:asset/6c6ccf246c01db80adf90998f8e44472345177ae.png";
import imgRectangle3 from "figma:asset/fbe8151066ebb6abb823c5c48f0fe2fe51fbb037.png";
import imgRectangle4 from "figma:asset/20a0e5f6f23f81f765e4102844c4a8cab30534a0.png";
import imgImage31 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import { imgMain1 } from "./svg-5a2v9";

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

function ActionSearch24Px() {
  return (
    <div className="absolute bottom-[15.38%] left-0 right-[88.46%] top-[23.08%]" data-name="action/search_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="action/search_24px">
          <path clipRule="evenodd" d={svgPaths.p308c8f70} fill="var(--fill-0, #37474F)" fillRule="evenodd" id="icon/action/search_24px" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[39px] left-[16px] overflow-clip top-[calc(50%-2.5px)] translate-y-[-50%] w-[208px]" data-name="Group">
      <ActionSearch24Px />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[36px] not-italic opacity-[0.87] text-[#ffd037] text-[12px] top-0 w-[196px]">Search</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[36px] not-italic text-[#37474f] text-[16px] text-nowrap top-[15px] whitespace-pre">Samyan|</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-0 overflow-clip">
      <div className="absolute bg-[#f0f1f2] bottom-[3.45%] left-0 right-0 rounded-tl-[8px] rounded-tr-[8px] top-0" data-name="Rectangle" />
      <div className="absolute bottom-0 left-[0.3%] right-[0.3%] top-[96.55%]" data-name="Line">
        <div className="absolute inset-[-5.77%_-0.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 307 2">
            <path d="M1 1H305.134" id="Line" stroke="var(--stroke-0, #FFD037)" strokeLinecap="square" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <Group />
    </div>
  );
}

function FormElementsMobileInputFieldsEnabledNormal() {
  return (
    <div className="absolute h-[52px] left-[54px] top-[55px] w-[306px]" data-name="form elements/mobile/input fields/enabled/normal">
      <Group1 />
    </div>
  );
}

function BarsHomeIndicatorIPhoneLightPortrait() {
  return (
    <div className="absolute inset-[98.89%_31.73%_-3.08%_32.53%]" data-name="Bars / Home Indicator / iPhone / Light - Portrait">
      <div className="absolute bg-black bottom-[12px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
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

function ButtonsWebSolidTextSymbolSymbolText() {
  return (
    <div className="absolute bg-[#ffd037] inset-[59.76%_4.52%_18.9%_71.81%] rounded-[7px]" data-name="buttons/web/solid/text + symbol/symbol → text">
      <ActionBag24Px />
      <p className="absolute capitalize font-['Poppins:Medium',sans-serif] leading-[normal] left-[40px] not-italic text-[12px] text-black text-nowrap top-[calc(50%-8.5px)] whitespace-pre">{`Add `}</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents font-['Poppins:Regular',sans-serif] inset-[18.29%_84.31%_57.93%_7.98%] leading-[normal] not-italic text-[14px] text-nowrap text-white whitespace-pre">
      <p className="absolute inset-[18.29%_84.31%_68.9%_8.24%]">20%</p>
      <p className="absolute inset-[29.27%_85.11%_57.93%_7.98%]">OFF</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[12.8%_81.38%_53.66%_3.99%]">
      <div className="absolute inset-[12.8%_81.38%_53.66%_3.99%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 55">
          <circle cx="27.5" cy="27.5" fill="var(--fill-0, #F37A20)" id="Ellipse 16" r="27.5" />
        </svg>
      </div>
      <Group2 />
    </div>
  );
}

function ListProductNormal() {
  return (
    <div className="h-[164px] relative shrink-0 w-[376px]" data-name="list/product/normal">
      <div className="absolute bg-white bottom-[1.22%] left-0 right-[0.27%] top-0" />
      <div className="absolute inset-[12.8%_64.89%_13.41%_4.52%] rounded-[9px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[9px] size-full" src={imgRectangle1} />
      </div>
      <div className="absolute bottom-0 left-[0.27%] right-0 top-[98.78%]" data-name="divider">
        <div className="absolute bottom-[-0.07%] left-[-0.13%] right-0 top-[-0.07%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 376 2">
            <path d={svgPaths.pcffcb00} id="divider" stroke="var(--stroke-0, #F0F0F0)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <p className="absolute bottom-1/2 font-['Poppins:Medium',sans-serif] leading-[normal] left-[39.63%] not-italic right-[6.38%] text-[#37474f] text-[16px] top-[16.46%] tracking-[0.6px]">Samyang Buldak Carbonara - 130g</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] absolute decoration-solid font-['Poppins:SemiBold',sans-serif] inset-[51.22%_52.66%_35.98%_39.89%] leading-[normal] line-through not-italic opacity-[0.54] text-[14px] text-[rgba(55,71,79,0.54)] text-nowrap whitespace-pre">540</p>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] inset-[65.24%_42.82%_16.46%_39.63%] leading-[normal] not-italic text-[#f37a20] text-[20px] text-nowrap whitespace-pre">Rs 432</p>
      <ButtonsWebSolidTextSymbolSymbolText />
      <Group3 />
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

function ButtonsWebSolidTextSymbolSymbolText1() {
  return (
    <div className="absolute bg-[#ffd037] inset-[59.76%_4.52%_18.9%_71.81%] rounded-[7px]" data-name="buttons/web/solid/text + symbol/symbol → text">
      <ActionBag24Px1 />
      <p className="absolute capitalize font-['Poppins:Medium',sans-serif] leading-[normal] left-[40px] not-italic text-[12px] text-nowrap text-white top-[calc(50%-8.5px)] whitespace-pre">
        <span className="text-black">Add</span>{" "}
      </p>
    </div>
  );
}

function ListProductNormal1() {
  return (
    <div className="h-[164px] relative shrink-0 w-[376px]" data-name="list/product/normal">
      <div className="absolute bg-white bottom-[1.22%] left-0 right-[0.27%] top-0" />
      <div className="absolute inset-[12.8%_64.89%_13.41%_4.52%] rounded-[9px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[9px] size-full" src={imgRectangle2} />
      </div>
      <div className="absolute bottom-0 left-[0.27%] right-0 top-[98.78%]" data-name="divider">
        <div className="absolute bottom-[-0.07%] left-[-0.13%] right-0 top-[-0.07%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 376 2">
            <path d={svgPaths.pcffcb00} id="divider" stroke="var(--stroke-0, #F0F0F0)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <p className="absolute bottom-1/2 font-['Poppins:Medium',sans-serif] leading-[normal] left-[39.63%] not-italic right-[6.38%] text-[#37474f] text-[16px] top-[16.46%] tracking-[0.6px]">Samyang Buldak Hot Chicken - 130g</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] absolute decoration-solid font-['Poppins:SemiBold',sans-serif] inset-[51.22%_60.11%_35.98%_39.89%] leading-[normal] not-italic text-[14px] text-[rgba(55,71,79,0.54)] text-nowrap whitespace-pre">&nbsp;</p>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] inset-[65.24%_42.29%_16.46%_39.63%] leading-[normal] not-italic text-[#f37a20] text-[20px] text-nowrap whitespace-pre">Rs 540</p>
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

function ButtonsWebSolidTextSymbolSymbolText2() {
  return (
    <div className="absolute bg-[#ffd037] inset-[59.76%_4.52%_18.9%_71.81%] rounded-[7px]" data-name="buttons/web/solid/text + symbol/symbol → text">
      <ActionBag24Px2 />
      <p className="absolute capitalize font-['Poppins:Medium',sans-serif] leading-[normal] left-[40px] not-italic text-[12px] text-black text-nowrap top-[calc(50%-8.5px)] whitespace-pre">{`Add `}</p>
    </div>
  );
}

function ListProductNormal2() {
  return (
    <div className="h-[164px] relative shrink-0 w-[376px]" data-name="list/product/normal">
      <div className="absolute bg-white bottom-[1.22%] left-0 right-[0.27%] top-0" />
      <div className="absolute inset-[12.8%_64.89%_13.41%_4.52%] rounded-[9px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[9px] size-full" src={imgRectangle3} />
      </div>
      <div className="absolute bottom-0 left-[0.27%] right-0 top-[98.78%]" data-name="divider">
        <div className="absolute bottom-[-0.07%] left-[-0.13%] right-0 top-[-0.07%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 376 2">
            <path d={svgPaths.pcffcb00} id="divider" stroke="var(--stroke-0, #F0F0F0)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <p className="absolute bottom-1/2 font-['Poppins:Medium',sans-serif] leading-[normal] left-[39.63%] not-italic right-[6.38%] text-[#37474f] text-[16px] top-[16.46%] tracking-[0.6px]">Samyang Buldak Cheese - 130g</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] absolute decoration-solid font-['Poppins:SemiBold',sans-serif] inset-[51.22%_60.11%_35.98%_39.89%] leading-[normal] not-italic text-[14px] text-[rgba(55,71,79,0.54)] text-nowrap whitespace-pre">&nbsp;</p>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] inset-[65.24%_42.29%_16.46%_39.63%] leading-[normal] not-italic text-[#f37a20] text-[20px] text-nowrap whitespace-pre">Rs 540</p>
      <ButtonsWebSolidTextSymbolSymbolText2 />
    </div>
  );
}

function ActionBag24Px3() {
  return (
    <div className="absolute left-[17px] size-[14px] top-[calc(50%+0.5px)] translate-y-[-50%]" data-name="action/bag_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="action/bag_24px ">
          <path d={svgPaths.p14bc6dd0} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinejoin="round" strokeWidth="0.35" />
        </g>
      </svg>
    </div>
  );
}

function ButtonsWebSolidTextSymbolSymbolText3() {
  return (
    <div className="absolute bg-[#ffd037] inset-[59.76%_4.52%_18.9%_71.81%] rounded-[7px]" data-name="buttons/web/solid/text + symbol/symbol → text">
      <ActionBag24Px3 />
      <p className="absolute capitalize font-['Poppins:Medium',sans-serif] leading-[normal] left-[40px] not-italic text-[12px] text-nowrap text-white top-[calc(50%-8.5px)] whitespace-pre">{`Add `}</p>
    </div>
  );
}

function ListProductNormal3() {
  return (
    <div className="h-[164px] relative shrink-0 w-[376px]" data-name="list/product/normal">
      <div className="absolute bg-white bottom-[1.22%] left-0 right-[0.27%] top-0" />
      <div className="absolute inset-[12.8%_64.89%_13.41%_4.52%] rounded-[9px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[9px] size-full" src={imgRectangle4} />
      </div>
      <div className="absolute bottom-0 left-[0.27%] right-0 top-[98.78%]" data-name="divider">
        <div className="absolute bottom-[-0.07%] left-[-0.13%] right-0 top-[-0.07%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 376 2">
            <path d={svgPaths.pcffcb00} id="divider" stroke="var(--stroke-0, #F0F0F0)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <p className="absolute bottom-1/2 font-['Poppins:Medium',sans-serif] leading-[normal] left-[39.63%] not-italic right-[6.38%] text-[#37474f] text-[16px] top-[16.46%] tracking-[0.6px]">Nestle Nido Full Cream Milk Powder Instant</p>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] inset-[65.24%_42.29%_16.46%_39.63%] leading-[normal] not-italic text-[#f37a20] text-[20px] text-nowrap whitespace-pre">Rs 540</p>
      <ButtonsWebSolidTextSymbolSymbolText3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3px] items-center left-[-1px] overflow-clip top-[228px]">
      <ListProductNormal />
      <ListProductNormal1 />
      <ListProductNormal2 />
      <ListProductNormal3 />
    </div>
  );
}

function Group5() {
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
    <div className="absolute h-[116px] left-px top-[704px] w-[375px]" data-name="navbar">
      <Group5 />
      <BarsHomeIndicatorIPhoneLightPortrait1 />
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
    <div className="absolute h-[44px] left-[2px] overflow-clip right-[-2px] top-[718px]" data-name="Tabs">
      <TabBarItem />
      <TabBarItem1 />
      <TabBarItem2 />
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute left-[89px] size-[54px] top-[717px]" data-name="menu">
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
    <div className="absolute inset-[90.15%_66.13%_6.9%_27.47%]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="search">
          <path d={svgPaths.pc423380} fill="var(--fill-0, white)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-px top-[704px]">
      <Navbar />
      <Tabs />
      <Menu />
      <Search />
    </div>
  );
}

function IconPerson() {
  return (
    <div className="absolute h-[26px] left-[315px] top-[728px] w-[29px]" data-name="Icon/Person">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 26">
        <g id="Icon/Person" opacity="0.28">
          <rect fill="white" height="26" width="29" />
          <path d={svgPaths.p1391dd00} fill="var(--fill-0, black)" id="person" />
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-px top-[704px]">
      <Group10 />
      <IconPerson />
    </div>
  );
}

function ContentFilterList24Px() {
  return (
    <div className="absolute right-[16px] size-[24px] top-[calc(50%-254px)] translate-y-[-50%]" data-name="content/filter_list_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="content/filter_list_24px">
          <path clipRule="evenodd" d={svgPaths.pa9ff670} fill="var(--fill-0, #37474F)" fillRule="evenodd" id="icon/content/filter_list_24px" />
        </g>
      </svg>
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
    <div className="absolute h-[88px] left-[-10px] top-[-11px] w-[375px]" data-name="components/mobile/appbar/secondery">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[58px] not-italic text-[#37474f] text-[16px] text-nowrap top-[47.32px] whitespace-pre">&nbsp;</p>
      <NavigationArrowBackward24Px />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#f0f1f2] box-border content-stretch flex gap-[10px] items-center left-[15px] overflow-clip px-[20px] py-[10px] rounded-[9px] top-[190px]">
      <div className="capitalize flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#37474f] text-[12px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">Hot</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[#f0f1f2] box-border content-stretch flex gap-[10px] items-center left-[114px] overflow-clip px-[20px] py-[10px] rounded-[9px] top-[190px]">
      <div className="capitalize flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#37474f] text-[12px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">Chicken</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-[#f0f1f2] box-border content-stretch flex gap-[10px] items-center left-[215px] overflow-clip px-[20px] py-[10px] rounded-[9px] top-[190px]">
      <div className="capitalize flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#37474f] text-[12px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">Buldak</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-[#f0f1f2] box-border content-stretch flex gap-[10px] items-center left-[316px] overflow-clip px-[20px] py-[10px] rounded-[9px] top-[190px]">
      <div className="capitalize flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#37474f] text-[12px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">Ramen</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[15px] top-[190px]">
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Mic() {
  return (
    <div className="absolute h-[24px] left-[18px] top-[74px] w-[28px]" data-name="Mic">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 24">
        <g id="Mic">
          <rect height="24" stroke="var(--stroke-0, black)" width="28" />
          <path d={svgPaths.p2767ba00} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

export default function SearchSearchResult() {
  return (
    <div className="bg-white relative size-full" data-name="Search--Search Result">
      <MaskGroup />
      <ComponentsMobileAppbarPrimary />
      <BarsStatusBarIPhoneLight />
      <FormElementsMobileInputFieldsEnabledNormal />
      <BarsHomeIndicatorIPhoneLightPortrait />
      <Frame />
      <div className="absolute left-[348px] size-[16px] top-[247px]" data-name="image 31">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage31} />
      </div>
      <div className="absolute left-[347px] size-[16px] top-[406px]" data-name="image 32">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage31} />
      </div>
      <div className="absolute left-[347px] size-[16px] top-[567px]" data-name="image 33">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage31} />
      </div>
      <Group11 />
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[16px] not-italic text-[#37474f] text-[20px] text-nowrap top-[137px] whitespace-pre">Search Result</p>
      <ContentFilterList24Px />
      <ComponentsMobileAppbarSecondery />
      <Group4 />
      <Mic />
    </div>
  );
}