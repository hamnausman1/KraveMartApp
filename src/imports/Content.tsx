import svgPaths from "./svg-846iey53um";

function Icon() {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="Icon">
          <path d={svgPaths.p28b6080} fill="var(--fill-0, black)" id="icon" />
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

export default function Content() {
  return (
    <div className="bg-[#ffd037] box-border content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shadow-[0px_4px_5px_5px_rgba(0,0,0,0.25)] size-full" data-name="Content">
      <StateLayer />
    </div>
  );
}