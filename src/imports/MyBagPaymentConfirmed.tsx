import svgPaths from "./svg-4hvx16y4tf";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import imgRectangle1 from "figma:asset/ed1251a213e082b06a0dd339205a93c2bdf6ba0e.png";
import imgRectangle2 from "figma:asset/9475e6dd9841e4c17b641dc82421452e212b8d88.png";
import imgRectangle3 from "figma:asset/6dc11779b059054bc7b6348fba96db1d8b46bcd5.png";
import imgImage14 from "figma:asset/d03302e0f3e2f3fa46271f24a22a8ff38ac65bc0.png";
import imgImage26 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import { imgMain1 } from "./svg-ol1wh";

function Group26() {
  return (
    <div className="absolute contents inset-[-15.22%_-58.02%_73.98%_-7.26%]">
      <div className="absolute flex inset-[-15.22%_-58.02%_73.98%_-7.26%] items-center justify-center">
        <div className="flex-none h-[605.241px] rotate-[265.239deg] skew-x-[10.962deg] w-[455.372px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[27.34px_228.934px] mask-size-[374.954px_1502.83px] opacity-80 relative size-full" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[333.28%] left-[-725%] max-w-none top-[-109.86%] w-[1406.64%]" src={imgMain2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents inset-[-15.22%_-58.02%_73.98%_-7.26%]">
      <Group26 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-gradient-to-b from-[rgba(252,252,252,0.6)] inset-[0.01%_-0.16%_73.98%_-0.01%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.16px_0px] mask-size-[374.954px_1502.83px] to-[rgba(255,255,255,0.6)]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-[81.29%_-0.06%_-0.03%_0.03%]">
      <div className="absolute flex inset-[81.29%_-0.06%_-0.03%_0.03%] items-center justify-center">
        <div className="flex-none h-[375.256px] rotate-[90deg] skew-x-[358.406deg] w-[271.256px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-1221.64px] mask-size-[374.954px_1502.83px] relative size-full" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
            <div className="absolute inset-0 opacity-75 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[415.76%] left-[-1201.44%] max-w-none top-[-144.82%] w-[1987.8%]" src={imgMain2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents inset-[66.21%_-0.06%_-0.03%_0.03%]">
      <Group25 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-[rgba(254,254,254,0.55)] bottom-0 left-[0.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-995.023px] mask-size-[374.954px_1502.83px] right-[-0.02%] top-[66.21%]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function NavigationArrowBackward24Px() {
  return (
    <div className="absolute left-[5px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.893px_-54.834px] mask-size-[374.954px_1502.83px] size-[24px] top-[55px]" data-name="navigation/arrow_backward_24px" style={{ maskImage: `url('${imgMain1}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="navigation/arrow_backward_24px">
          <path d={svgPaths.p6a58300} fill="var(--fill-0, #37474F)" id="icon/navigation/arrow_backward_24px" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute bottom-0 contents left-[0.03%] right-[-0.02%] top-[0.01%]" data-name="Mask Group">
      <Group27 />
      <Group28 />
      <NavigationArrowBackward24Px />
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
    <div className="absolute bottom-[97.07%] left-0 right-0 top-0" data-name="Bars / Status Bar / iPhone / Light">
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

function ButtonsMobileSolidText() {
  return (
    <div className="absolute h-[48px] left-[16px] top-[511px] w-[343px]" data-name="buttons/mobile/solid/text">
      <div className="absolute bg-[#ffd037] inset-0 rounded-[8px]" data-name="Rectangle" />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[calc(50%+1px)] not-italic text-[16px] text-black text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">Add More Product</p>
      </div>
    </div>
  );
}

function NavigationExpandMore24Px() {
  return (
    <div className="absolute right-[17px] size-[24px] top-1/2 translate-y-[-50%]" data-name="navigation/expand_more_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="navigation/expand_more_24px">
          <path d={svgPaths.p21541c00} fill="var(--fill-0, #37474F)" id="icon/navigation/expand_more_24px" />
        </g>
      </svg>
    </div>
  );
}

function ActionEvent24Px() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="action/event_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="action/event_24px">
          <path clipRule="evenodd" d={svgPaths.p7e6ecf0} fill="var(--fill-0, #37474F)" fillRule="evenodd" id="icon/action/event_24px" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <ActionEvent24Px />
    </div>
  );
}

function Frame() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.87] relative shrink-0 text-[16px] text-[rgba(55,71,79,0.72)] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Select Date</p>
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
      <NavigationExpandMore24Px />
      <Group />
    </div>
  );
}

function FormElementsMobileInputFieldsActiveEmpty() {
  return (
    <div className="absolute h-[52px] left-[16px] top-[643px] w-[343px]" data-name="form elements/mobile/input fields/active/empty">
      <Group7Copy />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute left-[16px] size-[42px] top-[928px]">
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

function Group4() {
  return (
    <div className="absolute contents font-['Poppins:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#37474f] text-[15px] text-nowrap top-[1017px] tracking-[0.6px] whitespace-pre">
      <p className="absolute left-[16px] top-[1017px]">Subtotal</p>
      <p className="absolute left-[358px] text-right top-[1017px] translate-x-[-100%]">Rs 1252</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents font-['Poppins:Regular',sans-serif] leading-[normal] left-[16px] not-italic text-[#37474f] text-[15px] text-nowrap top-[1057px] tracking-[0.6px] whitespace-pre">
      <p className="absolute left-[16px] top-[1057px]">Delivery Charge</p>
      <p className="absolute left-[358px] text-right top-[1057px] translate-x-[-100%]">Rs 100</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents font-['Poppins:Medium',sans-serif] leading-[normal] left-[17px] not-italic text-[#37474f] text-[15px] text-nowrap top-[1097px] tracking-[0.6px] whitespace-pre">
      <p className="absolute left-[17px] top-[1097px]">Total</p>
      <p className="absolute left-[358px] text-right top-[1097px] translate-x-[-100%]">Rs 1352</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[16px] top-[1017px]">
      <Group4 />
      <Group3 />
      <Group2 />
    </div>
  );
}

function ActionBag24Px() {
  return (
    <div className="absolute right-[16px] size-[24px] top-1/2 translate-y-[-50%]" data-name="action/bag_24px">
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
    <div className="absolute h-[48px] left-[17px] top-[1314px] w-[343px]" data-name="buttons/mobile/solid/text + symbol/text → symbol">
      <div className="absolute bg-[#ffd037] inset-0 rounded-[8px]" data-name="Rectangle" />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[164px] not-italic text-[16px] text-black text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">Place Order</p>
      </div>
      <ActionBag24Px />
    </div>
  );
}

function ComponentsMobileAppbarPrimary1() {
  return (
    <div className="absolute h-[88px] left-[15px] top-0 w-[375px]" data-name="components/mobile/appbar/primary">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[16px] not-italic text-[#37474f] text-[20px] text-nowrap top-[calc(50%+7.5px)] whitespace-pre">My Cart</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[26px] top-[1158px]">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[26px] not-italic text-[#37474f] text-[16px] text-nowrap top-[1158px] tracking-[0.6px] whitespace-pre">Payment Method</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[16px] top-[714px]">
      <div className="absolute bg-[#f0f1f2] h-[52px] left-[16px] rounded-[9px] top-[714px] w-[103px]" />
      <div className="absolute capitalize flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[32px] not-italic text-[12px] text-[rgba(55,71,79,0.72)] text-nowrap top-[741px] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">8 AM - 11 AM</p>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-[16px] top-[782px]">
      <div className="absolute bg-[#f0f1f2] h-[52px] left-[16px] rounded-[9px] top-[782px] w-[103px]" />
      <div className="absolute capitalize flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[32px] not-italic text-[12px] text-[rgba(55,71,79,0.72)] text-nowrap top-[809px] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">2 PM - 4 PM</p>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[135px] top-[714px]">
      <div className="absolute bg-[#f0f1f2] h-[52px] left-[135px] rounded-[9px] top-[714px] w-[103px]">
        <div aria-hidden="true" className="absolute border-2 border-[#ffd037] border-solid inset-0 pointer-events-none rounded-[9px]" />
      </div>
      <div className="absolute capitalize flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[151px] not-italic text-[#ffd037] text-[12px] text-nowrap top-[741px] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">11 AM - 12 pM</p>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents left-[135px] top-[782px]">
      <div className="absolute bg-[#f0f1f2] h-[52px] left-[135px] rounded-[9px] top-[782px] w-[103px]" />
      <div className="absolute capitalize flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[151px] not-italic text-[12px] text-[rgba(55,71,79,0.72)] text-nowrap top-[809px] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">4 PM - 6 PM</p>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[254px] top-[714px]">
      <div className="absolute bg-[#f0f1f2] h-[52px] left-[254px] rounded-[9px] top-[714px] w-[103px]" />
      <div className="absolute capitalize flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[270px] not-italic text-[12px] text-[rgba(55,71,79,0.72)] text-nowrap top-[741px] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">12 PM - 2 PM</p>
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents left-[254px] top-[782px]">
      <div className="absolute bg-[#f0f1f2] h-[52px] left-[254px] rounded-[9px] top-[782px] w-[103px]" />
      <div className="absolute capitalize flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[270px] not-italic text-[12px] text-[rgba(55,71,79,0.72)] text-nowrap top-[809px] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">6 PM - 8 PM</p>
      </div>
    </div>
  );
}

function ListProductNormal() {
  return (
    <div className="absolute h-[150px] left-px top-[319px] w-[373px]" data-name="list/product/normal">
      <div className="absolute bottom-[1.22%] left-0 right-[0.27%] top-0" />
      <div className="absolute inset-[12.8%_64.89%_13.41%_4.52%] rounded-[9px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[9px] size-full" src={imgRectangle1} />
      </div>
      <div className="absolute bottom-0 left-[0.27%] right-0 top-[98.78%]" data-name="divider">
        <div className="absolute bottom-[-2.4%] left-[-0.13%] right-0 top-[-2.4%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 373 2">
            <path d={svgPaths.p754ac00} id="divider" stroke="var(--stroke-0, #F0F0F0)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <p className="absolute bottom-1/2 font-['Poppins:Medium',sans-serif] leading-[normal] left-[39.63%] not-italic right-[6.38%] text-[#37474f] text-[16px] top-[16.46%] tracking-[0.6px]">Nestle Nido Full Cream Milk Powder Instant</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] absolute decoration-solid font-['Poppins:SemiBold',sans-serif] inset-[51.22%_60.11%_34.78%_39.89%] leading-[normal] not-italic text-[14px] text-[rgba(55,71,79,0.54)] text-nowrap whitespace-pre">&nbsp;</p>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] inset-[65.24%_43.21%_14.76%_39.63%] leading-[normal] not-italic text-[#f37a20] text-[20px] text-nowrap whitespace-pre">Rs 702</p>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents left-px top-[319px]">
      <ListProductNormal />
    </div>
  );
}

function ActionMinimize24Px() {
  return (
    <div className="absolute left-[249px] size-[14px] top-[calc(50%-480.5px)] translate-y-[-50%]" data-name="action/minimize_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="action/minimize_24px">
          <rect fill="#F37A20" height="14" width="14" />
          <path d={svgPaths.p1c69f680} fill="var(--fill-0, white)" id="icon/action/minimize_24px" />
        </g>
      </svg>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents left-[238px] top-[253px]">
      <div className="absolute bg-[#f37a20] left-[238px] rounded-[7px] size-[35px] top-[253px]" />
      <ActionMinimize24Px />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents left-[238px] top-[253px]">
      <Group15 />
    </div>
  );
}

function ContentAdd24Px() {
  return (
    <div className="absolute left-[335px] size-[14px] top-[calc(50%-480.5px)] translate-y-[-50%]" data-name="content/add_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="content/add_24px">
          <path d={svgPaths.p1777e200} fill="var(--fill-0, white)" id="icon/content/add_24px" />
        </g>
      </svg>
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents left-[324px] top-[253px]">
      <div className="absolute bg-[#ffd037] left-[324px] rounded-[7px] size-[35px] top-[253px]" />
      <ContentAdd24Px />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents left-[324px] top-[253px]">
      <Group18 />
    </div>
  );
}

function ButtonsWebSolidTextSymbolSymbolText() {
  return (
    <div className="absolute contents inset-[16.83%_4.27%_80.84%_63.47%]" data-name="buttons/web/solid/text + symbol/symbol → text">
      <Group16 />
      <Group17 />
      <p className="absolute font-['Poppins:Medium',sans-serif] inset-[17.3%_19.73%_81.3%_78.93%] leading-[normal] not-italic text-[#37474f] text-[14px] text-center text-nowrap whitespace-pre">1</p>
    </div>
  );
}

function ActionMinimize24Px1() {
  return (
    <div className="absolute left-[249px] size-[14px] top-[calc(50%-316.5px)] translate-y-[-50%]" data-name="action/minimize_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="action/minimize_24px">
          <rect fill="#F37A20" height="14" width="14" />
          <path d={svgPaths.p1c69f680} fill="var(--fill-0, white)" id="icon/action/minimize_24px" />
        </g>
      </svg>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents left-[238px] top-[417px]">
      <div className="absolute bg-[#f37a20] left-[238px] rounded-[7px] size-[35px] top-[417px]" />
      <ActionMinimize24Px1 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents left-[238px] top-[417px]">
      <Group19 />
    </div>
  );
}

function ContentAdd24Px1() {
  return (
    <div className="absolute left-[335px] size-[14px] top-[calc(50%-316.5px)] translate-y-[-50%]" data-name="content/add_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="content/add_24px">
          <path d={svgPaths.p1777e200} fill="var(--fill-0, white)" id="icon/content/add_24px" />
        </g>
      </svg>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents left-[324px] top-[417px]">
      <div className="absolute bg-[#ffd037] left-[324px] rounded-[7px] size-[35px] top-[417px]" />
      <ContentAdd24Px1 />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents left-[324px] top-[417px]">
      <Group21 />
    </div>
  );
}

function ButtonsWebSolidTextSymbolSymbolText1() {
  return (
    <div className="absolute contents inset-[27.74%_4.27%_69.93%_63.47%]" data-name="buttons/web/solid/text + symbol/symbol → text">
      <Group20 />
      <Group22 />
      <p className="absolute font-['Poppins:Medium',sans-serif] inset-[28.21%_19.73%_70.39%_78.93%] leading-[normal] not-italic text-[#37474f] text-[14px] text-center text-nowrap whitespace-pre">1</p>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-white inset-0 rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_2px_7px_0px_rgba(0,0,0,0.24)]" data-name="Rectangle" />
    </div>
  );
}

function BarsHomeIndicatorIPhoneLightPortrait() {
  return (
    <div className="absolute bottom-0 left-[32.53%] right-[31.73%] top-[72.36%]" data-name="Bars / Home Indicator / iPhone / Light - Portrait">
      <div className="absolute bg-black bottom-[12.07px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute h-[116px] left-px top-[1387px] w-[375px]" data-name="navbar">
      <Group24 />
      <BarsHomeIndicatorIPhoneLightPortrait />
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

function TabBarItem1() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-start left-[calc(50%+75.5px)] opacity-[0.32] pb-[8px] pt-[12px] px-[26px] top-0 translate-x-[-50%]" data-name="Tab Bar Item">
      <Icon3PtBell />
    </div>
  );
}

function Tabs() {
  return (
    <div className="absolute h-[44px] left-[2px] overflow-clip right-[-2px] top-[1401px]" data-name="Tabs">
      <TabBarItem />
      <TabBarItem1 />
      <div className="absolute inset-[36.36%_69.07%_18.18%_25.6%]" data-name="icon">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(29, 27, 32, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p1d35ecf0} fill="var(--fill-0, #1D1B20)" id="icon" opacity="0.4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents left-px top-[1387px]">
      <Navbar />
      <Tabs />
    </div>
  );
}

function IconPerson() {
  return (
    <div className="absolute bg-white h-[26px] left-[315px] opacity-[0.28] overflow-clip top-[1411px] w-[29px]" data-name="Icon/Person">
      <div className="absolute inset-[8.33%_14.58%_6.25%_14.58%]" data-name="person">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 23">
          <path d={svgPaths.p61a6da0} fill="var(--fill-0, black)" id="person" />
        </svg>
      </div>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents left-px top-[1387px]">
      <Group29 />
      <IconPerson />
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute left-[161px] size-[54px] top-[1398px]" data-name="menu">
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

function IconmonstrShoppingCart() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="iconmonstr-shopping-cart-2 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="iconmonstr-shopping-cart-2 1">
          <path d={svgPaths.p3de6f800} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TabBarItem2() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-start left-[calc(50%+2.5px)] opacity-40 pb-[8px] pt-[12px] px-[26px] top-[1401px] translate-x-[-50%]" data-name="Tab Bar Item">
      <IconmonstrShoppingCart />
    </div>
  );
}

function Group14() {
  return <div className="absolute bottom-full contents left-0 right-full top-0" />;
}

function ListProductNormal1() {
  return (
    <div className="absolute h-[140px] left-0 top-[155px] w-[375px]" data-name="list/product/normal">
      <div className="absolute bottom-[1.22%] left-0 right-[0.27%] top-0" />
      <div className="absolute inset-[12.8%_64.89%_13.41%_4.52%] rounded-[9px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9px]">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[9px] size-full" src={imgRectangle2} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[9px] size-full" src={imgRectangle3} />
        </div>
      </div>
      <div className="absolute bottom-0 left-[0.27%] right-0 top-[98.78%]" data-name="divider">
        <div className="absolute bottom-[-4.35%] left-[-0.13%] right-0 top-[-4.35%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 2">
            <path d={svgPaths.p20175200} id="divider" stroke="var(--stroke-0, #F0F0F0)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <p className="absolute bottom-1/2 font-['Poppins:Medium',sans-serif] leading-[normal] left-[39.63%] not-italic right-[6.38%] text-[#37474f] text-[16px] top-[16.46%] tracking-[0.6px]">Surf Excel Detergent Powder - 1kg</p>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] inset-[65.24%_42.24%_13.33%_39.63%] leading-[normal] not-italic text-[#f37a20] text-[20px] text-nowrap whitespace-pre">Rs 550</p>
      <Group14 />
    </div>
  );
}

function NavigationArrowForwordIos24Px() {
  return (
    <div className="absolute left-[313px] size-[24px] top-[1236px]" data-name="navigation/arrow_forword_ios_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="navigation/arrow_forword_ios_24px">
          <path d={svgPaths.p3c710700} fill="var(--fill-0, #37474F)" id="icon/navigation/arrow_forword_ios_24px" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[16px] top-[1205px]">
      <div className="absolute bg-[#ffd037] inset-[80.17%_4.53%_14.17%_4.27%] rounded-[12px]" />
      <div className="absolute font-['Poppins:Regular',sans-serif] h-[41px] leading-[normal] left-[95px] not-italic text-[#37474f] text-[0px] text-[14px] top-[1227px] w-[229px]">
        <p className="mb-0 text-[rgba(55,71,79,0.72)]">Tap here to change</p>
        <p className="font-['Poppins:SemiBold',sans-serif]">Cash on Delivery</p>
      </div>
      <NavigationArrowForwordIos24Px />
    </div>
  );
}

function ContentAdd24Px2() {
  return (
    <div className="absolute right-[37px] size-[24px] top-[calc(50%-216.5px)] translate-y-[-50%]" data-name="content/add_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="content/add_24px">
          <path d={svgPaths.p298d3d00} fill="var(--fill-0, black)" id="icon/content/add_24px" />
        </g>
      </svg>
    </div>
  );
}

export default function MyBagPaymentConfirmed() {
  return (
    <div className="bg-white relative size-full" data-name="My Bag payment confirmed">
      <MaskGroup />
      <ComponentsMobileAppbarPrimary />
      <BarsStatusBarIPhoneLight />
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[17px] not-italic text-[#37474f] text-[16px] text-nowrap top-[121px] tracking-[0.6px] whitespace-pre">Products</p>
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[17px] not-italic text-[#37474f] text-[16px] text-nowrap top-[599px] tracking-[0.6px] whitespace-pre">{`Expected Date & TIme`}</p>
      <ButtonsMobileSolidText />
      <FormElementsMobileInputFieldsActiveEmpty />
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[16px] not-italic text-[#37474f] text-[16px] text-nowrap top-[884px] tracking-[0.6px] whitespace-pre">Delivery Location</p>
      <Group1 />
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[20px] leading-[normal] left-[74px] not-italic text-[#37474f] text-[14px] top-[940px] w-[136px]">IBA Main Campus</p>
      <Group6 />
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[352px] not-italic text-[#ffd037] text-[16px] text-nowrap text-right top-[932px] tracking-[0.6px] translate-x-[-100%] whitespace-pre">Change</p>
      <ButtonsMobileSolidTextSymbolTextSymbol />
      <ComponentsMobileAppbarPrimary1 />
      <Group7 />
      <Group8 />
      <Group11 />
      <Group9 />
      <Group12 />
      <Group10 />
      <Group13 />
      <Group23 />
      <ButtonsWebSolidTextSymbolSymbolText />
      <ButtonsWebSolidTextSymbolSymbolText1 />
      <Group30 />
      <Menu />
      <TabBarItem2 />
      <ListProductNormal1 />
      <Group5 />
      <div className="absolute h-[28px] left-[37px] top-[1234px] w-[42px]" data-name="image 14">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage14} />
      </div>
      <div className="absolute left-[345px] size-[16px] top-[176px]" data-name="image 26">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage26} />
      </div>
      <div className="absolute left-[345px] size-[16px] top-[324px]" data-name="image 25">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage26} />
      </div>
      <div className="absolute left-[337px] size-[16px] top-[888px]" data-name="image 28">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage26} />
      </div>
      <div className="absolute left-[337px] size-[16px] top-[1160px]" data-name="image 30">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage26} />
      </div>
      <div className="absolute left-[345px] size-[16px] top-[324px]" data-name="image 29">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage26} />
      </div>
      <div className="absolute left-[345px] size-[16px] top-[601px]" data-name="image 27">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage26} />
      </div>
      <ContentAdd24Px2 />
    </div>
  );
}