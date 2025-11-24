import svgPaths from "./svg-2s8qzoadls";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import imgImage44 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import imgMap from "figma:asset/29ed300ccff6824a03df80ebe2d191d2ea97bba5.png";
import { imgMain1, imgSurfaceColor } from "./svg-c7x2m";

function Group10() {
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

function Group11() {
  return (
    <div className="absolute contents inset-[-15.21%_-58.02%_73.97%_-7.26%]">
      <Group10 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-gradient-to-b from-[rgba(252,252,252,0.6)] inset-[0.02%_-0.16%_73.97%_-0.01%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.16px_0px] mask-size-[374.954px_811.834px] to-[rgba(255,255,255,0.6)]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function Group9() {
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

function Group12() {
  return (
    <div className="absolute contents inset-[66.22%_-0.06%_-0.03%_0.03%]">
      <Group9 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-[rgba(254,254,254,0.55)] bottom-0 left-[0.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-537.513px] mask-size-[374.954px_811.834px] right-[-0.02%] top-[66.22%]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute bottom-0 contents left-[0.03%] right-[-0.02%] top-[0.02%]" data-name="Mask Group">
      <Group11 />
      <Group12 />
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

function ContentAdd24Px() {
  return (
    <div className="absolute right-[16px] size-[24px] top-1/2 translate-y-[-50%]" data-name="content/add_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="content/add_24px"></g>
      </svg>
    </div>
  );
}

function ButtonsMobileSolidTextSymbolTextSymbol() {
  return (
    <div className="absolute inset-[32.73%_4.27%_58.63%_4.27%]" data-name="buttons/mobile/solid/text + symbol/text → symbol">
      <div className="absolute bg-[#ffd037] inset-0 rounded-[8px]" data-name="Rectangle" />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[164px] not-italic text-[16px] text-black text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">Choose Current Location</p>
      </div>
      <ContentAdd24Px />
    </div>
  );
}

function SurfaceColor() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10px_-16px] mask-size-[395px_576px]" data-name="↳ Surface Color" style={{ maskImage: `url('${imgSurfaceColor}')` }}>
      <div className="absolute bg-white inset-0" />
      <ButtonsMobileSolidTextSymbolTextSymbol />
      <div className="absolute aspect-[222/227] left-[91.47%] right-[4.8%] top-[14px]" data-name="image 44">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage44} />
      </div>
    </div>
  );
}

function BottomSheetPill() {
  return (
    <div className="absolute h-[5px] left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-187.5px_-28px] mask-size-[395px_576px] top-[12px] translate-x-[-50%] w-[20px]" data-name="bottom-sheet-pill" style={{ maskImage: `url('${imgSurfaceColor}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 5">
        <g id="bottom-sheet-pill">
          <path d={svgPaths.p28085900} fill="var(--fill-0, #37474F)" fillOpacity="0.37" id="Line" />
        </g>
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

function Frame1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <ActionSearch24Px />
    </div>
  );
}

function Frame() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.87] relative shrink-0 text-[16px] text-[rgba(55,71,79,0.72)] text-nowrap">
        <p className="leading-[normal] whitespace-pre">IBA Main Campus</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute content-stretch flex items-center left-[6px] overflow-clip top-1/2 translate-y-[-50%]" data-name="Group">
      <Frame1 />
      <Frame />
    </div>
  );
}

function Group7Copy() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Group 7 Copy">
      <div className="absolute bg-[#f0f1f2] inset-0 rounded-[8px]" data-name="Rectangle" />
      <Group />
    </div>
  );
}

function FormElementsMobileInputFieldsActiveEmpty() {
  return (
    <div className="absolute h-[56px] left-[16px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26px_-55px] mask-size-[395px_576px] top-[39px] w-[343px]" data-name="form elements/mobile/input fields/active/empty" style={{ maskImage: `url('${imgSurfaceColor}')` }}>
      <Group7Copy />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[16px] top-[117px]">
      <div className="absolute bg-[#f0f1f2] h-[52px] left-[16px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-26px_-133px] mask-size-[395px_576px] rounded-[9px] top-[117px] w-[103px]" style={{ maskImage: `url('${imgSurfaceColor}')` }} />
      <div className="absolute capitalize flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[68px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-60px_-151px] mask-size-[395px_576px] not-italic text-[12px] text-[rgba(55,71,79,0.72)] text-center text-nowrap top-[144px] translate-x-[-50%] translate-y-[-50%]" style={{ maskImage: `url('${imgSurfaceColor}')` }}>
        <p className="leading-[normal] whitespace-pre">Home</p>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[135px] top-[117px]">
      <div className="absolute bg-[#f0f1f2] h-[52px] left-[135px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-145px_-133px] mask-size-[395px_576px] rounded-[9px] top-[117px] w-[103px]" style={{ maskImage: `url('${imgSurfaceColor}')` }}>
        <div aria-hidden="true" className="absolute border-2 border-[#ffd037] border-solid inset-0 pointer-events-none rounded-[9px]" />
      </div>
      <div className="absolute capitalize flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[186.5px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-181px_-151px] mask-size-[395px_576px] not-italic text-[#ffd037] text-[12px] text-center text-nowrap top-[144px] translate-x-[-50%] translate-y-[-50%]" style={{ maskImage: `url('${imgSurfaceColor}')` }}>
        <p className="leading-[normal] whitespace-pre">Work</p>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[254px] top-[117px]">
      <div className="absolute bg-[#f0f1f2] h-[52px] left-[254px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-264px_-133px] mask-size-[395px_576px] rounded-[9px] top-[117px] w-[103px]" style={{ maskImage: `url('${imgSurfaceColor}')` }} />
      <div className="absolute capitalize flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[304px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-297px_-151px] mask-size-[395px_576px] not-italic text-[12px] text-[rgba(55,71,79,0.72)] text-center text-nowrap top-[144px] translate-x-[-50%] translate-y-[-50%]" style={{ maskImage: `url('${imgSurfaceColor}')` }}>
        <p className="leading-[normal] whitespace-pre">Other</p>
      </div>
    </div>
  );
}

function BgBtSheet() {
  return (
    <div className="absolute bottom-[-28.2%] left-0 overflow-clip right-0 top-[59.73%]" data-name="Bg/bt-sheet">
      <div className="absolute bg-neutral-50 inset-0 rounded-tl-[6px] rounded-tr-[6px] shadow-[0px_-6px_10px_0px_rgba(0,0,0,0.14),0px_-3px_5px_0px_rgba(25,170,248,0.2)]" data-name="Mask" />
      <SurfaceColor />
      <BottomSheetPill />
      <FormElementsMobileInputFieldsActiveEmpty />
      <Group5 />
      <Group6 />
      <Group7 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[114.78%_84.67%_-19.95%_4.13%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g id="Group 3">
          <path clipRule="evenodd" d={svgPaths.p99cfc00} fill="var(--fill-0, #236CD9)" fillOpacity="0.121039" fillRule="evenodd" id="Oval" />
          <g id="icon / action / location / full">
            <path clipRule="evenodd" d={svgPaths.p28e25700} fill="var(--fill-0, #37474F)" fillRule="evenodd" id="icon/maps/place_24px" />
            <mask height="20" id="mask0_8_747" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="15" x="14" y="11">
              <path clipRule="evenodd" d={svgPaths.p28e25700} fill="var(--fill-0, white)" fillRule="evenodd" id="icon/maps/place_24px_2" />
            </mask>
            <g mask="url(#mask0_8_747)"></g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents font-['Poppins:Regular',sans-serif] inset-[126.11%_4.67%_-28.94%_4.13%] leading-[normal] not-italic text-[#37474f] text-[15px] text-nowrap tracking-[0.6px] whitespace-pre">
      <p className="absolute inset-[126.11%_78%_-28.94%_4.13%]">Subtotal</p>
      <p className="absolute inset-[126.11%_4.67%_-28.94%_79.87%] text-right">BDT362</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents font-['Poppins:Regular',sans-serif] inset-[131.03%_4.67%_-33.87%_4.13%] leading-[normal] not-italic text-[#37474f] text-[15px] text-nowrap tracking-[0.6px] whitespace-pre">
      <p className="absolute inset-[131.03%_61.73%_-33.87%_4.13%]">Delivery Charge</p>
      <p className="absolute inset-[131.03%_4.67%_-33.87%_82.27%] text-right">BDT50</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents font-['Poppins:Medium',sans-serif] inset-[135.96%_4.67%_-38.79%_4.4%] leading-[normal] not-italic text-[#37474f] text-[15px] text-nowrap tracking-[0.6px] whitespace-pre">
      <p className="absolute inset-[135.96%_84.93%_-38.79%_4.4%]">Total</p>
      <p className="absolute inset-[135.96%_4.67%_-38.79%_80.93%] text-right">BDT412</p>
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

function BarsHomeIndicatorIPhoneLightPortrait() {
  return (
    <div className="absolute bottom-0 left-[32.53%] right-[31.73%] top-[95.81%]" data-name="Bars / Home Indicator / iPhone / Light - Portrait">
      <div className="absolute bg-black bottom-[12px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute left-[21px] size-[47px] top-[61px]">
      <div className="absolute inset-[-10.64%_-14.89%_-19.15%_-14.89%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61 61">
          <g id="Group 124">
            <g filter="url(#filter0_d_8_742)" id="Ellipse 14">
              <circle cx="30.5" cy="28.5" fill="var(--fill-0, white)" r="23.5" />
            </g>
            <g id="navigation/arrow_backward_24px">
              <path d={svgPaths.p15172780} fill="var(--fill-0, #37474F)" id="icon/navigation/arrow_backward_24px" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="61" id="filter0_d_8_742" width="61" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="3.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_8_742" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_8_742" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function MapsPin24Px() {
  return (
    <div className="absolute left-[142px] size-[56px] top-[108px]" data-name="maps/pin_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g id="maps/pin_24px">
          <path clipRule="evenodd" d={svgPaths.p3d863200} fill="var(--fill-0, #E90808)" fillRule="evenodd" id="icon/maps/pin_24px" />
        </g>
      </svg>
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

function ButtonsMobileSolidTextSymbolTextSymbol1() {
  return (
    <div className="absolute inset-[89.9%_4%_4.19%_4.53%]" data-name="buttons/mobile/solid/text + symbol/text → symbol">
      <div className="absolute bg-[#ffd037] inset-0 rounded-[8px]" data-name="Rectangle" />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[164.5px] not-italic text-[16px] text-black text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">Save This Location</p>
      </div>
      <FileSave24Px />
    </div>
  );
}

export default function SelectLocationHome() {
  return (
    <div className="bg-white relative size-full" data-name="Select Location home">
      <MaskGroup />
      <div className="absolute bottom-[11.33%] left-[-4.27%] right-0 top-[-27.96%]" data-name="Map">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[102.63%] left-0 max-w-none top-[-1.31%] w-full" src={imgMap} />
        </div>
      </div>
      <ComponentsMobileAppbarPrimary />
      <BgBtSheet />
      <p className="absolute font-['Poppins:Medium',sans-serif] inset-[109.36%_56.4%_-12.32%_4.13%] leading-[normal] not-italic text-[#37474f] text-[16px] text-nowrap tracking-[0.6px] whitespace-pre">Delivery Location</p>
      <p className="absolute font-['Poppins:Medium',sans-serif] inset-[145.57%_59.33%_-48.52%_4.4%] leading-[normal] not-italic text-[#37474f] text-[16px] text-nowrap tracking-[0.6px] whitespace-pre">Payment Status</p>
      <Group1 />
      <p className="absolute font-['Poppins:Regular',sans-serif] inset-[114.9%_10.8%_-19.95%_19.6%] leading-[normal] not-italic text-[#37474f] text-[14px]">Floor 4, Wakil Tower, Ta 131 Gulshan Badda Link Road</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] inset-[150.25%_37.73%_-53.08%_4.4%] leading-[normal] not-italic text-[#37474f] text-[15px] text-nowrap tracking-[0.6px] whitespace-pre">Unpaid ( Cash on Delivery )</p>
      <Group4 />
      <Group3 />
      <Group2 />
      <div className="absolute inset-[123.52%_4.4%_-23.65%_4.13%]" data-name="Line Copy">
        <div className="absolute bottom-0 left-[-0.15%] right-[-0.15%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344 1">
            <path d="M0.5 0.5H343.5" id="Line" stroke="var(--stroke-0, #E1E1E1)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <BarsStatusBarIPhoneLight />
      <BarsHomeIndicatorIPhoneLightPortrait />
      <Group8 />
      <MapsPin24Px />
      <ButtonsMobileSolidTextSymbolTextSymbol1 />
    </div>
  );
}