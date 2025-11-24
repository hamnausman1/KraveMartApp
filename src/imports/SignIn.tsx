import svgPaths from "./svg-4pgoyq5rwy";
import imgLogo from "figma:asset/92375b66cc5f6db228cbba4fabc2bd6032c970de.png";
import imgImage31 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import imgImage7 from "figma:asset/7e76a20762d5b12311eec3a330da51a270b92254.png";

function HomeIndicator() {
  return (
    <div className="absolute bottom-0 h-[34px] left-1/2 translate-x-[-50%] w-[375px]" data-name="Home Indicator">
      <div className="absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] translate-x-[-50%] w-[134px]" data-name="Home Indicator" />
    </div>
  );
}

function Copy() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center leading-[1.5] not-italic relative shrink-0 text-black text-center text-nowrap whitespace-pre" data-name="Copy">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[16px]">Create an account</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[14px]">Enter your email to sign up for this app</p>
    </div>
  );
}

function Field() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[40px] items-center px-[16px] py-[8px] relative w-full">
          <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#828282] text-[14px] text-nowrap">email@domain.com</p>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-black h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[16px] py-0 relative w-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
            <p className="leading-[1.4] whitespace-pre">Continue</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputButton() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[327px]" data-name="Input + Button">
      <Field />
      <Button />
    </div>
  );
}

function Divider() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-[327px]" data-name="Divider">
      <div className="basis-0 bg-[#e6e6e6] grow h-px min-h-px min-w-px shrink-0" data-name="Divider" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#828282] text-[14px] text-center text-nowrap whitespace-pre">or</p>
      <div className="basis-0 bg-[#e6e6e6] grow h-px min-h-px min-w-px shrink-0" data-name="Divider" />
    </div>
  );
}

function Logo() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_207)" id="Logo">
          <path d={svgPaths.p33b7ccc0} fill="var(--fill-0, #4285F4)" id="Vector" />
          <path d={svgPaths.p15123a40} fill="var(--fill-0, #34A853)" id="Vector_2" />
          <path d={svgPaths.p28bf8e80} fill="var(--fill-0, #FBBC05)" id="Vector_3" />
          <path d={svgPaths.p1e563600} fill="var(--fill-0, #EB4335)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_1_207">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Label() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[calc(50%+0.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Label">
      <Logo />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="leading-[1.4] whitespace-pre">Continue with Google</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="[grid-area:1_/_1] bg-[#eeeeee] h-[40px] ml-0 mt-0 relative rounded-[8px] w-[327px]" data-name="Button">
      <Label />
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[calc(50%+0.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Label">
      <div className="relative shrink-0 size-[20px]" data-name="Logo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[-28.84%] max-w-none size-[158.73%] top-[-29.1%]" src={imgLogo} />
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="leading-[1.4] whitespace-pre">Continue with Apple</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="[grid-area:1_/_1] bg-[#eeeeee] h-[40px] ml-0 mt-[48px] relative rounded-[8px] w-[327px]" data-name="Button">
      <Label1 />
    </div>
  );
}

function Buttons() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Buttons">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] items-center left-[calc(50%+1px)] px-[24px] py-0 top-[calc(50%+22.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="Content">
      <Copy />
      <InputButton />
      <Divider />
      <Buttons />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#828282] text-[0px] text-[12px] text-center w-[min-content]">
        <span>{`By clicking continue, you agree to our `}</span>
        <span className="text-black">Terms of Service</span>
        <span>{` and `}</span>
        <span className="text-black">Privacy Policy</span>
      </p>
    </div>
  );
}

function RightSide() {
  return (
    <div className="absolute h-[11.336px] right-[14.67px] top-[17.33px] w-[66.661px]" data-name="Right Side">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 12">
        <g id="Right Side">
          <g id="Battery">
            <path d={svgPaths.p284dc240} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.p3b01f0e0} fill="var(--fill-0, black)" id="Combined Shape" opacity="0.4" />
            <path d={svgPaths.p11b4bf10} fill="var(--fill-0, black)" id="Rectangle_2" />
          </g>
          <path d={svgPaths.pc434800} fill="var(--fill-0, black)" id="Wifi" />
          <path d={svgPaths.p28a9ed00} fill="var(--fill-0, black)" id="Mobile Signal" />
        </g>
      </svg>
    </div>
  );
}

function Time() {
  return (
    <div className="absolute h-[21px] left-[21px] top-[12px] w-[54px]" data-name="Time">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 21">
        <g id="Time">
          <g id="9:41">
            <path d={svgPaths.p24372f50} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3aa84e00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2e6b3780} fill="var(--fill-0, black)" />
            <path d={svgPaths.p12b0b900} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="absolute contents left-[21px] top-[12px]" data-name="Left Side">
      <Time />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute h-[44px] left-0 overflow-clip top-0 w-[375px]" data-name="Status Bar">
      <RightSide />
      <LeftSide />
    </div>
  );
}

function Language() {
  return (
    <div className="absolute left-[75px] size-[24px] top-[653px]" data-name="language">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="language">
          <path d={svgPaths.p580740} fill="var(--fill-0, #1D1B20)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

export default function SignIn() {
  return (
    <div className="bg-[#ffd037] relative size-full" data-name="Sign In">
      <HomeIndicator />
      <Content />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.5] left-[188px] not-italic text-[14px] text-black text-center text-nowrap top-[717px] translate-x-[-50%] whitespace-pre">
        <span>{`If you already have an account, `}</span>
        <span className="text-[#007aff]">login</span>
      </p>
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[1.5] left-[187.5px] not-italic text-[#828282] text-[15px] text-center top-[652px] translate-x-[-50%] w-[327px]" dir="auto">
        <span className="text-black">English</span>
        <span>{` | اردو`}</span>
      </p>
      <StatusBar />
      <Language />
      <div className="absolute left-[342px] size-[16px] top-[44px]" data-name="image 31">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage31} />
      </div>
      <div className="absolute aspect-[339/120] left-[4.53%] right-[5.07%] top-[117px]" data-name="image 7">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage7} />
      </div>
    </div>
  );
}