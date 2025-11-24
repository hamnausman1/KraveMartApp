import svgPaths from "./svg-kw6sld9u5g";
import imgImage28 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import imgImage1 from "figma:asset/29ed300ccff6824a03df80ebe2d191d2ea97bba5.png";
import imgAvatar from "figma:asset/3b7ec4e10df0427013cf256dfa2f75c0e12c1d81.png";
import { imgSurfaceColor } from "./svg-q3t8b";

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

function Group5() {
  return (
    <button className="absolute block cursor-pointer left-[20px] size-[47px] top-[56px]">
      <div className="absolute inset-[-10.64%_-14.89%_-19.15%_-14.89%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61 61">
          <g id="Group 100">
            <g filter="url(#filter0_d_8_17521)" id="Ellipse 1">
              <circle cx="30.5" cy="28.5" fill="var(--fill-0, white)" r="23.5" />
            </g>
            <g id="navigation/arrow_backward_24px">
              <path d={svgPaths.p15172780} fill="var(--fill-0, #37474F)" id="icon/navigation/arrow_backward_24px" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="61" id="filter0_d_8_17521" width="61" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="3.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_8_17521" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_8_17521" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </button>
  );
}

function ButtonsMobileSolidText() {
  return (
    <div className="absolute inset-[51.43%_4.27%_39.43%_4.27%]" data-name="buttons/mobile/solid/text">
      <div className="absolute bg-[#ffd037] inset-0 rounded-[8px]" data-name="Rectangle" />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[16px] text-black text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">View Order Details</p>
      </div>
    </div>
  );
}

function ButtonsMobileSolidText1() {
  return (
    <div className="absolute inset-[38.29%_4.27%_52.57%_4.27%]" data-name="buttons/mobile/solid/text">
      <div className="absolute bg-[#ffd037] inset-0 rounded-[8px]" data-name="Rectangle" />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[16px] text-black text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">View Delivery Details</p>
      </div>
    </div>
  );
}

function SurfaceColor() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10px_-16px] mask-size-[395px_545px]" data-name="↳ Surface Color" style={{ maskImage: `url('${imgSurfaceColor}')` }}>
      <div className="absolute bg-white inset-0 shadow-[0px_-4px_12px_0px_rgba(55,71,79,0.17)]" />
      <ButtonsMobileSolidText />
      <ButtonsMobileSolidText1 />
      <div className="absolute aspect-[222/227] left-[91.47%] right-[4.27%] top-[10px]" data-name="image 28">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage28} />
      </div>
    </div>
  );
}

function BottomSheetPill() {
  return (
    <div className="absolute h-[5px] left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-187.5px_-28px] mask-size-[395px_545px] top-[12px] translate-x-[-50%] w-[20px]" data-name="bottom-sheet-pill" style={{ maskImage: `url('${imgSurfaceColor}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 5">
        <g id="bottom-sheet-pill">
          <path d={svgPaths.p28085900} fill="var(--fill-0, #37474F)" fillOpacity="0.37" id="Line" />
        </g>
      </svg>
    </div>
  );
}

function BgBtSheet() {
  return (
    <div className="absolute inset-[56.77%_-0.27%_-21.43%_0.27%] overflow-clip" data-name="Bg/bt-sheet">
      <div className="absolute bg-neutral-50 inset-0 rounded-tl-[6px] rounded-tr-[6px] shadow-[0px_-6px_10px_0px_rgba(0,0,0,0.14),0px_-3px_5px_0px_rgba(25,170,248,0.2)]" data-name="Mask" />
      <SurfaceColor />
      <BottomSheetPill />
    </div>
  );
}

function IconActionLocationFull() {
  return (
    <div className="absolute inset-[66.63%_86.27%_29.19%_4.67%]" data-name="icon / action / location / full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 34">
        <g id="icon / action / location / full">
          <path clipRule="evenodd" d={svgPaths.p359abcc0} fill="var(--fill-0, #37474F)" fillRule="evenodd" id="icon/action/query_builder_24px" />
          <mask height="30" id="mask0_8_17535" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="30" x="2" y="2">
            <path clipRule="evenodd" d={svgPaths.p359abcc0} fill="var(--fill-0, white)" fillRule="evenodd" id="icon/action/query_builder_24px_2" />
          </mask>
          <g mask="url(#mask0_8_17535)"></g>
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[113.3%_84.4%_-18.47%_4.4%]">
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

function Group3() {
  return (
    <div className="absolute contents font-['Poppins:Regular',sans-serif] inset-[124.63%_4.4%_-27.46%_4.4%] leading-[normal] not-italic text-[#37474f] text-[15px] text-nowrap tracking-[0.6px] whitespace-pre">
      <p className="absolute inset-[124.63%_77.73%_-27.46%_4.4%]">Subtotal</p>
      <p className="absolute inset-[124.63%_4.4%_-27.46%_80.13%] text-right">BDT362</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents font-['Poppins:Regular',sans-serif] inset-[129.56%_4.4%_-32.39%_4.4%] leading-[normal] not-italic text-[#37474f] text-[15px] text-nowrap tracking-[0.6px] whitespace-pre">
      <p className="absolute inset-[129.56%_61.47%_-32.39%_4.4%]">Delivery Charge</p>
      <p className="absolute inset-[129.56%_4.4%_-32.39%_82.53%] text-right">BDT50</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents font-['Poppins:Medium',sans-serif] inset-[134.48%_4.4%_-37.32%_4.67%] leading-[normal] not-italic text-[#37474f] text-[15px] text-nowrap tracking-[0.6px] whitespace-pre">
      <p className="absolute inset-[134.48%_84.67%_-37.32%_4.67%]">Total</p>
      <p className="absolute inset-[134.48%_4.4%_-37.32%_81.2%] text-right">BDT412</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[74.14%_4.67%_25.74%_4%]">
      <div className="absolute inset-[-50%_-0.29%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 345 2">
          <g id="Group 97">
            <path d="M1 1H81" id="Line" stroke="var(--stroke-0, #FFD037)" strokeLinecap="round" strokeWidth="2" />
            <path d="M88.5 1H168.5" id="Line_2" stroke="var(--stroke-0, #FFD037)" strokeLinecap="round" strokeWidth="2" />
            <path d="M176 1H256" id="Line_3" stroke="var(--stroke-0, #FFD037)" strokeLinecap="round" strokeWidth="2" />
            <path d="M263.5 1H343.5" id="Line_4" stroke="var(--stroke-0, #37474F)" strokeLinecap="round" strokeOpacity="0.14" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function BgBtSheet1() {
  return (
    <div className="absolute contents inset-[56.77%_-0.27%_-51.6%_0.27%]" data-name="Bg/bt-sheet">
      <BgBtSheet />
      <IconActionLocationFull />
      <p className="absolute font-['Poppins:Regular',sans-serif] inset-[65.89%_41.2%_28.2%_17.73%] leading-[normal] not-italic text-[#37474f] text-[32px] text-nowrap tracking-[1.28px] whitespace-pre">{`< 10 mins`}</p>
      <p className="absolute font-['Poppins:Medium',sans-serif] inset-[61.08%_56.13%_35.96%_4.67%] leading-[normal] not-italic text-[#37474f] text-[16px] text-nowrap tracking-[0.6px] whitespace-pre">Estimated Arrival</p>
      <p className="absolute font-['Poppins:Medium',sans-serif] inset-[61.08%_4.13%_34.98%_76.13%] leading-[32px] not-italic text-[#f37a20] text-[17px] text-nowrap text-right tracking-[0.9775px] whitespace-pre">6:30 pm</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] inset-[76.11%_18.67%_20.94%_4.8%] leading-[normal] not-italic text-[#777777] text-[16px] text-nowrap tracking-[0.44px] whitespace-pre">We are delivering this order to you</p>
      <p className="absolute font-['Poppins:Medium',sans-serif] inset-[107.88%_56.13%_-10.84%_4.4%] leading-[normal] not-italic text-[#37474f] text-[16px] text-nowrap tracking-[0.6px] whitespace-pre">Delivery Location</p>
      <p className="absolute font-['Poppins:Medium',sans-serif] inset-[144.09%_59.07%_-47.04%_4.67%] leading-[normal] not-italic text-[#37474f] text-[16px] text-nowrap tracking-[0.6px] whitespace-pre">Payment Status</p>
      <Group />
      <p className="absolute font-['Poppins:Regular',sans-serif] inset-[113.42%_10.53%_-18.47%_19.87%] leading-[normal] not-italic text-[#37474f] text-[14px]">Floor 4, Wakil Tower, Ta 131 Gulshan Badda Link Road</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] inset-[148.77%_37.47%_-51.6%_4.67%] leading-[normal] not-italic text-[#37474f] text-[15px] text-nowrap tracking-[0.6px] whitespace-pre">Unpaid ( Cash on Delivery )</p>
      <Group3 />
      <Group2 />
      <Group1 />
      <div className="absolute inset-[122.04%_4.13%_-22.17%_4.4%]" data-name="Line Copy">
        <div className="absolute bottom-0 left-[-0.15%] right-[-0.15%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344 1">
            <path d="M0.5 0.5H343.5" id="Line" stroke="var(--stroke-0, #E1E1E1)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <Group4 />
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

function MapsPin24Px() {
  return (
    <div className="absolute left-[162px] size-[41px] top-[143px]" data-name="maps/pin_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 41">
        <g id="maps/pin_24px">
          <path clipRule="evenodd" d={svgPaths.p35ceb000} fill="var(--fill-0, #E90808)" fillRule="evenodd" id="icon/maps/pin_24px" />
        </g>
      </svg>
    </div>
  );
}

function MapsPin24Px1() {
  return (
    <div className="absolute h-[26px] left-[83px] top-[366px] w-[28px]" data-name="maps/pin_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 26">
        <g id="maps/pin_24px">
          <path clipRule="evenodd" d={svgPaths.p3ed5f500} fill="var(--fill-0, #FFD037)" fillRule="evenodd" id="icon/maps/pin_24px" />
        </g>
      </svg>
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
    <div className="absolute bg-[#ffd037] box-border content-stretch flex flex-col inset-[45.44%_2.4%_44.7%_76.27%] items-center justify-center overflow-clip rounded-[100px] shadow-[0px_4px_5px_5px_rgba(0,0,0,0.25)]" data-name="Content">
      <StateLayer />
    </div>
  );
}

export default function OrderProcessingCollapsed() {
  return (
    <div className="bg-white relative size-full" data-name="Order--Processing--Collapsed">
      <div className="absolute h-[812px] left-px top-[-159px] w-[375px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <BarsStatusBarIPhoneLight />
      <Group5 />
      <BgBtSheet1 />
      <BarsHomeIndicatorIPhoneLightPortrait />
      <MapsPin24Px />
      <MapsPin24Px1 />
      <div className="absolute h-[36px] left-[79px] top-[calc(50%-39px)] translate-y-[-50%] w-[33px]" data-name="Avatar">
        <img alt="" className="block max-w-none size-full" height="36" src={imgAvatar} width="33" />
      </div>
      <div className="absolute h-[68.09px] left-[80.54px] top-[204.62px] w-[105.432px]">
        <div className="absolute inset-[-2.94%_-1.9%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 73">
            <path d={svgPaths.p31a1e40} id="Vector 2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="4" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[21.835px] left-[79.25px] top-[272.77px] w-[4.32px]">
        <div className="absolute inset-[-9.16%_-46.31%_-9.16%_-46.3%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 26">
            <path d={svgPaths.p2cf87c80} id="Vector 3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="4" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[36.586px] left-[83.71px] top-[294.19px] w-[17.652px]">
        <div className="absolute inset-[-5.47%_-11.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 41">
            <path d={svgPaths.p1da57100} id="Vector 4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="4" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[38.755px] left-[101.21px] top-[330.94px] w-[16.031px]">
        <div className="absolute inset-[-5.16%_-12.48%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 43">
            <path d={svgPaths.p3f1a5400} id="Vector 5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="4" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[20.935px] left-[97.72px] top-[369.32px] w-[20.325px]">
        <div className="absolute inset-[-9.55%_-9.84%_-9.56%_-9.84%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
            <path d={svgPaths.p1b260d00} id="Vector 6" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="4" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[23.054px] left-[179.69px] top-[181.16px] w-[6.554px]">
        <div className="absolute inset-[-8.68%_-30.52%_-8.68%_-30.51%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 28">
            <path d={svgPaths.p308f13c0} id="Vector 7" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="4" />
          </svg>
        </div>
      </div>
      <Content />
    </div>
  );
}