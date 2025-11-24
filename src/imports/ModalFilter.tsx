import svgPaths from "./svg-l9l03enqp6";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import { imgMain1 } from "./svg-9g90j";
import { useLanguage } from '../contexts/LanguageContext';

function Group4() {
  return (
    <div className="absolute contents inset-[-15.23%_-58.01%_73.98%_-7.29%]">
      <div className="absolute flex inset-[-15.23%_-58.01%_73.98%_-7.29%] items-center justify-center">
        <div className="flex-none h-[509.329px] rotate-[262.436deg] skew-x-[2.583deg] w-[247.347px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[23.551px_123.696px] mask-size-[323px_812px] opacity-80 relative size-full" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
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
    <div className="absolute contents inset-[-15.23%_-58.01%_73.98%_-7.29%]">
      <Group4 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-gradient-to-b bottom-[73.98%] from-[rgba(252,252,252,0.6)] left-[-0.04%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.137px_0px] mask-size-[323px_812px] right-[-0.14%] to-[rgba(255,255,255,0.6)] top-0" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute bottom-[-0.03%] contents left-0 right-[-0.04%] top-[81.33%]">
      <div className="absolute bottom-[-0.03%] flex items-center justify-center left-0 right-[-0.04%] top-[81.33%]">
        <div className="flex-none h-[323.182px] rotate-[90deg] skew-x-[359.061deg] w-[146.563px]">
          <div className="mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.004px_-660.413px] mask-size-[323px_812px] relative size-full" data-name="main (1)" style={{ maskImage: `url('${imgMain1}')` }}>
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
    <div className="absolute bottom-[-0.03%] contents left-0 right-[-0.04%] top-[66.21%]">
      <Group3 />
      <div className="absolute backdrop-blur-[45px] backdrop-filter bg-[rgba(254,254,254,0.55)] bottom-0 left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-537.624px] mask-size-[323px_812px] right-0 top-[66.21%]" style={{ maskImage: `url('${imgMain1}')` }} />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Mask Group">
      <Group5 />
      <Group6 />
    </div>
  );
}

function Frame4() {
  const { t } = useLanguage();
  
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.87] relative shrink-0 text-[16px] text-[rgba(55,71,79,0.72)] text-nowrap">
        <p className="leading-[normal] whitespace-pre">{t('minimum')}</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute content-stretch flex items-center left-[6px] overflow-clip top-1/2 translate-y-[-50%]" data-name="Group">
      <Frame4 />
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
    <div className="absolute h-[42px] left-[16px] top-[110px] w-[130px]" data-name="form elements/mobile/input fields/active/empty">
      <Group7Copy />
    </div>
  );
}

function Frame6() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic opacity-[0.87] relative shrink-0 text-[16px] text-[rgba(55,71,79,0.72)] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Maximum</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute content-stretch flex items-center left-[6px] overflow-clip top-1/2 translate-y-[-50%]" data-name="Group">
      <Frame6 />
    </div>
  );
}

function Group7Copy1() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Group 7 Copy">
      <div className="absolute bg-[#f0f1f2] inset-0 rounded-[8px]" data-name="Rectangle" />
      <Group1 />
    </div>
  );
}

function FormElementsMobileInputFieldsActiveEmpty1() {
  return (
    <div className="absolute h-[42px] left-[175px] top-[110px] w-[130px]" data-name="form elements/mobile/input fields/active/empty">
      <Group7Copy1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[16px] top-[110px]">
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[157px] not-italic text-[#37474f] text-[20px] text-nowrap top-[116px] whitespace-pre">-</p>
      <FormElementsMobileInputFieldsActiveEmpty />
      <FormElementsMobileInputFieldsActiveEmpty1 />
    </div>
  );
}

function ContentCheckboxFilled24Px() {
  return (
    <div className="absolute right-[21px] size-[20px] top-[calc(50%-0.5px)] translate-y-[-50%]" data-name="content/checkbox_filled_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="content/checkbox_filled_24px">
          <path d={svgPaths.p1ecd8df0} fill="var(--fill-0, #FFD037)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ffd037] text-[14px] text-nowrap whitespace-pre">Dairy Products</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[18px] items-center left-[16px] overflow-clip top-[21px]">
      <Frame5 />
    </div>
  );
}

function ComponentsWebMenuActive() {
  return (
    <div className="absolute h-[67px] left-0 top-[222px] w-[323px]" data-name="components/web/menu/active">
      <div className="absolute bg-white bottom-[1.49%] left-0 right-[0.27%] rounded-[8px] top-0" data-name="Rectangle" />
      <ContentCheckboxFilled24Px />
      <Frame />
      <div className="absolute bottom-0 left-[0.13%] right-[0.13%] top-[98.51%]" data-name="divider">
        <div className="absolute bottom-0 left-[-0.02%] right-[-0.16%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 323 1">
            <path d="M0.5 0.5H322.211" id="divider" stroke="var(--stroke-0, #F0F0F0)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ContentCheckboxBlank24Px() {
  return (
    <div className="absolute right-[21px] size-[20px] top-[calc(50%-0.5px)] translate-y-[-50%]" data-name="content/checkbox_blank_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="content/checkbox_blank_24px">
          <circle cx="10.5" cy="10.5" id="Ellipse 1" r="8.65" stroke="var(--stroke-0, #37474F)" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap whitespace-pre">Foods</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[18px] items-center left-[16px] overflow-clip top-[21px]">
      <Frame7 />
    </div>
  );
}

function ComponentsWebMenuActive1() {
  return (
    <div className="absolute h-[67px] left-0 top-[289px] w-[323px]" data-name="components/web/menu/active">
      <div className="absolute bg-white bottom-[1.49%] left-0 right-[0.27%] rounded-[8px] top-0" data-name="Rectangle" />
      <ContentCheckboxBlank24Px />
      <Frame1 />
      <div className="absolute bottom-0 left-[0.13%] right-[0.13%] top-[98.51%]" data-name="divider">
        <div className="absolute bottom-0 left-[-0.02%] right-[-0.16%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 323 1">
            <path d="M0.5 0.5H322.211" id="divider" stroke="var(--stroke-0, #F0F0F0)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ContentCheckboxBlank24Px1() {
  return (
    <div className="absolute right-[21px] size-[20px] top-[calc(50%-0.5px)] translate-y-[-50%]" data-name="content/checkbox_blank_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="content/checkbox_blank_24px">
          <circle cx="10.5" cy="10.5" id="Ellipse 1" r="8.65" stroke="var(--stroke-0, #37474F)" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap whitespace-pre">Vegetables</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[18px] items-center left-[16px] overflow-clip top-[21px]">
      <Frame8 />
    </div>
  );
}

function ComponentsWebMenuActive2() {
  return (
    <div className="absolute h-[67px] left-0 top-[356px] w-[323px]" data-name="components/web/menu/active">
      <div className="absolute bg-white bottom-[1.49%] left-0 right-[0.27%] rounded-[8px] top-0" data-name="Rectangle" />
      <ContentCheckboxBlank24Px1 />
      <Frame2 />
      <div className="absolute bottom-0 left-[0.13%] right-[0.13%] top-[98.51%]" data-name="divider">
        <div className="absolute bottom-0 left-[-0.02%] right-[-0.16%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 323 1">
            <path d="M0.5 0.5H322.211" id="divider" stroke="var(--stroke-0, #F0F0F0)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ContentCheckboxFilled24Px1() {
  return (
    <div className="absolute right-[21px] size-[20px] top-[calc(50%-0.5px)] translate-y-[-50%]" data-name="content/checkbox_filled_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="content/checkbox_filled_24px">
          <path d={svgPaths.p1ecd8df0} fill="var(--fill-0, #FFD037)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#ffd037] text-[14px] text-nowrap whitespace-pre">Snacks</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[18px] items-center left-[16px] overflow-clip top-[21px]">
      <Frame9 />
    </div>
  );
}

function ComponentsWebMenuActive3() {
  return (
    <div className="absolute h-[67px] left-0 top-[423px] w-[323px]" data-name="components/web/menu/active">
      <div className="absolute bg-white bottom-[1.49%] left-0 right-[0.27%] rounded-[8px] top-0" data-name="Rectangle" />
      <ContentCheckboxFilled24Px1 />
      <Frame3 />
      <div className="absolute bottom-0 left-[0.13%] right-[0.13%] top-[98.51%]" data-name="divider">
        <div className="absolute bottom-0 left-[-0.02%] right-[-0.16%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 323 1">
            <path d="M0.5 0.5H322.211" id="divider" stroke="var(--stroke-0, #F0F0F0)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ContentCheckboxBlank24Px2() {
  return (
    <div className="absolute right-[21px] size-[20px] top-[calc(50%-0.5px)] translate-y-[-50%]" data-name="content/checkbox_blank_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="content/checkbox_blank_24px">
          <circle cx="10.5" cy="10.5" id="Ellipse 1" r="8.65" stroke="var(--stroke-0, #37474F)" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap whitespace-pre">Healthcare</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex gap-[18px] items-center left-[16px] overflow-clip top-[21px]">
      <Frame10 />
    </div>
  );
}

function ComponentsWebMenuActive4() {
  return (
    <div className="absolute h-[67px] left-0 top-[490px] w-[323px]" data-name="components/web/menu/active">
      <div className="absolute bg-white bottom-[1.49%] left-0 right-[0.27%] rounded-[8px] top-0" data-name="Rectangle" />
      <ContentCheckboxBlank24Px2 />
      <Frame11 />
      <div className="absolute bottom-0 left-[0.13%] right-[0.13%] top-[98.51%]" data-name="divider">
        <div className="absolute bottom-0 left-[-0.02%] right-[-0.16%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 323 1">
            <path d="M0.5 0.5H322.211" id="divider" stroke="var(--stroke-0, #F0F0F0)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ContentCheckboxBlank24Px3() {
  return (
    <div className="absolute right-[21px] size-[20px] top-[calc(50%-0.5px)] translate-y-[-50%]" data-name="content/checkbox_blank_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="content/checkbox_blank_24px">
          <circle cx="10.5" cy="10.5" id="Ellipse 1" r="8.65" stroke="var(--stroke-0, #37474F)" strokeWidth="1.7" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#37474f] text-[14px] text-nowrap whitespace-pre">Others</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex gap-[18px] items-center left-[16px] overflow-clip top-[21px]">
      <Frame12 />
    </div>
  );
}

function ComponentsWebMenuActive5() {
  return (
    <div className="absolute h-[67px] left-0 top-[557px] w-[323px]" data-name="components/web/menu/active">
      <div className="absolute bg-white bottom-[1.49%] left-0 right-[0.27%] rounded-[8px] top-0" data-name="Rectangle" />
      <ContentCheckboxBlank24Px3 />
      <Frame13 />
      <div className="absolute bottom-0 left-[0.13%] right-[0.13%] top-[98.51%]" data-name="divider">
        <div className="absolute bottom-0 left-[-0.02%] right-[-0.16%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 323 1">
            <path d="M0.5 0.5H322.211" id="divider" stroke="var(--stroke-0, #F0F0F0)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BadgesSolidTextSuccess() {
  return (
    <div className="absolute bg-[#f37a20] box-border content-stretch flex gap-[10px] items-center left-[213px] px-[12px] py-[3px] rounded-[12.5px] top-[189px]" data-name="badges/solid/text/success">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">Check All</p>
      </div>
    </div>
  );
}

function NavigationClose24Px() {
  return (
    <div className="absolute left-[276px] size-[24px] top-[60px]" data-name="navigation/close_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="navigation/close_24px">
          <path d={svgPaths.p3e370b00} fill="var(--fill-0, #37474F)" id="icon/navigation/close_24px" />
        </g>
      </svg>
    </div>
  );
}

function Battery() {
  return (
    <div className="absolute inset-[39.39%_3.82%_34.85%_89.69%]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 12">
        <g id="Battery">
          <rect height="10.3333" id="Border" opacity="0.35" rx="2.16667" stroke="var(--stroke-0, black)" width="18.1253" x="0.5" y="0.5" />
          <path d={svgPaths.p26807c0} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="7.33333" id="Capacity" rx="1.33333" width="15.648" x="1.73867" y="2" />
        </g>
      </svg>
    </div>
  );
}

function TimeStyle() {
  return (
    <div className="absolute inset-[15.91%_80%_36.36%_5.6%]" data-name="Time Style">
      <p className="absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[20px] left-0 not-italic right-[-7.98%] text-[15px] text-black text-center top-[calc(50%-4.5px)] tracking-[-0.24px]">9:41</p>
    </div>
  );
}

function BarsStatusBarIPhoneLight() {
  return (
    <div className="absolute bottom-[94.58%] left-[-1.24%] right-[0.31%] top-0" data-name="Bars / Status Bar / iPhone / Light">
      <Battery />
      <div className="absolute inset-[39.39%_11.64%_35.61%_84.27%]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 11">
          <path d={svgPaths.p16fd5300} fill="var(--fill-0, black)" id="Wifi" />
        </svg>
      </div>
      <div className="absolute inset-[40.15%_17.07%_35.61%_78.4%]" data-name="Cellular Connection">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11">
          <path d={svgPaths.p34936c00} fill="var(--fill-0, black)" id="Cellular Connection" />
        </svg>
      </div>
      <TimeStyle />
    </div>
  );
}

export default function ModalFilter() {
  const { language } = useLanguage();
  return (
    <div className="relative size-full" data-name="Modal / Filter">
      <div className="absolute bg-white h-[812px] left-0 shadow-[0px_12px_12px_0px_rgba(0,0,0,0.12)] top-0 w-[323px]" />
      <MaskGroup />
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[16px] not-italic text-[#37474f] text-[20px] text-nowrap top-[57px] whitespace-pre">Price Range</p>
      <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[16px] not-italic text-[#37474f] text-[20px] text-nowrap top-[185px] whitespace-pre">Categories</p>
      <Group2 />
      <ComponentsWebMenuActive />
      <ComponentsWebMenuActive1 />
      <ComponentsWebMenuActive2 />
      <ComponentsWebMenuActive3 />
      <ComponentsWebMenuActive4 />
      <ComponentsWebMenuActive5 />
      <BadgesSolidTextSuccess />
      <NavigationClose24Px />
      <BarsStatusBarIPhoneLight />
    </div>
  );
}