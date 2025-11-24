import svgPaths from "../imports/svg-hol8j5i78d";
import imgImage28 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";

interface LogoutAlertDialogProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function LogoutAlertDialog({ isOpen, onConfirm, onCancel }: LogoutAlertDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 bg-black/50 flex items-end justify-center z-50">
      <div className="bg-white overflow-clip relative rounded-tl-[10px] rounded-tr-[10px] w-full h-[235px]">
        {/* Title */}
        <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] px-[20px] pt-[40px] justify-center leading-[0] not-italic text-[24px] text-black">
          <p className="leading-[normal]">Do you want to log out?</p>
        </div>

        {/* Go Back Button */}
        <button onClick={onCancel} className="absolute bottom-[77px] left-[17px] right-[15px] h-[48px]">
          <div className="absolute bg-[#ffd037] inset-0 rounded-[8px]" />
          <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[164.5px] not-italic text-[16px] text-black text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]">
            <p className="leading-[normal] whitespace-pre">Go Back</p>
          </div>
          <div className="absolute right-[16px] size-[24px] top-1/2 translate-y-[-50%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={svgPaths.p6a58300} fill="black" />
            </svg>
          </div>
        </button>

        {/* Confirm Button */}
        <button onClick={onConfirm} className="absolute bottom-[17px] left-[17px] right-[15px] h-[48px]">
          <div className="absolute bg-[#f37a20] inset-0 rounded-[8px]" />
          <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[164px] not-italic text-[16px] text-center text-nowrap text-white top-1/2 translate-x-[-50%] translate-y-[-50%]">
            <p className="leading-[normal] whitespace-pre">Confirm</p>
          </div>
          <div className="absolute right-[16px] size-[24px] top-1/2 translate-y-[-50%]">
            <div className="flex-none rotate-[180deg] scale-y-[-100%] size-[24px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={svgPaths.p6a58300} fill="white" />
              </svg>
            </div>
          </div>
        </button>

        {/* Volume Icon */}
        <div className="absolute right-[19px] top-[14px] w-[16px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage28} />
        </div>
      </div>
    </div>
  );
}
