import svgPaths from "./svg-rd8ofn16n3";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import imgOval from "figma:asset/29517975f8dc215a639e9863f4f5d91b761e1c42.png";
import imgImage34 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import { imgMain1 } from "./svg-fyksv";

function Group3() {
  return (
    <div className="absolute contents inset-[-15.21%_-58.02%_73.97%_-7.26%]">
      <div className="absolute flex inset-[-15.21%_-58.02%_73.97%_-7.26%] items-center justify-center">
        <div className="flex-none h-[591.473px] rotate-[262.524deg] skew-x-[2.788deg] w-[290.492px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[27.34px_145.302px] mask-size-[374.954px_953.834px] opacity-80 relative size-full" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[333.28%] left-[-725%] max-w-none top-[-109.86%] w-[1406.64%]" src={imgMain2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[-15.21%_-58.02%_73.97%_-7.26%]">
      <Group3 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-gradient-to-b from-[rgba(252,252,252,0.6)] inset-[0.02%_-0.16%_73.97%_-0.01%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.16px_0px] mask-size-[374.954px_953.834px] to-[rgba(255,255,255,0.6)]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[81.29%_-0.06%_-0.03%_0.03%]">
      <div className="absolute flex inset-[81.29%_-0.06%_-0.03%_0.03%] items-center justify-center">
        <div className="flex-none h-[375.169px] rotate-[90deg] skew-x-[358.988deg] w-[172.164px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-775.364px] mask-size-[374.954px_953.834px] relative size-full" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
            <div className="absolute inset-0 opacity-75 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[415.76%] left-[-1201.44%] max-w-none top-[-144.82%] w-[1987.8%]" src={imgMain2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[66.22%_-0.06%_-0.03%_0.03%]">
      <Group2 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-[rgba(254,254,254,0.55)] bottom-0 left-[0.03%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-631.531px] mask-size-[374.954px_953.834px] right-[-0.02%] top-[66.22%]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute bottom-0 contents left-[0.03%] right-[-0.02%] top-[0.02%]" data-name="Mask Group">
      <Group4 />
      <Group5 />
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
    <div className="absolute bottom-[95.39%] left-0 right-0 top-0" data-name="Bars / Status Bar / iPhone / Light">
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

function ComponentsMobileAppbarPrimary1() {
  return (
    <div className="absolute h-[88px] left-px top-0 w-[375px]" data-name="components/mobile/appbar/primary">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[16px] not-italic text-[#37474f] text-[20px] text-nowrap top-[calc(50%+7.5px)] whitespace-pre">Account</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[51px] left-[18px] overflow-clip top-[122px] w-[258px]">
      <div className="absolute bottom-0 left-0 right-[80.62%] top-[1.96%]" data-name="Oval">
        <img alt="" className="block max-w-none size-full" height="50" src={imgOval} width="50" />
      </div>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[normal] left-[25.58%] not-italic right-[20.93%] text-[#3f3f3f] text-[18px] text-nowrap top-[calc(50%-25.5px)] whitespace-pre">Hamna Usman</p>
      <p className="absolute bottom-[3.92%] font-['Poppins:Medium',sans-serif] leading-[23px] left-[25.58%] not-italic right-0 text-[#555555] text-[15px] top-[52.94%]">03XX-XXXXXXX</p>
    </div>
  );
}

function CommunicationChatBubbleOutline24Px() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="communication/chat_bubble_outline_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="communication/chat_bubble_outline_24px">
          <path clipRule="evenodd" d={svgPaths.p262f4d00} fill="var(--fill-0, #FFD037)" fillRule="evenodd" id="icon/communication/chat_bubble_outline_24px" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <CommunicationChatBubbleOutline24Px />
    </div>
  );
}

function Frame7() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap whitespace-pre">Vouchers</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex items-center left-[7px] overflow-clip top-[calc(50%-0.5px)] translate-y-[-50%]">
      <Frame8 />
      <Frame7 />
    </div>
  );
}

function ComponentsMobileMenuActive() {
  return (
    <div className="absolute h-[67px] left-0 top-[415px] w-[375px]" data-name="components/mobile/menu/active">
      <div className="absolute bg-white bottom-[1.49%] left-0 right-0 rounded-[8px] top-0" data-name="Rectangle" />
      <Frame />
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

function ImageEdit24Px() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="image/edit_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="image/edit_24px">
          <path clipRule="evenodd" d={svgPaths.p366f4500} fill="var(--fill-0, #236CD9)" fillRule="evenodd" id="icon/image/edit_24px" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <ImageEdit24Px />
    </div>
  );
}

function Frame10() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap whitespace-pre">Edit Profile</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex items-center left-[7px] overflow-clip top-[calc(50%-0.5px)] translate-y-[-50%]">
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function ComponentsMobileMenuActive1() {
  return (
    <div className="absolute h-[67px] left-px top-[211px] w-[375px]" data-name="components/mobile/menu/active">
      <div className="absolute bottom-[1.49%] left-0 right-0 rounded-[8px] top-0" data-name="Rectangle" />
      <Frame1 />
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

function MapsPlace24Px() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="maps/place_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="maps/place_24px">
          <path clipRule="evenodd" d={svgPaths.p36683780} fill="var(--fill-0, #37474F)" fillRule="evenodd" id="icon/maps/place_24px" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <MapsPlace24Px />
    </div>
  );
}

function Frame12() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap whitespace-pre">My Address</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex items-center left-[7px] overflow-clip top-[calc(50%-0.5px)] translate-y-[-50%]">
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function ComponentsMobileMenuActive2() {
  return (
    <div className="absolute h-[67px] left-px top-[279px] w-[375px]" data-name="components/mobile/menu/active">
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

function CommunicationCall24Px() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="communication/call_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="communication/call_24px">
          <path clipRule="evenodd" d={svgPaths.p1ab7d640} fill="var(--fill-0, #F37A20)" fillRule="evenodd" id="icon/communication/call_24px" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <CommunicationCall24Px />
    </div>
  );
}

function Frame14() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap whitespace-pre">Contact Us</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex items-center left-[7px] overflow-clip top-[calc(50%-0.5px)] translate-y-[-50%]">
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function ComponentsMobileMenuActive3() {
  return (
    <div className="absolute h-[67px] left-[2px] top-[482px] w-[375px]" data-name="components/mobile/menu/active">
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

function CommunicationMail24Px() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="communication/mail_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="communication/mail_24px"></g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <CommunicationMail24Px />
    </div>
  );
}

function Frame16() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap whitespace-pre">App Settings</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex items-center left-[7px] overflow-clip top-[calc(50%-0.5px)] translate-y-[-50%]">
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function ComponentsMobileMenuActive4() {
  return (
    <div className="absolute h-[67px] left-0 top-[551px] w-[375px]" data-name="components/mobile/menu/active">
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

function CommunicationMail24Px1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="communication/mail_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="communication/mail_24px"></g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <CommunicationMail24Px1 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap whitespace-pre">Help</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex items-center left-[7px] overflow-clip top-[calc(50%-0.5px)] translate-y-[-50%]">
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function ComponentsMobileMenuActive5() {
  return (
    <div className="absolute h-[67px] left-[2px] top-[620px] w-[375px]" data-name="components/mobile/menu/active">
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

function ActionShoppingBasket24Px() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="action/shopping_basket_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="action/shopping_basket_24px">
          <path clipRule="evenodd" d={svgPaths.p16b0ed80} fill="var(--fill-0, #37474F)" fillRule="evenodd" id="icon/action/shopping_basket_24px" />
        </g>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <ActionShoppingBasket24Px />
    </div>
  );
}

function Frame20() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap whitespace-pre">My Orders</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex items-center left-[7px] overflow-clip top-[calc(50%-0.5px)] translate-y-[-50%]">
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function ComponentsMobileMenuActive6() {
  return (
    <div className="absolute h-[67px] left-px top-[347px] w-[375px]" data-name="components/mobile/menu/active">
      <div className="absolute bg-white bottom-[1.49%] left-0 right-0 rounded-[8px] top-0" data-name="Rectangle" />
      <Frame6 />
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

function ActionPowerSettingsNew24Px() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="action/power_settings_new_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="action/power_settings_new_24px">
          <path clipRule="evenodd" d={svgPaths.p2595f880} fill="var(--fill-0, #FF5552)" fillRule="evenodd" id="icon/action/power_settings_new_24px" />
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <ActionPowerSettingsNew24Px />
    </div>
  );
}

function Frame22() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap whitespace-pre">Log out</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute content-stretch flex items-center left-[7px] overflow-clip top-[calc(50%-0.5px)] translate-y-[-50%]">
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function ComponentsMobileMenuActive7() {
  return (
    <div className="absolute h-[67px] left-[-1px] top-[687px] w-[375px]" data-name="components/mobile/menu/active">
      <Frame23 />
    </div>
  );
}

function Settings() {
  return (
    <div className="absolute h-[27px] left-[18px] top-[570px] w-[26px]" data-name="settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 27">
        <g id="settings">
          <path d={svgPaths.p4a20900} fill="var(--fill-0, #1D1B20)" id="icon" />
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
    <div className="absolute bg-[#ffd037] box-border content-stretch flex flex-col inset-[77.88%_4.8%_13.73%_73.87%] items-center justify-center overflow-clip rounded-[100px] shadow-[0px_4px_5px_5px_rgba(0,0,0,0.25)]" data-name="Content">
      <StateLayer />
    </div>
  );
}

function Group1() {
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
    <div className="absolute h-[116px] left-[-1px] top-[837px] w-[375px]" data-name="navbar">
      <Group1 />
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

function IconmonstrShoppingCart() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="iconmonstr-shopping-cart-2 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="iconmonstr-shopping-cart-2 1">
          <path d={svgPaths.p3de6f800} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TabBarItem1() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-start left-[calc(50%+0.5px)] opacity-40 pb-[8px] pt-[12px] px-[26px] top-0 translate-x-[-50%]" data-name="Tab Bar Item">
      <IconmonstrShoppingCart />
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

function TabBarItem2() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-start left-[calc(50%+75.5px)] opacity-[0.32] pb-[8px] pt-[12px] px-[26px] top-0 translate-x-[-50%]" data-name="Tab Bar Item">
      <Icon3PtBell />
    </div>
  );
}

function Tabs() {
  return (
    <div className="absolute h-[44px] left-0 overflow-clip right-0 top-[851px]" data-name="Tabs">
      <TabBarItem />
      <TabBarItem1 />
      <TabBarItem2 />
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute left-[301px] size-[54px] top-[847px]" data-name="menu">
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

function Search() {
  return (
    <div className="absolute inset-[90.67%_66.67%_6.81%_26.93%]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="search">
          <path d={svgPaths.pc423380} fill="var(--fill-0, black)" fillOpacity="0.28" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[-1px] top-[837px]">
      <Navbar />
      <Tabs />
      <Menu />
      <Search />
    </div>
  );
}

function IconPerson() {
  return (
    <div className="absolute h-[26px] left-[313px] top-[861px] w-[29px]" data-name="Icon/Person">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 26">
        <g id="Icon/Person">
          <path d={svgPaths.p1391dd00} fill="var(--fill-0, white)" id="person" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[-1px] top-[837px]">
      <Group6 />
      <IconPerson />
    </div>
  );
}

function HelpCircle() {
  return (
    <div className="absolute h-[28px] left-[18px] top-[639px] w-[29px]" data-name="Help circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 28">
        <g id="Help circle">
          <path d={svgPaths.p2a745780} id="Icon" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

export default function More() {
  return (
    <div className="bg-white relative size-full" data-name="More">
      <MaskGroup />
      <ComponentsMobileAppbarPrimary />
      <BarsStatusBarIPhoneLight />
      <ComponentsMobileAppbarPrimary1 />
      <Group />
      <ComponentsMobileMenuActive />
      <ComponentsMobileMenuActive1 />
      <ComponentsMobileMenuActive2 />
      <ComponentsMobileMenuActive3 />
      <ComponentsMobileMenuActive4 />
      <ComponentsMobileMenuActive5 />
      <ComponentsMobileMenuActive6 />
      <ComponentsMobileMenuActive7 />
      <Settings />
      <Content />
      <Group7 />
      <HelpCircle />
      <div className="absolute left-[339px] size-[16px] top-[237px]" data-name="image 34">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage34} />
      </div>
      <div className="absolute left-[339px] size-[16px] top-[304px]" data-name="image 35">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage34} />
      </div>
      <div className="absolute left-[339px] size-[16px] top-[380px]" data-name="image 36">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage34} />
      </div>
      <div className="absolute left-[339px] size-[16px] top-[441px]" data-name="image 37">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage34} />
      </div>
      <div className="absolute left-[339px] size-[16px] top-[507px]" data-name="image 38">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage34} />
      </div>
      <div className="absolute left-[339px] size-[16px] top-[576px]" data-name="image 39">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage34} />
      </div>
      <div className="absolute left-[339px] size-[16px] top-[645px]" data-name="image 40">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage34} />
      </div>
      <div className="absolute left-[339px] size-[16px] top-[712px]" data-name="image 41">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage34} />
      </div>
    </div>
  );
}