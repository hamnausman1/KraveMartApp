import svgPaths from "./svg-p5i178k9tk";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import imgRectangle1 from "figma:asset/9475e6dd9841e4c17b641dc82421452e212b8d88.png";
import imgRectangle2 from "figma:asset/6dc11779b059054bc7b6348fba96db1d8b46bcd5.png";
import imgRectangle3 from "figma:asset/ed1251a213e082b06a0dd339205a93c2bdf6ba0e.png";
import imgImage29 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import { imgMain1 } from "./svg-fc035";

function Group10() {
  return (
    <div className="absolute contents h-[calc(1px*((var(--transform-inner-width)*0.1538396030664444)+(var(--transform-inner-height)*0.9885459542274475)))] left-[-65.03px] top-[-372.28px] w-[calc(1px*((var(--transform-inner-height)*0.15092059969902039)+(var(--transform-inner-width)*0.9880958795547485)))]">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.9885459459933698)+(var(--transform-inner-height)*0.15383964954431958)))] items-center justify-center left-[-27.23px] top-[-124.72px] w-[calc(1px*((var(--transform-inner-height)*0.9880958724590048)+(var(--transform-inner-width)*0.15092065258565132)))]" style={{ "--transform-inner-width": "250.421875", "--transform-inner-height": "589" } as React.CSSProperties}>
        <div className="flex-none rotate-[261.32deg] skew-x-[0.169deg]">
          <div className="h-[589.013px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[27.34px_124.889px] mask-size-[374.954px_819.834px] opacity-80 relative w-[250.428px]" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[333.28%] left-[-725%] max-w-none top-[-109.86%] w-[1406.64%]" src={imgMain2} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.9885459459933698)+(var(--transform-inner-height)*0.15383964954431958)))] items-center justify-center left-[-65.03px] top-[-372.28px] w-[calc(1px*((var(--transform-inner-height)*0.9880958724590048)+(var(--transform-inner-width)*0.15092065258565132)))]" style={{ "--transform-inner-width": "250.421875", "--transform-inner-height": "589" } as React.CSSProperties}>
        <div className="flex-none rotate-[261.32deg] skew-x-[0.169deg]">
          <div className="h-[589.013px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[65.135px_372.449px] mask-size-[374.954px_819.834px] opacity-80 relative w-[250.428px]" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[333.28%] left-[-866.5%] max-w-none top-[-110.7%] w-[1406.64%]" src={imgMain2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-[-65.03px] top-[-372.28px]">
      <Group10 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-gradient-to-b from-[rgba(252,252,252,0.6)] h-[213.284px] left-[-0.05px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.16px_0px] mask-size-[374.954px_819.834px] to-[rgba(255,255,255,0)] top-[0.17px] w-[375.655px]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[0.11px] top-[666.6px]">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1.0000002384185933)+(var(--transform-inner-height)*0.015180966763909454)))] items-center justify-center left-[0.11px] top-[666.6px] w-[calc(1px*((var(--transform-inner-height)*0.9998849630218558)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "147.96875", "--transform-inner-height": "375.140625" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] skew-x-[359.13deg]">
          <div className="h-[375.154px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-666.437px] mask-size-[374.954px_819.834px] relative w-[147.977px]" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
            <div className="absolute inset-0 opacity-75 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[415.76%] left-[-1201.44%] max-w-none top-[-144.82%] w-[1987.8%]" src={imgMain2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents left-[0.11px] top-[542.98px]">
      <Group9 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-[rgba(254,254,254,0.55)] h-[277.023px] left-[0.11px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-542.81px] mask-size-[374.954px_819.834px] top-[542.98px] w-[374.954px]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents left-[0.11px] top-[0.17px]" data-name="Mask Group">
      <Group11 />
      <Group12 />
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute inset-[39.39%_3.82%_34.85%_89.69%]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 15">
        <g id="Battery">
          <rect height="13.9858" id="Border" opacity="0.35" rx="2.16667" stroke="var(--stroke-0, black)" width="21" x="0.5" y="0.5" />
          <path d={svgPaths.p1b70b180} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="9.69672" id="Capacity" rx="1.33333" width="18" x="2" y="2.64456" />
        </g>
      </svg>
    </div>
  );
}

function TimeStyle() {
  return (
    <div className="absolute inset-[15.91%_80%_36.36%_5.6%]" data-name="Time Style">
      <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] left-0 not-italic right-0 text-[15px] text-black text-center top-[calc(50%-4.88px)] tracking-[-0.24px]">9:41</p>
    </div>
  );
}

function BarsStatusBarIPhoneLight() {
  return (
    <div className="absolute inset-[-0.61%_-145.87%_93.51%_145.87%]" data-name="Bars / Status Bar / iPhone / Light">
      <Battery />
      <div className="absolute inset-[39.39%_11.64%_35.61%_84.27%]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15">
          <path d={svgPaths.p25943700} fill="var(--fill-0, black)" id="Wifi" />
        </svg>
      </div>
      <div className="absolute inset-[40.15%_17.07%_35.61%_78.4%]" data-name="Cellular Connection">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 15">
          <path d={svgPaths.p3f7c7c00} fill="var(--fill-0, black)" id="Cellular Connection" />
        </svg>
      </div>
      <TimeStyle />
    </div>
  );
}

function BarsHomeIndicatorIPhoneLightPortrait() {
  return (
    <div className="absolute inset-[94.48%_31.73%_0.04%_32.53%]" data-name="Bars / Home Indicator / iPhone / Light - Portrait">
      <div className="absolute bg-black bottom-[11.96px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function NavigationArrowBackward24Px() {
  return (
    <button className="absolute block cursor-pointer left-[16px] size-[24px] top-[47.32px]" data-name="navigation/arrow_backward_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="navigation/arrow_backward_24px">
          <path d={svgPaths.p6a58300} fill="var(--fill-0, #37474F)" id="icon/navigation/arrow_backward_24px" />
        </g>
      </svg>
    </button>
  );
}

function ComponentsMobileAppbarSecondery() {
  return (
    <div className="absolute h-[88px] left-0 top-[9px] w-[375px]" data-name="components/mobile/appbar/secondery">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[58px] not-italic text-[#37474f] text-[20px] text-nowrap top-[47.32px] whitespace-pre">Order Details</p>
      <NavigationArrowBackward24Px />
    </div>
  );
}

function Group() {
  return <div className="absolute bottom-full contents left-0 right-full top-0" />;
}

function ListProductNormal() {
  return (
    <div className="absolute h-[164px] left-0 top-[163px] w-[376px]" data-name="list/product/normal">
      <div className="absolute bottom-[1.22%] left-0 right-[0.27%] top-0" />
      <div className="absolute inset-[12.8%_64.89%_13.41%_4.52%] rounded-[9px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9px]">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[9px] size-full" src={imgRectangle1} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[9px] size-full" src={imgRectangle2} />
        </div>
      </div>
      <div className="absolute bottom-0 left-[0.27%] right-0 top-[98.78%]" data-name="divider">
        <div className="absolute bottom-[-0.07%] left-[-0.13%] right-0 top-[-0.07%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 376 2">
            <path d={svgPaths.pcffcb00} id="divider" stroke="var(--stroke-0, #F0F0F0)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <p className="absolute bottom-1/2 font-['Poppins:Medium',sans-serif] leading-[normal] left-[39.63%] not-italic right-[6.38%] text-[#37474f] text-[16px] top-[16.46%] tracking-[0.6px]">Surf Excel Detergent Powder - 1kg</p>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] inset-[65.24%_42.29%_16.46%_39.63%] leading-[normal] not-italic text-[#f37a20] text-[20px] text-nowrap whitespace-pre">Rs 550</p>
      <Group />
    </div>
  );
}

function ListProductNormal1() {
  return (
    <div className="absolute h-[164px] left-0 top-[327px] w-[376px]" data-name="list/product/normal">
      <div className="absolute bottom-[1.22%] left-0 right-[0.27%] top-0" />
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
      <p className="absolute bottom-1/2 font-['Poppins:Medium',sans-serif] leading-[normal] left-[39.63%] not-italic right-[6.38%] text-[#37474f] text-[16px] top-[16.46%] tracking-[0.6px]">Nestle Nido Full Cream Milk Powder Instant</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] absolute decoration-solid font-['Poppins:SemiBold',sans-serif] inset-[51.22%_60.11%_35.98%_39.89%] leading-[normal] not-italic text-[14px] text-[rgba(55,71,79,0.54)] text-nowrap whitespace-pre">&nbsp;</p>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] inset-[65.24%_43.35%_16.46%_39.63%] leading-[normal] not-italic text-[#f37a20] text-[20px] text-nowrap whitespace-pre">Rs 702</p>
    </div>
  );
}

function ActionMinimize24Px() {
  return (
    <div className="absolute left-[250px] size-[14px] top-[calc(50%-131px)] translate-y-[-50%]" data-name="action/minimize_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="action/minimize_24px">
          <rect fill="#F37A20" height="14" width="14" />
          <path d={svgPaths.p1c69f680} fill="var(--fill-0, white)" id="icon/action/minimize_24px" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[239px] top-[261px]">
      <div className="absolute bg-[#f37a20] left-[239px] rounded-[7px] size-[35px] top-[261px]" />
      <ActionMinimize24Px />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[239px] top-[261px]">
      <Group1 />
    </div>
  );
}

function ContentAdd24Px() {
  return (
    <div className="absolute left-[336px] size-[14px] top-[calc(50%-131px)] translate-y-[-50%]" data-name="content/add_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="content/add_24px">
          <path d={svgPaths.p1777e200} fill="var(--fill-0, white)" id="icon/content/add_24px" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[325px] top-[261px]">
      <div className="absolute bg-[#ffd037] left-[325px] rounded-[7px] size-[35px] top-[261px]" />
      <ContentAdd24Px />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[325px] top-[261px]">
      <Group4 />
    </div>
  );
}

function ButtonsWebSolidTextSymbolSymbolText() {
  return (
    <div className="absolute contents inset-[31.83%_4%_63.9%_63.73%]" data-name="buttons/web/solid/text + symbol/symbol → text">
      <Group2 />
      <Group3 />
      <p className="absolute font-['Poppins:Medium',sans-serif] inset-[32.68%_19.47%_64.76%_79.2%] leading-[normal] not-italic text-[#37474f] text-[14px] text-center text-nowrap whitespace-pre">1</p>
    </div>
  );
}

function ActionMinimize24Px1() {
  return (
    <div className="absolute left-[250px] size-[14px] top-[calc(50%+33px)] translate-y-[-50%]" data-name="action/minimize_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="action/minimize_24px">
          <rect fill="#F37A20" height="14" width="14" />
          <path d={svgPaths.p1c69f680} fill="var(--fill-0, white)" id="icon/action/minimize_24px" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[239px] top-[425px]">
      <div className="absolute bg-[#f37a20] left-[239px] rounded-[7px] size-[35px] top-[425px]" />
      <ActionMinimize24Px1 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[239px] top-[425px]">
      <Group5 />
    </div>
  );
}

function ContentAdd24Px1() {
  return (
    <div className="absolute left-[336px] size-[14px] top-[calc(50%+33px)] translate-y-[-50%]" data-name="content/add_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="content/add_24px">
          <path d={svgPaths.p1777e200} fill="var(--fill-0, white)" id="icon/content/add_24px" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[325px] top-[425px]">
      <div className="absolute bg-[#ffd037] left-[325px] rounded-[7px] size-[35px] top-[425px]" />
      <ContentAdd24Px1 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[325px] top-[425px]">
      <Group7 />
    </div>
  );
}

function ButtonsWebSolidTextSymbolSymbolText1() {
  return (
    <div className="absolute contents inset-[51.83%_4%_43.9%_63.73%]" data-name="buttons/web/solid/text + symbol/symbol → text">
      <Group6 />
      <Group8 />
      <p className="absolute font-['Poppins:Medium',sans-serif] inset-[52.68%_19.47%_44.76%_79.2%] leading-[normal] not-italic text-[#37474f] text-[14px] text-center text-nowrap whitespace-pre">1</p>
    </div>
  );
}

function Battery1() {
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

function TimeStyle1() {
  return (
    <div className="absolute inset-[15.91%_80%_36.36%_5.6%]" data-name="Time Style">
      <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] left-0 not-italic right-0 text-[15px] text-black text-center top-[calc(50%-4.5px)] tracking-[-0.24px]">9:41</p>
    </div>
  );
}

function BarsStatusBarIPhoneLight1() {
  return (
    <div className="absolute inset-[0.12%_1.33%_94.51%_-1.33%]" data-name="Bars / Status Bar / iPhone / Light">
      <Battery1 />
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
      <TimeStyle1 />
    </div>
  );
}

export default function FullPackageDetails() {
  return (
    <div className="bg-white relative size-full" data-name="Full Package Details">
      <MaskGroup />
      <BarsStatusBarIPhoneLight />
      <BarsHomeIndicatorIPhoneLightPortrait />
      <ComponentsMobileAppbarSecondery />
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[17px] not-italic text-[#37474f] text-[16px] text-nowrap top-[121px] tracking-[0.6px] whitespace-pre">Products</p>
      <ListProductNormal />
      <ListProductNormal1 />
      <ButtonsWebSolidTextSymbolSymbolText />
      <ButtonsWebSolidTextSymbolSymbolText1 />
      <BarsStatusBarIPhoneLight1 />
      <div className="absolute aspect-[222/227] left-[91.2%] right-[4.53%] top-[60px]" data-name="image 29">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage29} />
      </div>
    </div>
  );
}