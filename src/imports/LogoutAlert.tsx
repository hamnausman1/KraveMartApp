import svgPaths from "./svg-hol8j5i78d";
import imgImage28 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";

function ButtonsMobileSolidTextSymbolTextSymbol() {
  return (
    <div className="absolute inset-[71.63%_4%_11.35%_4.53%]" data-name="buttons/mobile/solid/text + symbol/text → symbol">
      <div className="absolute bg-[#f37a20] inset-0 rounded-[8px]" data-name="Rectangle" />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[164px] not-italic text-[16px] text-center text-nowrap text-white top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">Confirm</p>
      </div>
    </div>
  );
}

function NavigationArrowBackward24Px() {
  return (
    <div className="absolute right-[16px] size-[24px] top-1/2 translate-y-[-50%]" data-name="navigation/arrow_backward_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="navigation/arrow_backward_24px">
          <path d={svgPaths.p6a58300} fill="var(--fill-0, black)" id="icon/navigation/arrow_backward_24px" />
        </g>
      </svg>
    </div>
  );
}

function ButtonsMobileSolidTextSymbolTextSymbol1() {
  return (
    <div className="absolute bottom-[32.98%] left-[4.53%] right-[4%] top-1/2" data-name="buttons/mobile/solid/text + symbol/text → symbol">
      <div className="absolute bg-[#ffd037] inset-0 rounded-[8px]" data-name="Rectangle" />
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[164.5px] not-italic text-[16px] text-black text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">Go Back</p>
      </div>
      <NavigationArrowBackward24Px />
    </div>
  );
}

function NavigationArrowBackward24Px1() {
  return (
    <div className="relative size-full" data-name="navigation/arrow_backward_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="navigation/arrow_backward_24px">
          <path d={svgPaths.p6a58300} fill="var(--fill-0, white)" id="icon/navigation/arrow_backward_24px" />
        </g>
      </svg>
    </div>
  );
}

export default function LogoutAlert() {
  return (
    <div className="bg-white overflow-clip relative rounded-tl-[10px] rounded-tr-[10px] size-full" data-name="Logout alert">
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] inset-[17.02%_5.33%_70.21%_6.13%] justify-center leading-[0] not-italic text-[24px] text-black">
        <p className="leading-[normal]">Do you want to log out?</p>
      </div>
      <ButtonsMobileSolidTextSymbolTextSymbol />
      <ButtonsMobileSolidTextSymbolTextSymbol1 />
      <div className="absolute flex inset-[75.89%_7.2%_15.6%_86.4%] items-center justify-center">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] size-[24px]">
          <NavigationArrowBackward24Px1 />
        </div>
      </div>
      <div className="absolute aspect-[222/227] left-[90.67%] right-[5.07%] top-[14px]" data-name="image 28">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage28} />
      </div>
    </div>
  );
}