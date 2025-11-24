import svgPaths from "./svg-fyws27ljq5";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import imgImage14 from "figma:asset/d03302e0f3e2f3fa46271f24a22a8ff38ac65bc0.png";
import imgImage29 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import { imgMain1 } from "./svg-lldlw";

function Group9() {
  return (
    <div className="absolute contents inset-[-15.22%_-58.02%_73.97%_-7.26%]">
      <div className="absolute flex inset-[-15.22%_-58.02%_73.97%_-7.26%] items-center justify-center">
        <div className="flex-none h-[593.695px] rotate-[263.271deg] skew-x-[4.646deg] w-[322.555px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[27.34px_161.602px] mask-size-[374.954px_1060.83px] opacity-80 relative size-full" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
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
    <div className="absolute contents inset-[-15.22%_-58.02%_73.97%_-7.26%]">
      <Group9 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-gradient-to-b from-[rgba(252,252,252,0.6)] inset-[0.02%_-0.16%_73.97%_-0.01%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.16px_0px] mask-size-[374.954px_1060.83px] to-[rgba(255,255,255,0.6)]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[81.29%_-0.06%_-0.03%_0.03%]">
      <div className="absolute flex inset-[81.29%_-0.06%_-0.03%_0.03%] items-center justify-center">
        <div className="flex-none h-[375.183px] rotate-[90deg] skew-x-[358.875deg] w-[191.477px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-862.343px] mask-size-[374.954px_1060.83px] relative size-full" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
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
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-[rgba(254,254,254,0.55)] bottom-0 left-[0.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-702.376px] mask-size-[374.954px_1060.83px] right-[-0.02%] top-[66.22%]" style={{ maskImage: `url('${imgMain1}')` }} />
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
    <div className="absolute bottom-[95.38%] left-0 right-0 top-0" data-name="Bars / Status Bar / iPhone / Light">
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
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[58px] not-italic text-[#37474f] text-[20px] text-nowrap top-[47.32px] whitespace-pre">Order #345</p>
      <NavigationArrowBackward24Px />
    </div>
  );
}

function ActionEvent24Px() {
  return (
    <div className="absolute left-[17px] size-[28px] top-[166px]" data-name="action/event_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="action/event_24px">
          <path clipRule="evenodd" d={svgPaths.pfa57800} fill="var(--fill-0, #37474F)" fillRule="evenodd" id="icon/action/event_24px" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[21.49%_4.13%_78.42%_4.53%]">
      <div className="absolute inset-[-50%_-0.29%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 345 2">
          <g id="Group 97">
            <path d="M1 1H81" id="Line" stroke="var(--stroke-0, #FFD037)" strokeLinecap="round" strokeWidth="2" />
            <path d="M88.5 1H168.5" id="Line_2" stroke="var(--stroke-0, #FFD037)" strokeLinecap="round" strokeWidth="2" />
            <path d="M176 1H256" id="Line_3" stroke="var(--stroke-0, #37474F)" strokeLinecap="round" strokeOpacity="0.14" strokeWidth="2" />
            <path d="M263.5 1H343.5" id="Line_4" stroke="var(--stroke-0, #37474F)" strokeLinecap="round" strokeOpacity="0.14" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute left-[16px] size-[42px] top-[467px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g id="Group 3">
          <path clipRule="evenodd" d={svgPaths.p99cfc00} fill="var(--fill-0, #236CD9)" fillOpacity="0.121039" fillRule="evenodd" id="Oval" />
          <g id="icon / action / location / full">
            <path clipRule="evenodd" d={svgPaths.p28e25700} fill="var(--fill-0, #37474F)" fillRule="evenodd" id="icon/maps/place_24px" />
            <mask height="20" id="mask0_8_4826" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="15" x="14" y="11">
              <path clipRule="evenodd" d={svgPaths.p28e25700} fill="var(--fill-0, white)" fillRule="evenodd" id="icon/maps/place_24px_2" />
            </mask>
            <g mask="url(#mask0_8_4826)"></g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents font-['Poppins:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#37474f] text-[15px] text-nowrap top-[559px] tracking-[0.6px] whitespace-pre">
      <p className="absolute left-[16px] top-[559px]">Subtotal</p>
      <p className="absolute left-[358px] text-right top-[559px] translate-x-[-100%]">Rs 1252</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents font-['Poppins:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#37474f] text-[15px] text-nowrap top-[599px] tracking-[0.6px] whitespace-pre">
      <p className="absolute left-[16px] top-[599px]">Delivery Charge</p>
      <p className="absolute left-[358px] text-right top-[599px] translate-x-[-100%]">Rs 100</p>
    </div>
  );
}

function NavigationArrowForwordIos24Px() {
  return (
    <div className="absolute left-[313px] size-[24px] top-[771px]" data-name="navigation/arrow_forword_ios_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="navigation/arrow_forword_ios_24px"></g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[16px] top-[740px]">
      <div className="absolute bg-[rgba(94,196,1,0.17)] inset-[69.75%_4.53%_22.24%_4.27%] rounded-[12px]" />
      <div className="absolute font-['Poppins:Regular',sans-serif] h-[41px] leading-[normal] left-[90px] not-italic text-[#37474f] text-[0px] text-[14px] top-[762px] w-[229px]">
        <p className="mb-0 text-[rgba(55,71,79,0.72)]">You selected</p>
        <p className="font-['Poppins:SemiBold',sans-serif]">Cash on Delivery</p>
      </div>
      <NavigationArrowForwordIos24Px />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[16px] top-[699px]">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[16px] not-italic text-[#37474f] text-[16px] text-nowrap top-[699px] tracking-[0.6px] whitespace-pre">Payment Method</p>
      <Group5 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents font-['Poppins:Medium',sans-serif] leading-[normal] left-[17px] not-italic text-[#37474f] text-[15px] text-nowrap top-[639px] tracking-[0.6px] whitespace-pre">
      <p className="absolute left-[17px] top-[639px]">Total</p>
      <p className="absolute left-[358px] text-right top-[639px] translate-x-[-100%]">Rs 1352</p>
    </div>
  );
}

function BarsHomeIndicatorIPhoneLightPortrait() {
  return (
    <div className="absolute inset-[96.32%_31.73%_0.1%_32.53%]" data-name="Bars / Home Indicator / iPhone / Light - Portrait">
      <div className="absolute bg-black bottom-[11.89px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function CommunicationChatBubbleOutline24Px() {
  return (
    <div className="absolute right-[16px] size-[24px] top-1/2 translate-y-[-50%]" data-name="communication/chat_bubble_outline_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="communication/chat_bubble_outline_24px">
          <path clipRule="evenodd" d={svgPaths.p262f4d00} fill="var(--fill-0, white)" fillRule="evenodd" id="icon/communication/chat_bubble_outline_24px" />
        </g>
      </svg>
    </div>
  );
}

function ButtonsMobileSolidTextSymbolTextSymbol() {
  return (
    <div className="absolute h-[48px] left-[17px] top-[974px] w-[343px]" data-name="buttons/mobile/solid/text + symbol/text → symbol">
      <div className="absolute bg-[#f37a20] inset-0 rounded-[8px]" data-name="Rectangle" />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[164px] not-italic text-[16px] text-center text-nowrap text-white top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">Contact with Support</p>
      </div>
      <CommunicationChatBubbleOutline24Px />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[17px] top-[974px]">
      <BarsHomeIndicatorIPhoneLightPortrait />
      <ButtonsMobileSolidTextSymbolTextSymbol />
    </div>
  );
}

function ButtonsMobileSolidText() {
  return (
    <div className="absolute h-[48px] left-[16px] top-[355px] w-[343px]" data-name="buttons/mobile/solid/text">
      <div className="absolute bg-[#ffd037] inset-0 rounded-[8px]" data-name="Rectangle" />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[16px] text-black text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">View Order Details</p>
      </div>
    </div>
  );
}

function ButtonsMobileSolidText1() {
  return (
    <div className="absolute h-[48px] left-[16px] top-[286px] w-[343px]" data-name="buttons/mobile/solid/text">
      <div className="absolute bg-[#ffd037] inset-0 rounded-[8px]" data-name="Rectangle" />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[16px] text-black text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">View Delivery Details</p>
      </div>
    </div>
  );
}

export default function OrderScheduledExpanded() {
  return (
    <div className="bg-white relative size-full" data-name="Order--Scheduled--Expanded">
      <MaskGroup />
      <BarsStatusBarIPhoneLight />
      <ComponentsMobileAppbarSecondery />
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[17px] not-italic text-[#37474f] text-[16px] text-nowrap top-[121px] tracking-[0.6px] whitespace-pre">Estimated Delivery</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[59px] not-italic text-[#37474f] text-[32px] text-nowrap top-[157px] tracking-[1.28px] whitespace-pre">30 - 40 mins</p>
      <ActionEvent24Px />
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[32px] left-[359px] not-italic text-[#f37a20] text-[17px] text-nowrap text-right top-[121px] tracking-[0.9775px] translate-x-[-100%] whitespace-pre">6:30 pm</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[17px] not-italic text-[#777777] text-[16px] text-nowrap top-[242px] tracking-[0.44px] whitespace-pre">We are packaging your products</p>
      <Group4 />
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[16px] not-italic text-[#37474f] text-[16px] text-nowrap top-[423px] tracking-[0.6px] whitespace-pre">Delivery Location</p>
      <Group />
      <Group3 />
      <Group2 />
      <p className="absolute font-['Poppins:Regular',sans-serif] inset-[80.58%_4.27%_14.42%_4.27%] leading-[normal] not-italic text-[14px] text-[rgba(55,71,79,0.72)]">Cash on derivery has some potential risks of spreading contamination. You can select other payment methods for a contactless safe delivery.</p>
      <Group6 />
      <Group1 />
      <div className="absolute h-px left-[16px] top-[538px] w-[343px]" data-name="Line Copy">
        <div className="absolute bottom-0 left-[-0.15%] right-[-0.15%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 344 1">
            <path d="M0.5 0.5H343.5" id="Line" stroke="var(--stroke-0, #E1E1E1)" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <Group7 />
      <ButtonsMobileSolidText />
      <ButtonsMobileSolidText1 />
      <div className="absolute h-[28px] left-[32px] top-[770px] w-[42px]" data-name="image 14">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage14} />
      </div>
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[21px] leading-[normal] left-[80px] not-italic text-[#37474f] text-[14px] top-[480px] w-[131px]">IBA Main Campus</p>
      <div className="absolute left-[343px] size-[16px] top-[49px]" data-name="image 29">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage29} />
      </div>
    </div>
  );
}