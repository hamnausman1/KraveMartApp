import svgPaths from "./svg-maky1yjraa";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import imgAvatar from "figma:asset/b30b831465a254517e6511f7e1fb632c97b32da7.png";
import imgImage32 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import { imgMain1 } from "./svg-c5304";

function Group9() {
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

function Group10() {
  return (
    <div className="absolute contents inset-[-15.21%_-58.02%_73.97%_-7.26%]">
      <Group9 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-gradient-to-b from-[rgba(252,252,252,0.6)] inset-[0.02%_-0.16%_73.97%_-0.01%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.16px_0px] mask-size-[374.954px_811.834px] to-[rgba(255,255,255,0.6)]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function Group8() {
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

function Group11() {
  return (
    <div className="absolute contents inset-[66.22%_-0.06%_-0.03%_0.03%]">
      <Group8 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-[rgba(254,254,254,0.55)] bottom-0 left-[0.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-537.513px] mask-size-[374.954px_811.834px] right-[-0.02%] top-[66.22%]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute bottom-0 contents left-[0.03%] right-[-0.02%] top-[0.02%]" data-name="Mask Group">
      <Group10 />
      <Group11 />
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute inset-[39.39%_3.82%_34.85%_89.69%]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 13">
        <g id="Battery">
          <rect height="11.6314" id="Border" opacity="0.35" rx="2.16667" stroke="var(--stroke-0, black)" width="21" x="0.5" y="0.500115" />
          <path d={svgPaths.p3c85c980} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="8.17323" id="Capacity" rx="1.33333" width="18" x="2" y="2.22918" />
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
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[58px] not-italic text-[#37474f] text-[20px] text-nowrap top-[47.32px] whitespace-pre">Chat with us</p>
      <NavigationArrowBackward24Px />
    </div>
  );
}

function BarsHomeIndicatorIPhoneLightPortrait1() {
  return (
    <div className="absolute inset-[-23.65%_933.87%_118.98%_-869.6%]" data-name="Bars / Home Indicator / iPhone / Light - Portrait">
      <div className="absolute bg-black bottom-[11.89px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[71.35px] top-[221px]">
      <div className="absolute bg-[#ffd037] h-[68px] left-[71.35px] rounded-[9px] top-[221px] w-[282.655px]" />
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[56.1px] leading-[normal] left-[89px] not-italic text-[16px] text-white top-[227px] tracking-[0.44px] w-[237.193px]">Let me see how I can help you</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[71.35px] top-[221px]">
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[71px] top-[368px]">
      <div className="absolute bg-[#ffd037] h-[81px] left-[71px] rounded-[9px] top-[368px] w-[283px]" />
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[66.825px] leading-[normal] left-[89.81px] not-italic text-[16px] text-white top-[381.76px] tracking-[0.44px] w-[237.482px]">That would be helpful. Dont worry we will resolve your issue timely</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[71px] top-[368px]">
      <Group3 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[139px] top-[309px]">
      <div className="absolute bg-[#236cd9] h-[43.547px] left-[139px] rounded-[9px] top-[309px] w-[214px]" />
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[38.708px] leading-[normal] left-[153.47px] not-italic text-[16px] text-white top-[316.29px] tracking-[0.44px] w-[178.968px]">I can share a picture</p>
    </div>
  );
}

function ActionSend24Px() {
  return (
    <div className="absolute right-[17px] size-[24px] top-[calc(50%-1px)] translate-y-[-50%]" data-name="action/send_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="action/send_24px">
          <path clipRule="evenodd" d={svgPaths.p24b77200} fill="var(--fill-0, #37474F)" fillRule="evenodd" id="icon/action/send_24px" />
        </g>
      </svg>
    </div>
  );
}

function Camera() {
  return (
    <div className="h-[22px] relative w-[23px]" data-name="Camera">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 22">
        <g clipPath="url(#clip0_8_16186)" id="Camera" opacity="0.7">
          <g id="Icon">
            <path d={svgPaths.p11a57b80} stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p22cee470} stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_8_16186">
            <rect fill="white" height="22" width="23" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-0 overflow-clip">
      <div className="absolute bg-[#f0f1f2] bottom-[3.45%] left-0 right-0 rounded-tl-[8px] rounded-tr-[8px] top-0" data-name="Rectangle" />
      <ActionSend24Px />
      <div className="absolute bottom-0 left-[0.3%] right-[0.3%] top-[96.55%]" data-name="Line">
        <div className="absolute inset-[-1.79%_-0.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 343 2">
            <path d="M1 1H341.909" id="Line" stroke="var(--stroke-0, #FFD037)" strokeLinecap="square" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="absolute capitalize font-['Poppins:Regular',sans-serif] leading-[normal] left-[21px] not-italic opacity-[0.87] text-[#ffd037] text-[12px] text-nowrap top-[6px] whitespace-pre">Write Message</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[21px] not-italic text-[#37474f] text-[16px] text-nowrap top-[21px] tracking-[0.44px] whitespace-pre">Okay..</p>
      <div className="absolute flex h-[22px] items-center justify-center left-[211px] top-[16px] w-[23px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Camera />
        </div>
      </div>
    </div>
  );
}

function FormElementsMobileInputFieldsEnabledNormal() {
  return (
    <div className="absolute h-[56px] left-[15px] top-[466px] w-[343px]" data-name="form elements/mobile/input fields/enabled/normal">
      <Group />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[15.76%_80%_78.82%_8.27%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="Group 93">
          <circle cx="22" cy="22" fill="var(--fill-0, #F37A20)" id="Ellipse 3" r="22" />
          <g id="action/shopping_basket_24px">
            <path clipRule="evenodd" d={svgPaths.p30cae750} fill="var(--fill-0, white)" fillRule="evenodd" id="icon/action/shopping_basket_24px" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[13.3%_4.27%_75.49%_4.27%]">
      <div className="absolute bg-[rgba(243,122,32,0.14)] inset-[13.3%_4.27%_76.11%_4.27%] rounded-[12px]" />
      <p className="absolute font-['Poppins:Medium',sans-serif] inset-[14.41%_49.33%_82.64%_24.53%] leading-[normal] not-italic text-[#37474f] text-[16px] text-nowrap tracking-[0.6px] whitespace-pre">Order #027</p>
      <Group5 />
      <div className="absolute capitalize font-['Poppins:Regular',sans-serif] inset-[20.07%_55.2%_75.49%_24.53%] leading-[normal] not-italic text-[12px] text-[rgba(55,71,79,0.72)] text-nowrap whitespace-pre">
        <p className="mb-0">July 26, 2025</p>
        <p>&nbsp;</p>
      </div>
      <p className="absolute capitalize font-['Poppins:Medium',sans-serif] inset-[17.61%_60.27%_80.17%_24.53%] leading-[normal] not-italic text-[#ffd037] text-[12px] text-nowrap whitespace-pre">Delivered</p>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] inset-[16.63%_9.33%_79.68%_74.67%] leading-[normal] not-italic text-[#f37a20] text-[20px] text-nowrap text-right whitespace-pre">Rs 129</p>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute inset-0 rounded-[27px]" data-name="Background">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[27px]">
        <div className="absolute bg-[rgba(212,212,212,0.74)] inset-0 mix-blend-luminosity rounded-[27px]" />
        <div className="absolute bg-[#1b1b1b] inset-0 rounded-[27px]" />
        <div className="absolute bg-[#e6e9ed] inset-0 rounded-[27px]" />
      </div>
    </div>
  );
}

function AutocompleteSuggestion() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[4.6px] shrink-0" data-name="Autocomplete Suggestion">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal inset-0 justify-center leading-[0] overflow-ellipsis overflow-hidden text-[#333333] text-[17px] text-center text-nowrap tracking-[-0.43px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden">“The”</p>
      </div>
    </div>
  );
}

function Separator() {
  return (
    <div className="box-border content-stretch flex h-[25px] items-center justify-center px-[2px] py-0 relative shrink-0" data-name="Separator">
      <div className="bg-[#cccccc] h-full opacity-10 shrink-0 w-px" data-name="Separator" />
    </div>
  );
}

function AutocompleteSuggestion1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[4.6px] shrink-0" data-name="Autocomplete Suggestion">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal inset-0 justify-center leading-[0] overflow-ellipsis overflow-hidden text-[#333333] text-[17px] text-center text-nowrap tracking-[-0.43px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden">the</p>
      </div>
    </div>
  );
}

function AutocompleteSuggestion2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[4.6px] shrink-0" data-name="Autocomplete Suggestion">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal inset-0 justify-center leading-[0] overflow-ellipsis overflow-hidden text-[#333333] text-[17px] text-center text-nowrap tracking-[-0.43px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden">to</p>
      </div>
    </div>
  );
}

function Autocorrection() {
  return (
    <div className="box-border content-stretch flex gap-[20px] h-[25px] items-center px-[22px] py-0 relative shrink-0 w-[402px]" data-name="Autocorrection">
      <AutocompleteSuggestion />
      <Separator />
      <AutocompleteSuggestion1 />
      <Separator />
      <AutocompleteSuggestion2 />
    </div>
  );
}

function Key() {
  return (
    <div className="basis-0 grow h-[45px] min-h-px min-w-px relative rounded-[8.5px] shrink-0" data-name="Key">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8.5px]">
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 rounded-[8.5px]" />
        <div className="absolute bg-[#333333] inset-0 rounded-[8.5px]" />
      </div>
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center leading-[0] left-0 right-[-5.5px] text-[#595959] text-[25px] text-center top-[calc(50%-2.5px)] translate-y-[-50%]">
        <p className="leading-[30px]">q</p>
      </div>
    </div>
  );
}

function Key1() {
  return (
    <div className="basis-0 grow h-[45px] min-h-px min-w-px relative rounded-[8.5px] shrink-0" data-name="Key">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8.5px]">
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 rounded-[8.5px]" />
        <div className="absolute bg-[#333333] inset-0 rounded-[8.5px]" />
      </div>
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center leading-[0] left-0 right-[-5.5px] text-[#595959] text-[25px] text-center top-[calc(50%-2.5px)] translate-y-[-50%]">
        <p className="leading-[30px]">w</p>
      </div>
    </div>
  );
}

function Key2() {
  return (
    <div className="basis-0 grow h-[45px] min-h-px min-w-px relative rounded-[8.5px] shrink-0" data-name="Key">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8.5px]">
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 rounded-[8.5px]" />
        <div className="absolute bg-[#333333] inset-0 rounded-[8.5px]" />
      </div>
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center leading-[0] left-0 right-[-5.5px] text-[#595959] text-[25px] text-center top-[calc(50%-2.5px)] translate-y-[-50%]">
        <p className="leading-[30px]">e</p>
      </div>
    </div>
  );
}

function Key3() {
  return (
    <div className="basis-0 grow h-[45px] min-h-px min-w-px relative rounded-[8.5px] shrink-0" data-name="Key">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8.5px]">
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 rounded-[8.5px]" />
        <div className="absolute bg-[#333333] inset-0 rounded-[8.5px]" />
      </div>
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center leading-[0] left-0 right-[-5.5px] text-[#595959] text-[25px] text-center top-[calc(50%-2.5px)] translate-y-[-50%]">
        <p className="leading-[30px]">r</p>
      </div>
    </div>
  );
}

function Key4() {
  return (
    <div className="basis-0 grow h-[45px] min-h-px min-w-px relative rounded-[8.5px] shrink-0" data-name="Key">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8.5px]">
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 rounded-[8.5px]" />
        <div className="absolute bg-[#333333] inset-0 rounded-[8.5px]" />
      </div>
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center leading-[0] left-0 right-[-5.5px] text-[#595959] text-[25px] text-center top-[calc(50%-2.5px)] translate-y-[-50%]">
        <p className="leading-[30px]">t</p>
      </div>
    </div>
  );
}

function Key5() {
  return (
    <div className="basis-0 grow h-[45px] min-h-px min-w-px relative rounded-[8.5px] shrink-0" data-name="Key">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8.5px]">
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 rounded-[8.5px]" />
        <div className="absolute bg-[#333333] inset-0 rounded-[8.5px]" />
      </div>
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center leading-[0] left-0 right-[-5.5px] text-[#595959] text-[25px] text-center top-[calc(50%-2.5px)] translate-y-[-50%]">
        <p className="leading-[30px]">y</p>
      </div>
    </div>
  );
}

function Key6() {
  return (
    <div className="basis-0 grow h-[45px] min-h-px min-w-px relative rounded-[8.5px] shrink-0" data-name="Key">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8.5px]">
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 rounded-[8.5px]" />
        <div className="absolute bg-[#333333] inset-0 rounded-[8.5px]" />
      </div>
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center leading-[0] left-0 right-[-5.5px] text-[#595959] text-[25px] text-center top-[calc(50%-2.5px)] translate-y-[-50%]">
        <p className="leading-[30px]">u</p>
      </div>
    </div>
  );
}

function Key7() {
  return (
    <div className="basis-0 grow h-[45px] min-h-px min-w-px relative rounded-[8.5px] shrink-0" data-name="Key">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8.5px]">
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 rounded-[8.5px]" />
        <div className="absolute bg-[#333333] inset-0 rounded-[8.5px]" />
      </div>
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center leading-[0] left-0 right-[-5.5px] text-[#595959] text-[25px] text-center top-[calc(50%-2.5px)] translate-y-[-50%]">
        <p className="leading-[30px]">i</p>
      </div>
    </div>
  );
}

function Key8() {
  return (
    <div className="basis-0 grow h-[45px] min-h-px min-w-px relative rounded-[8.5px] shrink-0" data-name="Key">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8.5px]">
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 rounded-[8.5px]" />
        <div className="absolute bg-[#333333] inset-0 rounded-[8.5px]" />
      </div>
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center leading-[0] left-0 right-[-5.5px] text-[#595959] text-[25px] text-center top-[calc(50%-2.5px)] translate-y-[-50%]">
        <p className="leading-[30px]">o</p>
      </div>
    </div>
  );
}

function Key9() {
  return (
    <div className="basis-0 grow h-[45px] min-h-px min-w-px relative rounded-[8.5px] shrink-0" data-name="Key">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8.5px]">
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 rounded-[8.5px]" />
        <div className="absolute bg-[#333333] inset-0 rounded-[8.5px]" />
      </div>
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center leading-[0] left-0 right-[-5.5px] text-[#595959] text-[25px] text-center top-[calc(50%-2.5px)] translate-y-[-50%]">
        <p className="leading-[30px]">p</p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-full" data-name="Row 1">
      <Key />
      <Key1 />
      <Key2 />
      <Key3 />
      <Key4 />
      <Key5 />
      <Key6 />
      <Key7 />
      <Key8 />
      <Key9 />
    </div>
  );
}

function Key10() {
  return (
    <div className="basis-0 grow h-[45px] min-h-px min-w-px relative rounded-[8.5px] shrink-0" data-name="Key">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8.5px]">
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 rounded-[8.5px]" />
        <div className="absolute bg-[#333333] inset-0 rounded-[8.5px]" />
      </div>
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center leading-[0] left-0 right-[-6.22px] text-[#595959] text-[25px] text-center top-[calc(50%-2.5px)] translate-y-[-50%]">
        <p className="leading-[30px]">a</p>
      </div>
    </div>
  );
}

function Key11() {
  return (
    <div className="basis-0 grow h-[45px] min-h-px min-w-px relative rounded-[8.5px] shrink-0" data-name="Key">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8.5px]">
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 rounded-[8.5px]" />
        <div className="absolute bg-[#333333] inset-0 rounded-[8.5px]" />
      </div>
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center leading-[0] left-0 right-[-6.22px] text-[#595959] text-[25px] text-center top-[calc(50%-2.5px)] translate-y-[-50%]">
        <p className="leading-[30px]">s</p>
      </div>
    </div>
  );
}

function Key12() {
  return (
    <div className="basis-0 grow h-[45px] min-h-px min-w-px relative rounded-[8.5px] shrink-0" data-name="Key">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8.5px]">
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 rounded-[8.5px]" />
        <div className="absolute bg-[#333333] inset-0 rounded-[8.5px]" />
      </div>
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center leading-[0] left-0 right-[-6.22px] text-[#595959] text-[25px] text-center top-[calc(50%-2.5px)] translate-y-[-50%]">
        <p className="leading-[30px]">d</p>
      </div>
    </div>
  );
}

function Key13() {
  return (
    <div className="basis-0 grow h-[45px] min-h-px min-w-px relative rounded-[8.5px] shrink-0" data-name="Key">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8.5px]">
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 rounded-[8.5px]" />
        <div className="absolute bg-[#333333] inset-0 rounded-[8.5px]" />
      </div>
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center leading-[0] left-0 right-[-6.22px] text-[#595959] text-[25px] text-center top-[calc(50%-2.5px)] translate-y-[-50%]">
        <p className="leading-[30px]">f</p>
      </div>
    </div>
  );
}

function Key14() {
  return (
    <div className="basis-0 grow h-[45px] min-h-px min-w-px relative rounded-[8.5px] shrink-0" data-name="Key">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8.5px]">
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 rounded-[8.5px]" />
        <div className="absolute bg-[#333333] inset-0 rounded-[8.5px]" />
      </div>
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center leading-[0] left-0 right-[-6.22px] text-[#595959] text-[25px] text-center top-[calc(50%-2.5px)] translate-y-[-50%]">
        <p className="leading-[30px]">g</p>
      </div>
    </div>
  );
}

function Key15() {
  return (
    <div className="basis-0 grow h-[45px] min-h-px min-w-px relative rounded-[8.5px] shrink-0" data-name="Key">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8.5px]">
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 rounded-[8.5px]" />
        <div className="absolute bg-[#333333] inset-0 rounded-[8.5px]" />
      </div>
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center leading-[0] left-0 right-[-6.22px] text-[#595959] text-[25px] text-center top-[calc(50%-2.5px)] translate-y-[-50%]">
        <p className="leading-[30px]">h</p>
      </div>
    </div>
  );
}

function Key16() {
  return (
    <div className="basis-0 grow h-[45px] min-h-px min-w-px relative rounded-[8.5px] shrink-0" data-name="Key">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8.5px]">
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 rounded-[8.5px]" />
        <div className="absolute bg-[#333333] inset-0 rounded-[8.5px]" />
      </div>
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center leading-[0] left-0 right-[-6.22px] text-[#595959] text-[25px] text-center top-[calc(50%-2.5px)] translate-y-[-50%]">
        <p className="leading-[30px]">j</p>
      </div>
    </div>
  );
}

function Key17() {
  return (
    <div className="basis-0 grow h-[45px] min-h-px min-w-px relative rounded-[8.5px] shrink-0" data-name="Key">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8.5px]">
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 rounded-[8.5px]" />
        <div className="absolute bg-[#333333] inset-0 rounded-[8.5px]" />
      </div>
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center leading-[0] left-0 right-[-6.22px] text-[#595959] text-[25px] text-center top-[calc(50%-2.5px)] translate-y-[-50%]">
        <p className="leading-[30px]">k</p>
      </div>
    </div>
  );
}

function Key18() {
  return (
    <div className="basis-0 grow h-[45px] min-h-px min-w-px relative rounded-[8.5px] shrink-0" data-name="Key">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8.5px]">
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 rounded-[8.5px]" />
        <div className="absolute bg-[#333333] inset-0 rounded-[8.5px]" />
      </div>
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center leading-[0] left-0 right-[-6.22px] text-[#595959] text-[25px] text-center top-[calc(50%-2.5px)] translate-y-[-50%]">
        <p className="leading-[30px]">l</p>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row 2">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[20px] py-0 relative w-full">
          <Key10 />
          <Key11 />
          <Key12 />
          <Key13 />
          <Key14 />
          <Key15 />
          <Key16 />
          <Key17 />
          <Key18 />
        </div>
      </div>
    </div>
  );
}

function ShiftKey() {
  return (
    <div className="h-[45px] relative rounded-[8.5px] shrink-0 w-[44.667px]" data-name="Shift Key">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8.5px]">
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 rounded-[8.5px]" />
        <div className="absolute bg-[#333333] inset-0 rounded-[8.5px]" />
      </div>
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center leading-[0] left-0 right-[-0.33px] text-[#595959] text-[23px] text-center top-[calc(50%-0.5px)] translate-y-[-50%] uppercase">
        <p className="leading-[28px]">􀆝</p>
      </div>
    </div>
  );
}

function Key19() {
  return (
    <div className="basis-0 grow h-[45px] min-h-px min-w-px relative rounded-[8.5px] shrink-0" data-name="Key">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8.5px]">
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 rounded-[8.5px]" />
        <div className="absolute bg-[#333333] inset-0 rounded-[8.5px]" />
      </div>
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center leading-[0] left-0 right-[-8.02px] text-[#595959] text-[25px] text-center top-[calc(50%-2.5px)] translate-y-[-50%]">
        <p className="leading-[30px]">z</p>
      </div>
    </div>
  );
}

function Key20() {
  return (
    <div className="basis-0 grow h-[45px] min-h-px min-w-px relative rounded-[8.5px] shrink-0" data-name="Key">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8.5px]">
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 rounded-[8.5px]" />
        <div className="absolute bg-[#333333] inset-0 rounded-[8.5px]" />
      </div>
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center leading-[0] left-0 right-[-8.02px] text-[#595959] text-[25px] text-center top-[calc(50%-2.5px)] translate-y-[-50%]">
        <p className="leading-[30px]">x</p>
      </div>
    </div>
  );
}

function Key21() {
  return (
    <div className="basis-0 grow h-[45px] min-h-px min-w-px relative rounded-[8.5px] shrink-0" data-name="Key">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8.5px]">
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 rounded-[8.5px]" />
        <div className="absolute bg-[#333333] inset-0 rounded-[8.5px]" />
      </div>
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center leading-[0] left-0 right-[-8.02px] text-[#595959] text-[25px] text-center top-[calc(50%-2.5px)] translate-y-[-50%]">
        <p className="leading-[30px]">c</p>
      </div>
    </div>
  );
}

function Key22() {
  return (
    <div className="basis-0 grow h-[45px] min-h-px min-w-px relative rounded-[8.5px] shrink-0" data-name="Key">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8.5px]">
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 rounded-[8.5px]" />
        <div className="absolute bg-[#333333] inset-0 rounded-[8.5px]" />
      </div>
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center leading-[0] left-0 right-[-8.02px] text-[#595959] text-[25px] text-center top-[calc(50%-2.5px)] translate-y-[-50%]">
        <p className="leading-[30px]">v</p>
      </div>
    </div>
  );
}

function Key23() {
  return (
    <div className="basis-0 grow h-[45px] min-h-px min-w-px relative rounded-[8.5px] shrink-0" data-name="Key">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8.5px]">
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 rounded-[8.5px]" />
        <div className="absolute bg-[#333333] inset-0 rounded-[8.5px]" />
      </div>
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center leading-[0] left-0 right-[-8.02px] text-[#595959] text-[25px] text-center top-[calc(50%-2.5px)] translate-y-[-50%]">
        <p className="leading-[30px]">b</p>
      </div>
    </div>
  );
}

function Key24() {
  return (
    <div className="basis-0 grow h-[45px] min-h-px min-w-px relative rounded-[8.5px] shrink-0" data-name="Key">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8.5px]">
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 rounded-[8.5px]" />
        <div className="absolute bg-[#333333] inset-0 rounded-[8.5px]" />
      </div>
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center leading-[0] left-0 right-[-8.02px] text-[#595959] text-[25px] text-center top-[calc(50%-2.5px)] translate-y-[-50%]">
        <p className="leading-[30px]">n</p>
      </div>
    </div>
  );
}

function Key25() {
  return (
    <div className="basis-0 grow h-[45px] min-h-px min-w-px relative rounded-[8.5px] shrink-0" data-name="Key">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8.5px]">
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 rounded-[8.5px]" />
        <div className="absolute bg-[#333333] inset-0 rounded-[8.5px]" />
      </div>
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center leading-[0] left-0 right-[-8.02px] text-[#595959] text-[25px] text-center top-[calc(50%-2.5px)] translate-y-[-50%]">
        <p className="leading-[30px]">m</p>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="basis-0 content-stretch flex gap-[6px] grow h-[45px] items-start min-h-px min-w-px relative shrink-0" data-name="Row 3">
      <Key19 />
      <Key20 />
      <Key21 />
      <Key22 />
      <Key23 />
      <Key24 />
      <Key25 />
    </div>
  );
}

function DeleteKey() {
  return (
    <div className="relative rounded-[8.5px] shrink-0 size-[45px]" data-name="Delete Key">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8.5px]">
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 rounded-[8.5px]" />
        <div className="absolute bg-[#333333] inset-0 rounded-[8.5px]" />
      </div>
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center leading-[0] left-0 right-0 text-[#595959] text-[23px] text-center top-[calc(50%-0.5px)] translate-y-[-50%] uppercase">
        <p className="leading-[28px]">􁂈</p>
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex gap-[14.25px] items-center relative shrink-0 w-full" data-name="Row 3">
      <ShiftKey />
      <Row2 />
      <DeleteKey />
    </div>
  );
}

function KeyboardSwitch() {
  return (
    <div className="h-[45px] relative rounded-[8.5px] shrink-0 w-[91.667px]" data-name="Keyboard Switch">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8.5px]">
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 rounded-[8.5px]" />
        <div className="absolute bg-[#333333] inset-0 rounded-[8.5px]" />
      </div>
      <div className="absolute flex flex-col font-['SF_Compact_Rounded:Regular',sans-serif] justify-center leading-[0] left-[-2px] not-italic right-[-2.33px] text-[#595959] text-[18px] text-center top-1/2 translate-y-[-50%]">
        <p className="leading-[21px]">ABC</p>
      </div>
    </div>
  );
}

function Space() {
  return (
    <div className="basis-0 grow h-[45px] min-h-px min-w-px relative rounded-[8.5px] shrink-0" data-name="Space">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8.5px]">
        <div className="absolute bg-[rgba(255,255,255,0.3)] inset-0 rounded-[8.5px]" />
        <div className="absolute bg-[#333333] inset-0 rounded-[8.5px]" />
      </div>
      <div className="absolute flex flex-col font-['SF_Compact:Regular',sans-serif] font-[457.9] justify-center leading-[0] left-0 right-[-55.67px] text-[#595959] text-[25px] text-center top-[calc(50%-2.5px)] translate-y-[-50%]">
        <p className="leading-[30px]"> </p>
      </div>
    </div>
  );
}

function Space1() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-[45px] items-center min-h-px min-w-px relative rounded-[8.5px] shrink-0" data-name="Space">
      <Space />
    </div>
  );
}

function Return() {
  return (
    <div className="h-[45px] relative rounded-[8.5px] shrink-0 w-[92px]" data-name="Return">
      <div className="absolute bg-[#0088ff] inset-0 rounded-[8.5px]" data-name="BG" />
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[42px] justify-center leading-[0] left-0 right-0 text-[19px] text-center text-white top-[calc(50%-0.5px)] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">􀅇</p>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Row 4">
      <KeyboardSwitch />
      <Space1 />
      <Return />
    </div>
  );
}

function Keys() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[11px] h-[221px] items-center pb-0 pt-[12px] px-[8.5px] relative shrink-0 w-[346px]" data-name="Keys">
      <Row />
      <Row1 />
      <Row4 />
      <Row3 />
    </div>
  );
}

function EmojiAndMic() {
  return (
    <div className="h-[70px] relative shrink-0 w-full" data-name="Emoji and Mic">
      <div className="size-full">
        <div className="box-border content-stretch flex h-[70px] items-start justify-between pb-[15px] pl-[36px] pr-[39px] pt-[27px] relative w-full">
          <div className="relative shrink-0 size-[26.92px]" data-name="Emoji">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(34, 43, 89, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
                <path d={svgPaths.p2d450400} fill="var(--fill-0, #222B59)" fillOpacity="0.63" id="Emoji" />
              </svg>
            </div>
          </div>
          <div className="h-[28.213px] relative shrink-0 w-[18.866px]" data-name="Mic">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(34, 43, 89, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 29">
                <path d={svgPaths.p10f8a600} fill="var(--fill-0, #222B59)" fillOpacity="0.63" id="Mic" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Keyboard() {
  return (
    <div className="box-border content-stretch flex flex-col h-[364px] items-center pb-[10px] pt-[12px] px-0 relative shrink-0 w-[374px]" data-name="Keyboard">
      <Background />
      <Autocorrection />
      <Keys />
      <EmojiAndMic />
    </div>
  );
}

function Keyboard1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[316px] items-end left-[9px] top-[529px] w-[366px]" data-name="Keyboard">
      <Keyboard />
    </div>
  );
}

function Mic() {
  return (
    <div className="absolute h-[24px] left-[270px] top-[482px] w-[28px]" data-name="Mic">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 24">
        <g id="Mic">
          <rect height="24" stroke="var(--stroke-0, black)" width="28" />
          <path d={svgPaths.p2767ba00} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

export default function CustomerSupportChatKeyboard() {
  return (
    <div className="bg-white relative size-full" data-name="Customer Support--Chat--Keyboard">
      <MaskGroup />
      <BarsStatusBarIPhoneLight />
      <BarsHomeIndicatorIPhoneLightPortrait />
      <ComponentsMobileAppbarSecondery />
      <BarsHomeIndicatorIPhoneLightPortrait1 />
      <Group2 />
      <Group7 />
      <Group4 />
      <div className="absolute bg-white h-[99px] left-0 top-[430px] w-[375px]" />
      <FormElementsMobileInputFieldsEnabledNormal />
      <Group6 />
      <div className="absolute h-[33px] left-[19px] top-[calc(50%-167.5px)] translate-y-[-50%] w-[35px]" data-name="Avatar">
        <img alt="" className="block max-w-none size-full" height="33" src={imgAvatar} width="35" />
      </div>
      <div className="absolute h-[33px] left-[24px] top-[calc(50%-21.5px)] translate-y-[-50%] w-[35px]" data-name="Avatar">
        <img alt="" className="block max-w-none size-full" height="33" src={imgAvatar} width="35" />
      </div>
      <div className="absolute left-[344px] size-[16px] top-[54px]" data-name="image 32">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage32} />
      </div>
      <Keyboard1 />
      <Mic />
    </div>
  );
}