import svgPaths from "./svg-imn0karg43";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import imgImage31 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import { imgMain1 } from "./svg-c8p7f";

function Group2() {
  return (
    <div className="absolute contents inset-[-45.4%_-58.02%_73.97%_-17.34%]">
      <div className="absolute flex inset-[-15.21%_-58.02%_73.97%_-7.26%] items-center justify-center">
        <div className="flex-none h-[588.878px] rotate-[261.236deg] w-[248.041px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[27.34px_123.67px] mask-size-[374.954px_811.834px] opacity-80 relative size-full" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[333.28%] left-[-725%] max-w-none top-[-109.86%] w-[1406.64%]" src={imgMain2} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[-45.4%_-47.94%_104.16%_-17.34%] items-center justify-center">
        <div className="flex-none h-[588.878px] rotate-[261.236deg] w-[248.041px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[65.135px_368.815px] mask-size-[374.954px_811.834px] opacity-80 relative size-full" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[333.28%] left-[-866.5%] max-w-none top-[-110.7%] w-[1406.64%]" src={imgMain2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[-45.4%_-58.02%_73.97%_-17.34%]">
      <Group2 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-[rgba(252,252,252,0.6)] inset-[0.02%_-0.16%_73.97%_-0.01%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.16px_0px] mask-size-[374.954px_811.834px]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[81.29%_-0.06%_-0.03%_0.03%]">
      <div className="absolute flex inset-[81.29%_-0.06%_-0.03%_0.03%] items-center justify-center">
        <div className="flex-none h-[375.153px] rotate-[90deg] skew-x-[359.139deg] w-[146.533px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-659.934px] mask-size-[374.954px_811.834px] relative size-full" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
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
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-[rgba(254,254,254,0.55)] bottom-0 left-[0.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-537.514px] mask-size-[374.954px_811.834px] right-[-0.02%] top-[66.22%]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function NavigationArrowBackward24Px() {
  return (
    <div className="absolute left-0 size-[24px] top-1/2 translate-y-[-50%]" data-name="navigation/arrow_backward_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="navigation/arrow_backward_24px">
          <path d={svgPaths.p6a58300} fill="var(--fill-0, #37474F)" id="icon/navigation/arrow_backward_24px" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <button className="absolute block cursor-pointer inset-[5.67%_47.2%_90.52%_4.27%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-15.893px_-45.834px] mask-size-[374.954px_811.834px]" data-name="Group" style={{ maskImage: `url('${imgMain1}')` }}>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[42px] not-italic text-[#37474f] text-[24px] text-nowrap top-[calc(50%-15.5px)] whitespace-pre">&nbsp;</p>
      <NavigationArrowBackward24Px />
    </button>
  );
}

function MaskGroup() {
  return (
    <div className="absolute bottom-0 contents left-[0.03%] right-[-0.02%] top-[0.02%]" data-name="Mask Group">
      <Group3 />
      <Group4 />
      <Group />
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

function Group7Copy() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Group 7 Copy">
      <div className="absolute bg-[#f0f1f2] bottom-0 left-0 right-[82.93%] rounded-[8px] top-0" data-name="Rectangle" />
      <div className="absolute bg-[#f0f1f2] bottom-0 left-[20.73%] right-[62.2%] rounded-[8px] top-0" data-name="Rectangle" />
      <div className="absolute bg-[#f0f1f2] bottom-0 left-[41.46%] right-[41.46%] rounded-[8px] top-0" data-name="Rectangle" />
      <div className="absolute bg-[#f0f1f2] bottom-0 left-[62.2%] right-[20.73%] rounded-[8px] top-0" data-name="Rectangle" />
      <div className="absolute bg-[#f0f1f2] bottom-0 left-[82.93%] right-0 rounded-[8px] top-0" data-name="Rectangle" />
    </div>
  );
}

function FormElementsMobileOtpCodeActiveEmpty() {
  return (
    <div className="absolute inset-[70.57%_6.4%_22.54%_6.13%]" data-name="form elements/mobile/OTP Code/active/empty">
      <Group7Copy />
    </div>
  );
}

function NavigationArrowForward24Px() {
  return (
    <div className="absolute right-[16px] size-[24px] top-1/2 translate-y-[-50%]" data-name="navigation/arrow_forward_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="navigation/arrow_forward_24px">
          <path d={svgPaths.p1ee0b380} fill="var(--fill-0, black)" id="icon/navigation/arrow_forward_24px" />
        </g>
      </svg>
    </div>
  );
}

function ButtonsMobileSolidTextSymbolTextSymbol() {
  return (
    <div className="absolute inset-[89.9%_4%_4.19%_4.53%]" data-name="buttons/mobile/solid/text + symbol/text → symbol">
      <div className="absolute bg-[#ffd037] inset-0 rounded-[8px]" data-name="Rectangle" />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[164px] not-italic text-[16px] text-black text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">Next</p>
      </div>
      <NavigationArrowForward24Px />
    </div>
  );
}

function UndrawPersonalizationTriu() {
  return (
    <div className="absolute inset-[13.79%_2.93%_50.03%_2.93%]" data-name="undraw_personalization_triu 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 353 294">
        <g id="undraw_personalization_triu 1">
          <path d={svgPaths.p38665900} fill="var(--fill-0, #F37A20)" fillOpacity="0.54" id="Vector" opacity="0.1" />
          <path d={svgPaths.p2ee11f80} fill="var(--fill-0, #F37A20)" fillOpacity="0.54" id="Vector_2" opacity="0.1" />
          <path d={svgPaths.p4cd83c0} fill="var(--fill-0, #5EC401)" id="Vector_3" />
          <path d={svgPaths.p8f9e080} fill="var(--fill-0, #5EC401)" id="Vector_4" />
          <path d={svgPaths.p27a22400} fill="var(--fill-0, #5EC401)" id="Vector_5" />
          <path d={svgPaths.p149d3000} fill="var(--fill-0, #5EC401)" id="Vector_6" />
          <path d={svgPaths.pc567380} fill="var(--fill-0, #5EC401)" id="Vector_7" />
          <path d={svgPaths.p2222d600} fill="var(--fill-0, #5EC401)" id="Vector_8" />
          <path d={svgPaths.pfaee380} fill="var(--fill-0, #5EC401)" id="Vector_9" />
          <path d={svgPaths.pc3ba300} fill="var(--fill-0, #5EC401)" id="Vector_10" />
          <path d={svgPaths.p2d5eab00} fill="var(--fill-0, #5EC401)" id="Vector_11" />
          <path d={svgPaths.p39de300} fill="var(--fill-0, #5EC401)" id="Vector_12" />
          <path d={svgPaths.p33876d00} fill="var(--fill-0, #5EC401)" id="Vector_13" />
          <path d={svgPaths.p30d76d00} fill="var(--fill-0, #5EC401)" id="Vector_14" />
          <path d={svgPaths.p2714a900} fill="var(--fill-0, #5EC401)" id="Vector_15" />
          <path d={svgPaths.p3b83d300} fill="var(--fill-0, #5EC401)" id="Vector_16" />
          <path d={svgPaths.p1ec688f1} fill="var(--fill-0, #5EC401)" id="Vector_17" />
          <path d={svgPaths.p23089700} fill="var(--fill-0, #5EC401)" id="Vector_18" />
          <path d={svgPaths.p203a1bf0} fill="var(--fill-0, #5EC401)" id="Vector_19" />
          <path d={svgPaths.p1aa4cc00} fill="var(--fill-0, #5EC401)" id="Vector_20" />
          <path d={svgPaths.p379dbf00} fill="var(--fill-0, #5EC401)" id="Vector_21" />
          <path d={svgPaths.p31f93b00} fill="var(--fill-0, #5EC401)" id="Vector_22" />
          <path d={svgPaths.p30dc0db0} fill="var(--fill-0, #5EC401)" id="Vector_23" />
          <path d={svgPaths.p2992c000} fill="var(--fill-0, #5EC401)" id="Vector_24" />
          <path d={svgPaths.p2d0ecc80} fill="var(--fill-0, #5EC401)" id="Vector_25" />
          <path d={svgPaths.p9210400} fill="var(--fill-0, #5EC401)" id="Vector_26" />
          <path d={svgPaths.p18e68500} fill="var(--fill-0, #5EC401)" id="Vector_27" />
          <path d={svgPaths.p6ec3680} fill="var(--fill-0, #5EC401)" id="Vector_28" />
          <path d={svgPaths.pe728b80} fill="var(--fill-0, #5EC401)" id="Vector_29" />
          <path d={svgPaths.p252d1080} fill="var(--fill-0, #5EC401)" id="Vector_30" />
          <path d={svgPaths.p31040a00} fill="var(--fill-0, #5EC401)" id="Vector_31" />
          <path d={svgPaths.p149689f0} fill="var(--fill-0, #5EC401)" id="Vector_32" />
          <path d={svgPaths.p4da5000} fill="var(--fill-0, #5EC401)" id="Vector_33" />
          <path d={svgPaths.p239cb200} fill="var(--fill-0, #5EC401)" id="Vector_34" />
          <path d={svgPaths.p9643000} fill="var(--fill-0, #5EC401)" id="Vector_35" />
          <path d={svgPaths.p3687e7c0} fill="var(--fill-0, #444053)" id="Vector_36" />
          <path d={svgPaths.p29949300} fill="var(--fill-0, #444053)" id="Vector_37" />
          <path d={svgPaths.pa7dac00} fill="var(--fill-0, #444053)" id="Vector_38" />
          <path d={svgPaths.p1c9e9400} fill="var(--fill-0, #3A3768)" id="Vector_39" />
          <path d={svgPaths.p1aa8a380} fill="var(--fill-0, #3A3768)" id="Vector_40" />
          <path d={svgPaths.p13a3e8f0} fill="var(--fill-0, #3A3768)" id="Vector_41" />
          <path d={svgPaths.p3c73ef00} fill="var(--fill-0, #3A3768)" id="Vector_42" />
          <path d={svgPaths.p3e39ab00} fill="var(--fill-0, #3A3768)" id="Vector_43" />
          <path d={svgPaths.p1a6f5140} fill="var(--fill-0, #F37A20)" id="Vector_44" />
          <path d={svgPaths.p3aaf7f00} fill="var(--fill-0, #E6E8EC)" id="Vector_45" />
          <path d={svgPaths.p28c4cf00} fill="var(--fill-0, #E6E8EC)" id="Vector_46" />
          <path d={svgPaths.p18e6f900} fill="var(--fill-0, #5EC401)" id="Vector_47" />
          <path d={svgPaths.p13cfe5f0} fill="var(--fill-0, #5EC401)" id="Vector_48" />
          <path d={svgPaths.p219e0f00} fill="var(--fill-0, black)" id="Vector_49" opacity="0.1" />
          <path d={svgPaths.pdf57f0} fill="var(--fill-0, black)" id="Vector_50" opacity="0.1" />
          <path d={svgPaths.p2bc3f6c0} fill="var(--fill-0, black)" id="Vector_51" opacity="0.1" />
          <path d={svgPaths.p34080480} fill="var(--fill-0, black)" id="Vector_52" opacity="0.1" />
          <path d={svgPaths.p3156b680} fill="var(--fill-0, black)" id="Vector_53" opacity="0.1" />
          <g id="Group" opacity="0.1">
            <path d={svgPaths.p348c8a80} fill="var(--fill-0, black)" id="Vector_54" opacity="0.1" />
            <path d={svgPaths.pc476680} fill="var(--fill-0, black)" id="Vector_55" opacity="0.1" />
            <path d={svgPaths.p1997c200} fill="var(--fill-0, black)" id="Vector_56" opacity="0.1" />
          </g>
          <path d={svgPaths.pe155100} fill="var(--fill-0, #5EC401)" id="Vector_57" opacity="0.1" />
          <path d={svgPaths.p14554a80} fill="var(--fill-0, #5EC401)" id="Vector_58" opacity="0.1" />
          <path d={svgPaths.p1a454b00} fill="var(--fill-0, #5EC401)" id="Vector_59" opacity="0.1" />
          <path d={svgPaths.p2e81de00} fill="var(--fill-0, #5EC401)" id="Vector_60" />
          <path d={svgPaths.p3d398500} fill="var(--fill-0, #5EC401)" id="Vector_61" />
          <path d={svgPaths.p33709d30} fill="var(--fill-0, #5EC401)" id="Vector_62" />
          <path d={svgPaths.p199b0c00} fill="var(--fill-0, black)" id="Vector_63" opacity="0.1" />
          <path d={svgPaths.p19e93300} fill="var(--fill-0, #FFD037)" id="Vector_64" />
          <path d={svgPaths.pd7d9e00} fill="var(--fill-0, #FFD037)" id="Vector_65" />
          <path d={svgPaths.p21ead400} fill="var(--fill-0, #5EC401)" id="Vector_66" />
          <path d={svgPaths.p36a121f0} fill="var(--fill-0, black)" id="Vector_67" opacity="0.1" />
          <path d={svgPaths.p2c0f5f00} fill="var(--fill-0, #FFD037)" id="Vector_68" />
          <path d={svgPaths.p348e4d00} fill="var(--fill-0, #FFD037)" id="Vector_69" />
          <path d={svgPaths.p24ecc200} fill="var(--fill-0, #A8A8A8)" id="Vector_70" />
          <path d={svgPaths.p3a6b5800} fill="var(--fill-0, black)" id="Vector_71" opacity="0.2" />
        </g>
      </svg>
    </div>
  );
}

export default function SplashPhoneNumberOtp() {
  return (
    <div className="bg-white relative size-full" data-name="Splash--Phone Number--OTP">
      <MaskGroup />
      <BarsStatusBarIPhoneLight />
      <BarsHomeIndicatorIPhoneLightPortrait />
      <FormElementsMobileOtpCodeActiveEmpty />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] inset-[55.67%_34.13%_40.64%_4.27%] justify-center leading-[0] not-italic text-[#37474f] text-[20px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Enter Verification Code</p>
      </div>
      <div className="absolute font-['Poppins:Regular',sans-serif] inset-[60.59%_4.27%_32.88%_4.27%] leading-[normal] not-italic text-[0px] text-[rgba(55,71,79,0.72)]">
        <p className="mb-0 text-[14px]">We have sent SMS to:</p>
        <p className="font-['Poppins:Bold',sans-serif] text-[#37474f] text-[16px]">03XXXXXXXXXX</p>
      </div>
      <ButtonsMobileSolidTextSymbolTextSymbol />
      <p className="absolute font-['Poppins:Regular',sans-serif] inset-[81.28%_73.87%_16.13%_4.27%] leading-[normal] not-italic text-[#f37a20] text-[14px] text-nowrap whitespace-pre">Resend OTP</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] inset-[81.28%_6.13%_16.13%_50.13%] leading-[normal] not-italic text-[14px] text-[rgba(55,71,79,0.72)] text-nowrap text-right whitespace-pre">Change Phone Number</p>
      <UndrawPersonalizationTriu />
      <div className="absolute aspect-[222/227] left-[91.2%] right-[4.53%] top-[54px]" data-name="image 31">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage31} />
      </div>
    </div>
  );
}