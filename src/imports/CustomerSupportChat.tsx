import svgPaths from "./svg-ptxcd30mk0";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import imgAvatar from "figma:asset/b30b831465a254517e6511f7e1fb632c97b32da7.png";
import imgImage32 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import { imgMain1 } from "./svg-m1x4x";

function Group11() {
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

function Group12() {
  return (
    <div className="absolute contents inset-[-15.21%_-58.02%_73.97%_-7.26%]">
      <Group11 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-gradient-to-b from-[rgba(252,252,252,0.6)] inset-[0.02%_-0.16%_73.97%_-0.01%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.16px_0px] mask-size-[374.954px_811.834px] to-[rgba(255,255,255,0.6)]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute bottom-[-0.03%] contents left-0 right-[-0.06%] top-[74.69%]">
      <div className="absolute bottom-[-0.03%] flex items-center justify-center left-0 right-[-0.06%] top-[74.69%]">
        <div className="flex-none h-[375.296px] rotate-[90deg] skew-x-[358.836deg] w-[198.125px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.108px_-606.356px] mask-size-[374.954px_811.834px] relative size-full" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
            <div className="absolute inset-0 opacity-75 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[415.76%] left-[-1201.44%] max-w-none top-[-144.82%] w-[1987.8%]" src={imgMain2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute bottom-[-0.03%] contents left-0 right-[-0.06%] top-[54.31%]">
      <Group10 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-[rgba(254,254,254,0.55)] bottom-[0.01%] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.107px_-440.834px] mask-size-[374.954px_811.834px] right-[-0.02%] top-[54.31%]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute bottom-0 contents left-[0.03%] right-[-0.02%] top-[0.02%]" data-name="Mask Group">
      <Group12 />
      <Group13 />
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

function ActionSend24Px() {
  return (
    <div className="absolute right-[31px] size-[24px] top-[calc(50%+279px)] translate-y-[-50%]" data-name="action/send_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="action/send_24px">
          <path clipRule="evenodd" d={svgPaths.p24b77200} fill="var(--fill-0, #37474F)" fillRule="evenodd" id="icon/action/send_24px" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[59px] top-[262px]">
      <div className="absolute bg-[#ffd037] h-[91px] left-[59px] rounded-[9px] top-[262px] w-[297px]" />
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[74.455px] leading-[normal] left-[80px] not-italic text-[16px] text-white top-[270.27px] tracking-[0.44px] w-[253.087px]" dir="auto">
        Assalam-o-Alaikum! I’m KraveAssist. How can I help you today
      </p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[59px] top-[262px]">
      <Group />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[59px] top-[449px]">
      <div className="absolute bg-[#ffd037] h-[65px] left-[59px] rounded-[9px] top-[449px] w-[295px]" />
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[21.343px] leading-[normal] left-[83.29px] not-italic text-[16px] text-white top-[461px] tracking-[0.44px] w-[242.509px]">Please provide complete details</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[59px] top-[574px]">
      <div className="absolute bg-[#ffd037] h-[65px] left-[59px] rounded-[9px] top-[574px] w-[295px]" />
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[21.343px] leading-[normal] left-[73px] not-italic text-[16px] text-white top-[586px] tracking-[0.44px] w-[278.913px]">Let me see how I can help you</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[59px] top-[449px]">
      <Group3 />
      <Group8 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[194px] top-[209px]">
      <div className="absolute bg-[#236cd9] h-[40.707px] left-[194px] rounded-[9px] top-[209px] w-[162px]" />
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[36.184px] leading-[normal] left-[211px] not-italic text-[16px] text-white top-[214px] tracking-[0.44px] w-[135.48px]">I want a Refund</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[137px] top-[363px]">
      <div className="absolute bg-[#236cd9] h-[76px] left-[137px] rounded-[9px] top-[363px] w-[217px]" />
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[67.785px] leading-[normal] left-[151.68px] not-italic text-[16px] text-white top-[371.09px] tracking-[0.44px] w-[200.227px]">I am not satisfied with my order.</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[137px] top-[521px]">
      <div className="absolute bg-[#236cd9] h-[42px] left-[137px] rounded-[9px] top-[521px] w-[217px]" />
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[67.785px] leading-[normal] left-[151.68px] not-italic text-[16px] text-white top-[529.09px] tracking-[0.44px] w-[200.227px]">One item is missing</p>
    </div>
  );
}

function Group4() {
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

function Group5() {
  return (
    <div className="absolute contents inset-[13.3%_4.27%_76.11%_4.27%]">
      <div className="absolute bg-[rgba(243,122,32,0.14)] inset-[13.3%_4.27%_76.11%_4.27%] rounded-[12px]" />
      <p className="absolute font-['Poppins:Medium',sans-serif] inset-[14.41%_49.33%_82.64%_24.53%] leading-[normal] not-italic text-[#37474f] text-[16px] text-nowrap tracking-[0.6px] whitespace-pre">Order #027</p>
      <Group4 />
      <p className="absolute capitalize font-['Poppins:Regular',sans-serif] inset-[20.07%_55.2%_77.71%_24.53%] leading-[normal] not-italic text-[12px] text-[rgba(55,71,79,0.72)] text-nowrap whitespace-pre">July 26, 2025</p>
      <p className="absolute capitalize font-['Poppins:Medium',sans-serif] inset-[17.61%_60.27%_80.17%_24.53%] leading-[normal] not-italic text-[#ffd037] text-[12px] text-nowrap whitespace-pre">Delivered</p>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] inset-[16.63%_9.33%_79.68%_74.67%] leading-[normal] not-italic text-[#f37a20] text-[20px] text-nowrap text-right whitespace-pre">Rs 129</p>
    </div>
  );
}

function ButtonsMobileSolidTextSymbolTextSymbol() {
  return (
    <div className="absolute bg-[#f37a20] inset-[89.53%_2.93%_4.56%_5.6%]" data-name="buttons/mobile/solid/text + symbol/text → symbol">
      <div className="absolute bg-[#f37a20] inset-0 rounded-[8px]" data-name="Rectangle" />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[164px] not-italic text-[16px] text-center text-nowrap text-white top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">End Chat</p>
      </div>
    </div>
  );
}

function Camera() {
  return (
    <div className="h-[22px] relative w-[24px]" data-name="Camera">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 22">
        <g id="Camera" opacity="0.7">
          <g id="Icon">
            <path d={svgPaths.p237d0d80} stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.pdb43d80} stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Mic() {
  return (
    <div className="absolute h-[24px] left-[273px] top-[674px] w-[28px]" data-name="Mic">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 24">
        <g id="Mic">
          <rect height="24" stroke="var(--stroke-0, black)" width="28" />
          <path d={svgPaths.p2767ba00} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

export default function CustomerSupportChat() {
  return (
    <div className="bg-white relative size-full" data-name="Customer Support--Chat">
      <MaskGroup />
      <BarsStatusBarIPhoneLight />
      <BarsHomeIndicatorIPhoneLightPortrait />
      <ComponentsMobileAppbarSecondery />
      <BarsHomeIndicatorIPhoneLightPortrait1 />
      <div className="absolute bg-[#f0f1f2] inset-[81.16%_2.93%_11.95%_5.6%] rounded-[8px]" data-name="Rectangle" />
      <ActionSend24Px />
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] inset-[83.13%_26.67%_13.92%_9.33%] justify-center leading-[0] not-italic opacity-[0.87] text-[16px] text-[rgba(55,71,79,0.72)] tracking-[0.44px]">
        <p className="leading-[normal]">I can share a picture</p>
      </div>
      <Group1 />
      <Group2 />
      <Group9 />
      <Group6 />
      <Group7 />
      <Group5 />
      <ButtonsMobileSolidTextSymbolTextSymbol />
      <div className="absolute flex h-[22px] items-center justify-center left-[230px] top-[674px] w-[24px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <Camera />
        </div>
      </div>
      <div className="absolute h-[33px] left-[13px] top-[calc(50%-125.5px)] translate-y-[-50%] w-[35px]" data-name="Avatar">
        <img alt="" className="block max-w-none size-full" height="33" src={imgAvatar} width="35" />
      </div>
      <div className="absolute h-[33px] left-[11px] top-[calc(50%+184.5px)] translate-y-[-50%] w-[35px]" data-name="Avatar">
        <img alt="" className="block max-w-none size-full" height="33" src={imgAvatar} width="35" />
      </div>
      <div className="absolute h-[33px] left-[13px] top-[calc(50%+59.5px)] translate-y-[-50%] w-[35px]" data-name="Avatar">
        <img alt="" className="block max-w-none size-full" height="33" src={imgAvatar} width="35" />
      </div>
      <div className="absolute left-[342px] size-[16px] top-[54px]" data-name="image 32">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage32} />
      </div>
      <Mic />
    </div>
  );
}