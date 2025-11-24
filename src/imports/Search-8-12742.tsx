import svgPaths from "./svg-g42uohtda1";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import imgRectangle1 from "figma:asset/df059c4db56ccdbaad35832b84c8664ba0fbf463.png";
import imgRectangle2 from "figma:asset/dca4e7f70370220c8d926e466c7e9858a6ba4a5c.png";
import { imgMain1 } from "./svg-mxxjq";

function Group4() {
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

function Group5() {
  return (
    <div className="absolute contents inset-[-15.21%_-58.02%_73.97%_-7.26%]">
      <Group4 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-gradient-to-b from-[rgba(252,252,252,0.6)] inset-[0.02%_-0.16%_73.97%_-0.01%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.16px_0px] mask-size-[374.954px_811.834px] to-[rgba(255,255,255,0.6)]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function Group3() {
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

function Group6() {
  return (
    <div className="absolute contents inset-[66.22%_-0.06%_-0.03%_0.03%]">
      <Group3 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-[rgba(254,254,254,0.55)] bottom-0 left-[0.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-537.513px] mask-size-[374.954px_811.834px] right-[-0.02%] top-[66.22%]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute bottom-0 contents left-[0.03%] right-[-0.02%] top-[0.02%]" data-name="Mask Group">
      <Group5 />
      <Group6 />
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
    <div className="absolute h-[88px] left-[-14px] top-[-8px] w-[375px]" data-name="components/mobile/appbar/secondery">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[58px] not-italic text-[#37474f] text-[16px] text-nowrap top-[47.32px] whitespace-pre">&nbsp;</p>
      <NavigationArrowBackward24Px />
    </div>
  );
}

function ContentFilterList24Px() {
  return (
    <div className="absolute right-[17px] size-[24px] top-[calc(50%-1px)] translate-y-[-50%]" data-name="content/filter_list_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="content/filter_list_24px"></g>
      </svg>
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
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[36px] not-italic text-[#37474f] text-[16px] text-nowrap top-[15px] whitespace-pre">|</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-0 overflow-clip">
      <div className="absolute bg-[#f0f1f2] bottom-[3.45%] left-0 right-0 rounded-tl-[8px] rounded-tr-[8px] top-0" data-name="Rectangle" />
      <ContentFilterList24Px />
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

function ActionBag24Px() {
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

function Frame() {
  return <div className="absolute h-[18px] left-[51px] top-[6px] w-[79px]" />;
}

function ButtonsWebSolidTextSymbolSymbolText() {
  return (
    <div className="absolute bg-[#ffd037] bottom-0 left-0 right-0 rounded-[7px] top-[88.05%]" data-name="buttons/web/solid/text + symbol/symbol → text">
      <ActionBag24Px />
      <Frame />
      <p className="absolute capitalize font-['Poppins:Medium',sans-serif] leading-[normal] not-italic right-[43px] text-[12px] text-nowrap text-right text-white top-[calc(50%-8.5px)] whitespace-pre">Add to Bag</p>
    </div>
  );
}

function CardProductNormal() {
  return (
    <div className="absolute h-[293px] left-[16px] top-[510px] w-[164px]" data-name="card/product/normal">
      <div className="absolute bg-[#f3f4f4] bottom-[53.92%] left-0 right-0 rounded-[9px] top-0" />
      <div className="absolute inset-[1.71%_15.24%_57%_14.63%] rounded-[9px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[9px] size-full" src={imgRectangle1} />
      </div>
      <p className="absolute bottom-[35.49%] font-['Poppins:Regular',sans-serif] leading-[normal] left-0 not-italic right-0 text-[14px] text-black top-[50.17%]">Radhuni Chilli Powder - 50 gm</p>
      <p className="absolute bottom-[16.04%] font-['Poppins:Medium','Noto_Sans_Bengali:Medium',sans-serif] leading-[normal] left-0 right-[81.1%] text-[#f37a20] text-[16px] text-nowrap top-[75.77%] tracking-[0.6px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'wght' 500" }}>
        ৳25
      </p>
      <ButtonsWebSolidTextSymbolSymbolText />
    </div>
  );
}

function ActionBag24Px1() {
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

function Frame1() {
  return <div className="absolute h-[18px] left-[51px] top-[6px] w-[79px]" />;
}

function ButtonsWebSolidTextSymbolSymbolText1() {
  return (
    <div className="absolute bg-[#ffd037] bottom-0 left-0 right-0 rounded-[7px] top-[88.05%]" data-name="buttons/web/solid/text + symbol/symbol → text">
      <ActionBag24Px1 />
      <Frame1 />
      <p className="absolute capitalize font-['Poppins:Medium',sans-serif] leading-[normal] not-italic right-[43px] text-[12px] text-nowrap text-right text-white top-[calc(50%-8.5px)] whitespace-pre">Add to Bag</p>
    </div>
  );
}

function CardProductNormal1() {
  return (
    <div className="absolute h-[293px] left-[195px] top-[510px] w-[164px]" data-name="card/product/normal">
      <div className="absolute bg-[#f3f4f4] bottom-[53.92%] left-0 right-0 rounded-[9px] top-0" />
      <div className="absolute inset-[1.71%_15.24%_57%_14.63%] rounded-[9px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[9px] size-full" src={imgRectangle2} />
      </div>
      <p className="absolute bottom-[35.49%] font-['Poppins:Regular',sans-serif] leading-[normal] left-0 not-italic right-0 text-[14px] text-black top-[50.17%]">Radhuni Chicken Masala - 100 gm</p>
      <p className="absolute bottom-[16.04%] font-['Poppins:Medium','Noto_Sans_Bengali:Medium',sans-serif] leading-[normal] left-0 right-[80.49%] text-[#f37a20] text-[16px] text-nowrap top-[75.77%] tracking-[0.6px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'wght' 500" }}>
        ৳30
      </p>
      <ButtonsWebSolidTextSymbolSymbolText1 />
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

function HomeIndicator() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-[88.32%]" data-name="Home Indicator">
      <div className="absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function Return() {
  return (
    <div className="absolute inset-[58.42%_0.8%_27.15%_75.73%]" data-name="Return">
      <div className="absolute bottom-[-2.38%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 43">
          <g filter="url(#filter0_d_8_7437)" id="Rectangle">
            <path clipRule="evenodd" d={svgPaths.p181faf00} fill="var(--fill-0, #ADB3BC)" fillRule="evenodd" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="43" id="filter0_d_8_7437" width="88" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.537255 0 0 0 0 0.541176 0 0 0 0 0.552941 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_8_7437" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_8_7437" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <p className="absolute bottom-[23.81%] font-['SF_Pro_Text:Regular',sans-serif] leading-[21px] left-0 not-italic right-0 text-[16px] text-black text-center top-[26.19%] tracking-[-0.32px]">Go</p>
    </div>
  );
}

function Space() {
  return (
    <div className="absolute inset-[58.42%_25.87%_27.15%_25.6%]" data-name="Space">
      <div className="absolute bottom-[-2.38%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 182 43">
          <g filter="url(#filter0_d_8_7464)" id="Rectangle">
            <path clipRule="evenodd" d={svgPaths.p3a2242f0} fill="var(--fill-0, #FCFCFE)" fillRule="evenodd" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="43" id="filter0_d_8_7464" width="182" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.537255 0 0 0 0 0.541176 0 0 0 0 0.552941 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_8_7464" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_8_7464" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <p className="absolute bottom-[23.81%] font-['SF_Pro_Text:Regular',sans-serif] leading-[21px] left-0 not-italic right-0 text-[16px] text-black text-center top-[26.19%] tracking-[-0.32px]">space</p>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute inset-[58.42%_76%_27.15%_0.8%]" data-name="123">
      <div className="absolute bottom-[-2.38%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 87 43">
          <g filter="url(#filter0_d_8_7435)" id="Rectangle">
            <path clipRule="evenodd" d={svgPaths.p15ab3d00} fill="var(--fill-0, #ADB3BC)" fillRule="evenodd" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="43" id="filter0_d_8_7435" width="87" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.537255 0 0 0 0 0.541176 0 0 0 0 0.552941 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_8_7435" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_8_7435" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <p className="absolute bottom-[23.81%] font-['SF_Pro_Text:Regular',sans-serif] leading-[21px] left-0 not-italic right-0 text-[16px] text-black text-center top-[26.19%] tracking-[-0.32px]">123</p>
    </div>
  );
}

function KeyLight() {
  return (
    <div className="absolute inset-[39.86%_0.8%_45.7%_88%]" data-name="Key Light">
      <div className="absolute bottom-[-2.38%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 43">
          <g filter="url(#filter0_d_8_7433)" id="Rectangle">
            <path clipRule="evenodd" d={svgPaths.p1e57ee00} fill="var(--fill-0, #ADB3BC)" fillRule="evenodd" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="43" id="filter0_d_8_7433" width="42" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.537255 0 0 0 0 0.541176 0 0 0 0 0.552941 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_8_7433" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_8_7433" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <p className="absolute bottom-[23.81%] font-['SF_Pro_Text:Regular',sans-serif] leading-[21px] left-0 not-italic right-0 text-[16px] text-black text-center top-[26.19%] tracking-[-0.32px]"> </p>
    </div>
  );
}

function Delete() {
  return (
    <div className="absolute contents inset-[39.86%_0.8%_45.7%_88%]" data-name="Delete">
      <KeyLight />
      <div className="absolute inset-[44.21%_3.38%_49.95%_90.58%]" data-name="Delete Button">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 17">
          <path d={svgPaths.p23f55700} fill="var(--fill-0, black)" id="Delete Button" />
        </svg>
      </div>
    </div>
  );
}

function KeyLight1() {
  return (
    <div className="absolute inset-[39.86%_88%_45.7%_0.8%]" data-name="Key Light">
      <div className="absolute bg-[#fcfcfe] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[48.07%] not-italic right-[51.93%] text-[22.5px] text-black text-center text-nowrap top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-pre"> </p>
    </div>
  );
}

function Shift() {
  return (
    <div className="absolute contents inset-[39.86%_88%_45.7%_0.8%]" data-name="Shift">
      <KeyLight1 />
      <div className="absolute inset-[44.05%_91.06%_50.29%_3.91%]" data-name="Shift">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 17">
          <path d={svgPaths.p1a2ed980} fill="var(--fill-0, black)" id="Shift" />
        </svg>
      </div>
    </div>
  );
}

function M() {
  return (
    <div className="absolute inset-[39.86%_15.47%_45.7%_76%]" data-name="M">
      <div className="absolute bg-[#fcfcfe] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[18.75%] not-italic right-[18.75%] text-[22.5px] text-black text-center text-nowrap top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-pre">M</p>
    </div>
  );
}

function N() {
  return (
    <div className="absolute inset-[39.86%_25.6%_45.7%_65.87%]" data-name="N">
      <div className="absolute bg-[#fcfcfe] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-1/4 not-italic right-[21.88%] text-[22.5px] text-black text-center text-nowrap top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-pre">N</p>
    </div>
  );
}

function B() {
  return (
    <div className="absolute inset-[39.86%_35.73%_45.7%_55.73%]" data-name="B">
      <div className="absolute bg-[#fcfcfe] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[28.13%] not-italic right-1/4 text-[22.5px] text-black text-center text-nowrap top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-pre">B</p>
    </div>
  );
}

function V() {
  return (
    <div className="absolute inset-[39.86%_45.6%_45.7%_45.87%]" data-name="V">
      <div className="absolute bg-[#fcfcfe] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-1/4 not-italic right-1/4 text-[22.5px] text-black text-center text-nowrap top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-pre">V</p>
    </div>
  );
}

function C() {
  return (
    <div className="absolute inset-[39.86%_55.73%_45.7%_35.73%]" data-name="C">
      <div className="absolute bg-[#fcfcfe] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-1/4 not-italic right-[21.88%] text-[22.5px] text-black text-center text-nowrap top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-pre">C</p>
    </div>
  );
}

function X() {
  return (
    <div className="absolute inset-[39.86%_65.6%_45.7%_25.87%]" data-name="X">
      <div className="absolute bg-[#fcfcfe] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-1/4 not-italic right-1/4 text-[22.5px] text-black text-center text-nowrap top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-pre">X</p>
    </div>
  );
}

function Z() {
  return (
    <div className="absolute inset-[39.86%_75.73%_45.7%_15.73%]" data-name="Z">
      <div className="absolute bg-[#fcfcfe] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[28.13%] not-italic right-1/4 text-[22.5px] text-black text-center text-nowrap top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-pre">Z</p>
    </div>
  );
}

function L() {
  return (
    <div className="absolute inset-[21.31%_5.6%_64.26%_85.87%]" data-name="L">
      <div className="absolute bg-[#fcfcfe] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[31.25%] not-italic right-[28.13%] text-[22.5px] text-black text-center text-nowrap top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-pre">L</p>
    </div>
  );
}

function K() {
  return (
    <div className="absolute inset-[21.31%_15.73%_64.26%_75.73%]" data-name="K">
      <div className="absolute bg-[#fcfcfe] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[28.13%] not-italic right-1/4 text-[22.5px] text-black text-center text-nowrap top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-pre">K</p>
    </div>
  );
}

function J() {
  return (
    <div className="absolute inset-[21.31%_25.6%_64.26%_65.87%]" data-name="J">
      <div className="absolute bg-[#fcfcfe] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[31.25%] not-italic right-[28.13%] text-[22.5px] text-black text-center text-nowrap top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-pre">J</p>
    </div>
  );
}

function H() {
  return (
    <div className="absolute inset-[21.31%_35.73%_64.26%_55.73%]" data-name="H">
      <div className="absolute bg-[#fcfcfe] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-1/4 not-italic right-[21.88%] text-[22.5px] text-black text-center text-nowrap top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-pre">H</p>
    </div>
  );
}

function G() {
  return (
    <div className="absolute inset-[21.31%_45.6%_64.26%_45.87%]" data-name="G">
      <div className="absolute bg-[#fcfcfe] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-1/4 not-italic right-[21.88%] text-[22.5px] text-black text-center text-nowrap top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-pre">G</p>
    </div>
  );
}

function F() {
  return (
    <div className="absolute inset-[21.31%_55.73%_64.26%_35.73%]" data-name="F">
      <div className="absolute bg-[#fcfcfe] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[31.25%] not-italic right-[28.13%] text-[22.5px] text-black text-center text-nowrap top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-pre">F</p>
    </div>
  );
}

function D() {
  return (
    <div className="absolute inset-[21.31%_65.6%_64.26%_25.87%]" data-name="D">
      <div className="absolute bg-[#fcfcfe] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-1/4 not-italic right-[21.88%] text-[22.5px] text-black text-center text-nowrap top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-pre">D</p>
    </div>
  );
}

function S() {
  return (
    <div className="absolute inset-[21.31%_75.73%_64.26%_15.73%]" data-name="S">
      <div className="absolute bg-[#fcfcfe] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[28.13%] not-italic right-1/4 text-[22.5px] text-black text-center text-nowrap top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-pre">S</p>
    </div>
  );
}

function A() {
  return (
    <div className="absolute inset-[21.31%_85.6%_64.26%_5.87%]" data-name="A">
      <div className="absolute bg-[#fcfcfe] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-1/4 not-italic right-1/4 text-[22.5px] text-black text-center text-nowrap top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-pre">A</p>
    </div>
  );
}

function P() {
  return (
    <div className="absolute inset-[2.75%_0.8%_82.82%_90.67%]" data-name="P">
      <div className="absolute bg-[#fcfcfe] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[28.13%] not-italic right-1/4 text-[22.5px] text-black text-center text-nowrap top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-pre">P</p>
    </div>
  );
}

function O() {
  return (
    <div className="absolute inset-[2.75%_10.67%_82.82%_80.8%]" data-name="O">
      <div className="absolute bg-[#fcfcfe] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[21.88%] not-italic right-[21.88%] text-[22.5px] text-black text-center text-nowrap top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-pre">O</p>
    </div>
  );
}

function I() {
  return (
    <div className="absolute inset-[2.75%_20.8%_82.82%_70.67%]" data-name="I">
      <div className="absolute bg-[#fcfcfe] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[40.63%] not-italic right-[37.5%] text-[22.5px] text-black text-center text-nowrap top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-pre">I</p>
    </div>
  );
}

function U() {
  return (
    <div className="absolute inset-[2.75%_30.67%_82.82%_60.8%]" data-name="U">
      <div className="absolute bg-[#fcfcfe] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-1/4 not-italic right-[21.88%] text-[22.5px] text-black text-center text-nowrap top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-pre">U</p>
    </div>
  );
}

function Y() {
  return (
    <div className="absolute inset-[2.75%_40.8%_82.82%_50.67%]" data-name="Y">
      <div className="absolute bg-[#fcfcfe] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[28.13%] not-italic right-1/4 text-[22.5px] text-black text-center text-nowrap top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-pre">Y</p>
    </div>
  );
}

function T() {
  return (
    <div className="absolute inset-[2.75%_50.67%_82.82%_40.8%]" data-name="T">
      <div className="absolute bg-[#fcfcfe] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[28.13%] not-italic right-1/4 text-[22.5px] text-black text-center text-nowrap top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-pre">T</p>
    </div>
  );
}

function R() {
  return (
    <div className="absolute inset-[2.75%_60.8%_82.82%_30.67%]" data-name="R">
      <div className="absolute bg-[#fcfcfe] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[28.13%] not-italic right-1/4 text-[22.5px] text-black text-center text-nowrap top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-pre">R</p>
    </div>
  );
}

function E() {
  return (
    <div className="absolute inset-[2.75%_70.67%_82.82%_20.8%]" data-name="E">
      <div className="absolute bg-[#fcfcfe] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[28.13%] not-italic right-[28.13%] text-[22.5px] text-black text-center text-nowrap top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-pre">E</p>
    </div>
  );
}

function W() {
  return (
    <div className="absolute inset-[2.75%_80.8%_82.82%_10.67%]" data-name="W">
      <div className="absolute bg-[#fcfcfe] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[15.63%] not-italic right-[15.63%] text-[22.5px] text-black text-center text-nowrap top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-pre">W</p>
    </div>
  );
}

function Q() {
  return (
    <div className="absolute inset-[2.75%_90.67%_82.82%_0.8%]" data-name="Q">
      <div className="absolute bg-[#fcfcfe] inset-0 rounded-[4.6px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Rectangle" />
      <p className="absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[21.88%] not-italic right-[21.88%] text-[22.5px] text-black text-center text-nowrap top-[calc(50%-13px)] tracking-[-0.5547px] whitespace-pre">Q</p>
    </div>
  );
}

function Keys() {
  return (
    <div className="absolute contents inset-[2.75%_0.8%_8.25%_0.8%]" data-name="Keys">
      <div className="absolute inset-[82.82%_8%_8.59%_88%]" data-name="Dictation">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 25">
          <path d={svgPaths.p31cc6640} fill="var(--fill-0, #50555C)" id="Dictation" />
        </svg>
      </div>
      <div className="absolute inset-[82.47%_86.13%_8.25%_6.67%]" data-name="Emoji">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
          <path clipRule="evenodd" d={svgPaths.p2cb5cac0} fill="var(--fill-0, #50555C)" fillRule="evenodd" id="Emoji" />
        </svg>
      </div>
      <Return />
      <Space />
      <Component />
      <Delete />
      <Shift />
      <M />
      <N />
      <B />
      <V />
      <C />
      <X />
      <Z />
      <L />
      <K />
      <J />
      <H />
      <G />
      <F />
      <D />
      <S />
      <A />
      <P />
      <O />
      <I />
      <U />
      <Y />
      <T />
      <R />
      <E />
      <W />
      <Q />
    </div>
  );
}

function SystemKeyboardsIPhoneLightAlphabetic() {
  return (
    <div className="absolute bg-[#ccced3] bottom-0 left-0 right-0 top-[64.16%]" data-name="System / Keyboards / iPhone / Light - Alphabetic">
      <div className="absolute backdrop-blur-[54.366px] backdrop-filter bg-gray-300 inset-0" data-name="background" />
      <HomeIndicator />
      <Keys />
    </div>
  );
}

function ActionSearch24Px1() {
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

function Frame7() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <ActionSearch24Px1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap whitespace-pre">Rice</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex items-center left-[7px] overflow-clip top-[calc(50%-0.5px)] translate-y-[-50%]">
      <Frame7 />
      <Frame6 />
    </div>
  );
}

function ComponentsMobileMenuActive() {
  return (
    <div className="absolute h-[67px] left-px top-[184px] w-[375px]" data-name="components/mobile/menu/active">
      <div className="absolute bg-white bottom-[1.49%] left-0 right-0 rounded-[8px] top-0" data-name="Rectangle" />
      <Frame2 />
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

function ActionSearch24Px2() {
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

function Frame8() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <ActionSearch24Px2 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap whitespace-pre">Bread</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex items-center left-[7px] overflow-clip top-[calc(50%-0.5px)] translate-y-[-50%]">
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function ComponentsMobileMenuActive1() {
  return (
    <div className="absolute h-[67px] left-px top-[252px] w-[375px]" data-name="components/mobile/menu/active">
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

function ActionSearch24Px3() {
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

function Frame10() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <ActionSearch24Px3 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap whitespace-pre">Biscuits</p>
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

function ComponentsMobileMenuActive2() {
  return (
    <div className="absolute h-[67px] left-px top-[320px] w-[375px]" data-name="components/mobile/menu/active">
      <div className="absolute bg-white bottom-[1.49%] left-0 right-0 rounded-[8px] top-0" data-name="Rectangle" />
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

function ActionSearch24Px4() {
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

function Frame12() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <ActionSearch24Px4 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap whitespace-pre">Milk</p>
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

function ComponentsMobileMenuActive3() {
  return (
    <div className="absolute h-[67px] left-px top-[388px] w-[375px]" data-name="components/mobile/menu/active">
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

function Group2() {
  return (
    <div className="absolute contents left-px top-[137px]">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[16px] not-italic text-[#37474f] text-[20px] text-nowrap top-[137px] whitespace-pre">Popular Searches</p>
      <ComponentsMobileMenuActive />
      <ComponentsMobileMenuActive1 />
      <ComponentsMobileMenuActive2 />
      <ComponentsMobileMenuActive3 />
    </div>
  );
}

function Mic() {
  return (
    <div className="absolute h-[24px] left-[16px] top-[72px] w-[28px]" data-name="Mic">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 24">
        <g id="Mic">
          <rect height="24" stroke="var(--stroke-0, black)" width="28" />
          <path d={svgPaths.p2767ba00} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

export default function Search() {
  return (
    <div className="bg-white relative size-full" data-name="Search">
      <MaskGroup />
      <ComponentsMobileAppbarPrimary />
      <BarsStatusBarIPhoneLight />
      <ComponentsMobileAppbarSecondery />
      <FormElementsMobileInputFieldsEnabledNormal />
      <CardProductNormal />
      <CardProductNormal1 />
      <BarsHomeIndicatorIPhoneLightPortrait />
      <SystemKeyboardsIPhoneLightAlphabetic />
      <Group2 />
      <Mic />
    </div>
  );
}