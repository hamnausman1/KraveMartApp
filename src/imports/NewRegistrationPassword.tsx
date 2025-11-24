import svgPaths from "./svg-blqsscfat7";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import imgImage31 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import { imgMain1 } from "./svg-obtoi";

function Group4() {
  return (
    <div className="absolute contents h-[calc(1px*((var(--transform-inner-width)*0.15237344801425934)+(var(--transform-inner-height)*0.9883230328559875)))] left-[-65.03px] top-[-368.65px] w-[calc(1px*((var(--transform-inner-height)*0.15237344801425934)+(var(--transform-inner-width)*0.9883230328559875)))]">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.9883230261239031)+(var(--transform-inner-height)*0.15237349167983347)))] items-center justify-center left-[-27.23px] top-[-123.5px] w-[calc(1px*((var(--transform-inner-height)*0.9883230261239031)+(var(--transform-inner-width)*0.15237349167983347)))]" style={{ "--transform-inner-width": "248.03125", "--transform-inner-height": "588.875" } as React.CSSProperties}>
        <div className="flex-none rotate-[261.236deg]">
          <div className="h-[588.878px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[27.34px_123.671px] mask-size-[374.954px_811.834px] opacity-80 relative w-[248.041px]" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[333.28%] left-[-725%] max-w-none top-[-109.86%] w-[1406.64%]" src={imgMain2} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.9883230261239031)+(var(--transform-inner-height)*0.15237349167983347)))] items-center justify-center left-[-65.03px] top-[-368.65px] w-[calc(1px*((var(--transform-inner-height)*0.9883230261239031)+(var(--transform-inner-width)*0.15237349167983347)))]" style={{ "--transform-inner-width": "248.03125", "--transform-inner-height": "588.875" } as React.CSSProperties}>
        <div className="flex-none rotate-[261.236deg]">
          <div className="h-[588.878px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[65.135px_368.815px] mask-size-[374.954px_811.834px] opacity-80 relative w-[248.041px]" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[333.28%] left-[-866.5%] max-w-none top-[-110.7%] w-[1406.64%]" src={imgMain2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[-65.03px] top-[-368.65px]">
      <Group4 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-gradient-to-b from-[rgba(252,252,252,0.6)] h-[211.203px] left-[-0.05px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.16px_0px] mask-size-[374.954px_811.834px] to-[rgba(255,255,255,0)] top-[0.17px] w-[375.655px]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[0.11px] top-[660.1px]">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1.0000002384185933)+(var(--transform-inner-height)*0.015032863173825906)))] items-center justify-center left-[0.11px] top-[660.1px] w-[calc(1px*((var(--transform-inner-height)*0.9998872279986273)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "146.53125", "--transform-inner-height": "375.140625" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] skew-x-[359.139deg]">
          <div className="h-[375.153px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-659.934px] mask-size-[374.954px_811.834px] relative w-[146.533px]" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
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
    <div className="absolute contents left-[0.11px] top-[537.68px]">
      <Group3 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-[rgba(254,254,254,0.55)] h-[274.32px] left-[0.11px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-537.514px] mask-size-[374.954px_811.834px] top-[537.68px] w-[374.954px]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents left-[0.11px] top-[0.17px]" data-name="Mask Group">
      <Group5 />
      <Group6 />
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute inset-[39.39%_3.82%_34.85%_89.69%]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 13">
        <g id="Battery">
          <rect height="11.6314" id="Border" opacity="0.35" rx="2.16667" stroke="var(--stroke-0, black)" width="21" x="0.5" y="0.5" />
          <path d={svgPaths.p24100ad8} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="8.17323" id="Capacity" rx="1.33333" width="18" x="2" y="2.22906" />
        </g>
      </svg>
    </div>
  );
}

function TimeStyle() {
  return (
    <div className="absolute inset-[15.91%_80%_36.36%_5.6%]" data-name="Time Style">
      <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] left-0 not-italic right-0 text-[15px] text-black text-center top-[calc(50%-4.7px)] tracking-[-0.24px]">9:41</p>
    </div>
  );
}

function BarsStatusBarIPhoneLight() {
  return (
    <div className="absolute bottom-[93.96%] left-0 right-0 top-0" data-name="Bars / Status Bar / iPhone / Light">
      <Battery />
      <div className="absolute inset-[39.39%_11.64%_35.61%_84.27%]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 13">
          <path d={svgPaths.p2897e100} fill="var(--fill-0, black)" id="Wifi" />
        </svg>
      </div>
      <div className="absolute inset-[40.15%_17.07%_35.61%_78.4%]" data-name="Cellular Connection">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 12">
          <path d={svgPaths.p11ae0c00} fill="var(--fill-0, black)" id="Cellular Connection" />
        </svg>
      </div>
      <TimeStyle />
    </div>
  );
}

function BarsHomeIndicatorIPhoneLightPortrait() {
  return (
    <div className="absolute inset-[106.79%_31.73%_-11.45%_32.53%]" data-name="Bars / Home Indicator / iPhone / Light - Portrait">
      <div className="absolute bg-black bottom-[11.89px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
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
    <div className="absolute h-[88px] left-px top-0 w-[375px]" data-name="components/mobile/appbar/secondery">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[58px] not-italic text-[#37474f] text-[20px] text-nowrap top-[47.32px] whitespace-pre">Choose a Password</p>
      <NavigationArrowBackward24Px />
    </div>
  );
}

function BarsHomeIndicatorIPhoneLightPortrait1() {
  return (
    <div className="absolute inset-[95.32%_31.73%_0.01%_32.53%]" data-name="Bars / Home Indicator / iPhone / Light - Portrait">
      <div className="absolute bg-black bottom-[11.89px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function SocialVisibility24Px() {
  return (
    <div className="absolute right-[17px] size-[24px] top-1/2 translate-y-[-50%]" data-name="social/visibility_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="social/visibility_24px">
          <path clipRule="evenodd" d={svgPaths.pb3f0d80} fill="var(--fill-0, #37474F)" fillRule="evenodd" id="icon/social/visibility_24px" />
        </g>
      </svg>
    </div>
  );
}

function ActionLock24Px() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="action/lock_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="action/lock_24px">
          <path clipRule="evenodd" d={svgPaths.p30734500} fill="var(--fill-0, #37474F)" fillRule="evenodd" id="icon/action/lock_24px" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <ActionLock24Px />
    </div>
  );
}

function Frame() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.87] relative shrink-0 text-[16px] text-[rgba(55,71,79,0.72)] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Password</p>
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
      <SocialVisibility24Px />
      <Group />
    </div>
  );
}

function FormElementsMobileInputFieldsActiveEmpty() {
  return (
    <div className="absolute inset-[71.06%_4.27%_22.54%_4.27%]" data-name="form elements/mobile/input fields/active/empty">
      <Group7Copy />
    </div>
  );
}

function SocialVisibility24Px1() {
  return (
    <div className="absolute right-[17px] size-[24px] top-1/2 translate-y-[-50%]" data-name="social/visibility_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="social/visibility_24px">
          <path clipRule="evenodd" d={svgPaths.pb3f0d80} fill="var(--fill-0, #37474F)" fillRule="evenodd" id="icon/social/visibility_24px" />
        </g>
      </svg>
    </div>
  );
}

function ActionLock24Px1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="action/lock_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="action/lock_24px">
          <path clipRule="evenodd" d={svgPaths.p30734500} fill="var(--fill-0, #37474F)" fillRule="evenodd" id="icon/action/lock_24px" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <ActionLock24Px1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.87] relative shrink-0 text-[16px] text-[rgba(55,71,79,0.72)] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Confirm Password</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute content-stretch flex items-center left-[6px] overflow-clip top-1/2 translate-y-[-50%]" data-name="Group">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Group7Copy1() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Group 7 Copy">
      <div className="absolute bg-[#f0f1f2] inset-0 rounded-[8px]" data-name="Rectangle" />
      <SocialVisibility24Px1 />
      <Group1 />
    </div>
  );
}

function FormElementsMobileInputFieldsActiveEmpty1() {
  return (
    <div className="absolute inset-[79.68%_4.27%_13.92%_4.27%]" data-name="form elements/mobile/input fields/active/empty">
      <Group7Copy1 />
    </div>
  );
}

function NavigationArrowForward24Px() {
  return (
    <div className="absolute right-[16px] size-[24px] top-1/2 translate-y-[-50%]" data-name="navigation/arrow_forward_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="navigation/arrow_forward_24px">
          <path d={svgPaths.p1ee0b380} fill="var(--fill-0, white)" id="icon/navigation/arrow_forward_24px" />
        </g>
      </svg>
    </div>
  );
}

function ButtonsMobileSolidTextSymbolTextSymbol() {
  return (
    <div className="absolute inset-[89.9%_4%_4.19%_4.53%]" data-name="buttons/mobile/solid/text + symbol/text → symbol">
      <div className="absolute bg-[#f37a20] inset-0 rounded-[8px]" data-name="Rectangle" />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[164.5px] not-italic text-[16px] text-center text-nowrap text-white top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">Finish, Good to go</p>
      </div>
      <NavigationArrowForward24Px />
    </div>
  );
}

function BackgroundSimpleInject() {
  return (
    <div className="absolute inset-[31.57%_17.44%_38.98%_14.13%]" data-name="background simple  inject 207">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 257 240">
        <g id="background simple  inject 207">
          <path d={svgPaths.p1e526400} fill="var(--fill-0, #F0F0F0)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FloorInject() {
  return (
    <div className="absolute inset-[65.63%_15.73%_34.32%_15.78%]" data-name="Floor  inject 207">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 257 1">
        <g id="Floor  inject 207">
          <path d={svgPaths.p2b19e800} fill="var(--fill-0, #263238)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function PlantInject() {
  return (
    <div className="absolute inset-[42.31%_16.39%_43.11%_65.26%]" data-name="Plant  inject 207">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 119">
        <g id="Plant  inject 207">
          <path d={svgPaths.p29ae4680} fill="var(--fill-0, #F37A20)" id="Vector" />
          <path d={svgPaths.p25445c00} fill="var(--fill-0, #263238)" id="Vector_2" />
          <path d={svgPaths.p21235500} fill="var(--fill-0, #263238)" id="Vector_3" />
          <path d={svgPaths.p32bb1400} fill="var(--fill-0, #263238)" id="Vector_4" />
          <path d={svgPaths.pc8cb680} fill="var(--fill-0, #263238)" id="Vector_5" />
          <path d={svgPaths.p353aac80} fill="var(--fill-0, #263238)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function PadlockInject() {
  return (
    <div className="absolute inset-[23.4%_17.42%_66.44%_64.19%]" data-name="Padlock  inject 207">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 83">
        <g id="Padlock  inject 207">
          <path d={svgPaths.p2571bc00} fill="var(--fill-0, #F37A20)" id="Vector" />
          <path d={svgPaths.p1c4d2a00} fill="var(--fill-0, #263238)" id="Vector_2" />
          <path d={svgPaths.p36990d30} fill="var(--fill-0, #263238)" id="Vector_3" />
          <path d={svgPaths.pa450500} fill="var(--fill-0, #263238)" id="Vector_4" />
          <path d={svgPaths.p35337300} fill="var(--fill-0, #263238)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[47.03%_42.31%_52.51%_45.53%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 4">
        <g id="Group" opacity="0.2">
          <path d={svgPaths.p39a13080} fill="var(--fill-0, white)" id="Vector" opacity="0.2" />
          <path d={svgPaths.p21a76500} fill="var(--fill-0, white)" id="Vector_2" opacity="0.2" />
          <path d={svgPaths.p6a22d00} fill="var(--fill-0, white)" id="Vector_3" opacity="0.2" />
          <path d={svgPaths.p177e3300} fill="var(--fill-0, white)" id="Vector_4" opacity="0.2" />
          <path d={svgPaths.pcc6eb00} fill="var(--fill-0, white)" id="Vector_5" opacity="0.2" />
          <path d={svgPaths.p362cec00} fill="var(--fill-0, white)" id="Vector_6" opacity="0.2" />
          <path d={svgPaths.p32d552f0} fill="var(--fill-0, white)" id="Vector_7" opacity="0.2" />
          <path d={svgPaths.p39bb9e80} fill="var(--fill-0, white)" id="Vector_8" opacity="0.2" />
          <path d={svgPaths.p3ede3940} fill="var(--fill-0, white)" id="Vector_9" opacity="0.2" />
        </g>
      </svg>
    </div>
  );
}

function DeviceInject() {
  return (
    <div className="absolute contents inset-[27.91%_29.43%_42.07%_38.67%]" data-name="Device  inject 207">
      <div className="absolute inset-[27.91%_29.43%_42.07%_38.67%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 244">
          <path d={svgPaths.p10451c00} fill="var(--fill-0, #455A64)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[28.8%_30.9%_43.13%_40.14%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 109 228">
          <path d={svgPaths.p3fd98400} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[51.15%_36.88%_46.46%_46.12%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 20">
          <path d={svgPaths.p37cc0e00} fill="var(--fill-0, #F37A20)" id="Vector" />
        </svg>
      </div>
      <p className="absolute font-['Montserrat:Regular',sans-serif] font-normal inset-[51.74%_39.8%_47.03%_50.87%] leading-[normal] text-[#e8e8e3] text-[8.131px] text-nowrap whitespace-pre">SING UP</p>
      <div className="absolute flex inset-[36.15%_50.31%_63.36%_44.01%] items-center justify-center">
        <div className="flex-none h-[3.908px] rotate-[0.26deg] w-[21.296px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 4">
              <path d={svgPaths.p297e25c0} fill="var(--fill-0, #F37A20)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[36.15%_50.31%_63.36%_44.01%] items-center justify-center">
        <div className="flex-none h-[3.908px] rotate-[0.26deg] w-[21.296px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 4">
              <path d={svgPaths.p297e25c0} fill="var(--fill-0, black)" id="Vector" opacity="0.1" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[37.32%_33.26%_60.89%_43.94%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86 15">
          <path d={svgPaths.p37d1f100} fill="var(--fill-0, #E0E0E0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[37.89%_43.89%_61.66%_45.72%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 4">
          <path d={svgPaths.p2a581a30} fill="var(--fill-0, #F37A20)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[37.89%_43.89%_61.66%_45.72%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 4">
          <path d={svgPaths.p2a581a30} fill="var(--fill-0, white)" id="Vector" opacity="0.2" />
        </svg>
      </div>
      <div className="absolute flex inset-[40.54%_50.35%_58.97%_43.97%] items-center justify-center">
        <div className="flex-none h-[3.908px] rotate-[0.26deg] w-[21.296px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 4">
              <path d={svgPaths.p297e25c0} fill="var(--fill-0, #F37A20)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[40.54%_50.35%_58.97%_43.97%] items-center justify-center">
        <div className="flex-none h-[3.908px] rotate-[0.26deg] w-[21.296px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 4">
              <path d={svgPaths.p297e25c0} fill="var(--fill-0, black)" id="Vector" opacity="0.1" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[41.72%_33.31%_56.49%_43.89%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86 15">
          <path d={svgPaths.p1784b580} fill="var(--fill-0, #E0E0E0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute flex inset-[45.12%_50.39%_54.39%_43.93%] items-center justify-center">
        <div className="flex-none h-[3.908px] rotate-[0.26deg] w-[21.296px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 4">
              <path d={svgPaths.p3611ba80} fill="var(--fill-0, #F37A20)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[45.12%_50.39%_54.39%_43.93%] items-center justify-center">
        <div className="flex-none h-[3.908px] rotate-[0.26deg] w-[21.296px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 4">
              <path d={svgPaths.p3611ba80} fill="var(--fill-0, black)" id="Vector" opacity="0.1" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[46.29%_33.34%_51.91%_43.86%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86 15">
          <path d={svgPaths.p37a12f00} fill="var(--fill-0, #E0E0E0)" id="Vector" />
        </svg>
      </div>
      <div className="absolute flex inset-[42.39%_44.12%_57.14%_45.49%] items-center justify-center">
        <div className="flex-none h-[3.652px] rotate-[0.26deg] w-[38.949px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 4">
              <path d={svgPaths.p2a91ac60} fill="var(--fill-0, #F37A20)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[42.39%_44.12%_57.14%_45.49%] items-center justify-center">
        <div className="flex-none h-[3.652px] rotate-[0.26deg] w-[38.949px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 4">
              <path d={svgPaths.p2a91ac60} fill="var(--fill-0, white)" id="Vector" opacity="0.2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[47.03%_53.56%_52.55%_45.53%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <path d={svgPaths.p39a13080} fill="var(--fill-0, #F37A20)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[47.03%_52.16%_52.52%_46.93%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <path d={svgPaths.p628a480} fill="var(--fill-0, #F37A20)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[47.03%_50.75%_52.55%_48.34%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <path d={svgPaths.p30cdcf80} fill="var(--fill-0, #F37A20)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[47.04%_49.34%_52.54%_49.75%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <path d={svgPaths.p267b4f40} fill="var(--fill-0, #F37A20)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[47.04%_47.93%_52.54%_51.16%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <path d={svgPaths.p31a7000} fill="var(--fill-0, #F37A20)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[47.04%_46.53%_52.54%_52.56%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <path d={svgPaths.p32fbcc80} fill="var(--fill-0, #F37A20)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[47.04%_45.12%_52.51%_53.97%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <path d={svgPaths.p61c8600} fill="var(--fill-0, #F37A20)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[47.05%_43.71%_52.53%_55.38%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <path d={svgPaths.pc996800} fill="var(--fill-0, #F37A20)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[47.05%_42.31%_52.53%_56.78%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <path d={svgPaths.p299e0c0} fill="var(--fill-0, #F37A20)" id="Vector" />
        </svg>
      </div>
      <Group2 />
      <div className="absolute inset-[31.8%_43.15%_66.73%_53.93%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 12">
          <path d={svgPaths.p3e2aebc0} fill="var(--fill-0, #F37A20)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[31.8%_43.15%_66.73%_53.93%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 12">
          <path d={svgPaths.p3e2aebc0} fill="var(--fill-0, black)" id="Vector" opacity="0.1" />
        </svg>
      </div>
      <div className="absolute flex inset-[33.65%_39.55%_65.75%_50.02%] items-center justify-center">
        <div className="flex-none h-[4.67px] rotate-[0.26deg] w-[39.074px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 5">
              <path d={svgPaths.p91a5900} fill="var(--fill-0, #F37A20)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[33.65%_39.55%_65.75%_50.02%] items-center justify-center">
        <div className="flex-none h-[4.67px] rotate-[0.26deg] w-[39.074px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 5">
              <path d={svgPaths.p91a5900} fill="var(--fill-0, white)" id="Vector" opacity="0.2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpeechBubbleInject() {
  return (
    <div className="absolute inset-[36.65%_72.15%_57.38%_16.46%]" data-name="speech-bubble--inject-207">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 49">
        <g id="speech-bubble--inject-207">
          <path d={svgPaths.p155c1a00} fill="var(--fill-0, #F37A20)" id="Vector" />
          <path d={svgPaths.p33a09500} fill="var(--fill-0, #F37A20)" id="Vector_2" />
          <path d={svgPaths.p438ce50} fill="var(--fill-0, #F37A20)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function CharacterInject() {
  return (
    <div className="absolute inset-[37.26%_46.24%_34.36%_22.14%]" data-name="Character--inject-207">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 119 231">
        <g id="Character--inject-207">
          <path d={svgPaths.p10ea4e00} fill="var(--fill-0, #F37A20)" id="Vector" />
          <path d={svgPaths.p31df0300} fill="var(--fill-0, #263238)" id="Vector_2" />
          <path d={svgPaths.p3844f00} fill="var(--fill-0, #263238)" id="Vector_3" />
          <path d={svgPaths.p2c5e9780} fill="var(--fill-0, #263238)" id="Vector_4" />
          <path d={svgPaths.p281dd400} fill="var(--fill-0, #263238)" id="Vector_5" />
          <path d={svgPaths.p2ac97af0} fill="var(--fill-0, #263238)" id="Vector_6" />
          <path d={svgPaths.p1f348600} fill="var(--fill-0, #263238)" id="Vector_7" />
          <path d={svgPaths.p11cda280} fill="var(--fill-0, #F37A20)" id="Vector_8" />
          <path d={svgPaths.p10f04200} fill="var(--fill-0, #263238)" id="Vector_9" />
          <path d={svgPaths.p3c3c4c80} fill="var(--fill-0, #263238)" id="Vector_10" />
          <path d={svgPaths.p15348680} fill="var(--fill-0, #263238)" id="Vector_11" />
          <path d={svgPaths.p6e51a80} fill="var(--fill-0, #263238)" id="Vector_12" />
          <path d={svgPaths.p3efa8f80} fill="var(--fill-0, #263238)" id="Vector_13" />
          <path d={svgPaths.p29597580} fill="var(--fill-0, #263238)" id="Vector_14" />
          <path d={svgPaths.p24e5aa80} fill="var(--fill-0, #FFBE9D)" id="Vector_15" />
          <path d={svgPaths.pee1a280} fill="var(--fill-0, #F37A20)" id="Vector_16" />
          <path d={svgPaths.p342a5b00} fill="var(--fill-0, #263238)" id="Vector_17" />
          <path d={svgPaths.p3eeb2800} fill="var(--fill-0, #263238)" id="Vector_18" />
          <path d={svgPaths.p9958880} fill="var(--fill-0, #263238)" id="Vector_19" />
          <path d={svgPaths.pfdd14e0} fill="var(--fill-0, #263238)" id="Vector_20" />
          <path d={svgPaths.p3f456500} fill="var(--fill-0, #263238)" id="Vector_21" />
          <path d={svgPaths.p33c1b800} fill="var(--fill-0, #263238)" id="Vector_22" />
          <path d={svgPaths.p21dfb080} fill="var(--fill-0, #FFBE9D)" id="Vector_23" />
          <path d={svgPaths.p1d56f200} fill="var(--fill-0, #EB996E)" id="Vector_24" />
          <path d={svgPaths.p2fd77600} fill="var(--fill-0, #263238)" id="Vector_25" />
          <path d={svgPaths.p3821ea00} fill="var(--fill-0, #F37A20)" id="Vector_26" />
          <path d={svgPaths.pe9bd300} fill="var(--fill-0, #263238)" id="Vector_27" />
          <path d={svgPaths.p1dcbcc00} fill="var(--fill-0, #455A64)" id="Vector_28" />
          <path d={svgPaths.p3df7e980} fill="var(--fill-0, #455A64)" id="Vector_29" />
          <path d={svgPaths.p3e658580} fill="var(--fill-0, #455A64)" id="Vector_30" />
          <path d={svgPaths.p3af07400} fill="var(--fill-0, #455A64)" id="Vector_31" />
          <path d={svgPaths.p2f874a00} fill="var(--fill-0, #455A64)" id="Vector_32" />
          <path d={svgPaths.p3f4e9600} fill="var(--fill-0, #455A64)" id="Vector_33" />
          <path d={svgPaths.p27fa1880} fill="var(--fill-0, #455A64)" id="Vector_34" />
          <path d={svgPaths.p314bdb20} fill="var(--fill-0, black)" id="Vector_35" opacity="0.2" />
          <g id="Group" opacity="0.2">
            <path d={svgPaths.pd48e180} fill="var(--fill-0, black)" id="Vector_36" opacity="0.2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MobileLoginPana() {
  return (
    <div className="absolute contents inset-[23.4%_15.73%_34.32%_14.13%]" data-name="Mobile login-pana (1) 1">
      <BackgroundSimpleInject />
      <FloorInject />
      <PlantInject />
      <PadlockInject />
      <DeviceInject />
      <SpeechBubbleInject />
      <CharacterInject />
    </div>
  );
}

export default function NewRegistrationPassword() {
  return (
    <div className="bg-white relative size-full" data-name="New Registration--Password">
      <MaskGroup />
      <BarsStatusBarIPhoneLight />
      <BarsHomeIndicatorIPhoneLightPortrait />
      <ComponentsMobileAppbarSecondery />
      <BarsHomeIndicatorIPhoneLightPortrait1 />
      <p className="absolute font-['Poppins:Regular',sans-serif] inset-[14.41%_4.27%_76.6%_4.27%] leading-[normal] not-italic text-[14px] text-[rgba(55,71,79,0.72)]">{`For the security & safety please choose a password`}</p>
      <FormElementsMobileInputFieldsActiveEmpty />
      <FormElementsMobileInputFieldsActiveEmpty1 />
      <ButtonsMobileSolidTextSymbolTextSymbol />
      <MobileLoginPana />
      <div className="absolute left-[348px] size-[16px] top-[51px]" data-name="image 31">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage31} />
      </div>
    </div>
  );
}