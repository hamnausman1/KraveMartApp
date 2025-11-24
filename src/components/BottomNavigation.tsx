import svgPaths from "../imports/svg-7nfdeea9xv";

type CurrentPage = 'home' | 'search' | 'cart' | 'notifications' | 'account';

interface BottomNavigationProps {
  currentPage: CurrentPage;
  onNavigateHome: () => void;
  onNavigateSearch: () => void;
  onNavigateCart: () => void;
  onNavigateNotifications: () => void;
  onNavigateAccount: () => void;
}

export default function BottomNavigation({
  currentPage,
  onNavigateHome,
  onNavigateSearch,
  onNavigateCart,
  onNavigateNotifications,
  onNavigateAccount
}: BottomNavigationProps) {
  return (
    <>
      {/* Bottom Navigation Bar */}
      <div className="absolute h-[116px] left-0 bottom-0 w-full z-30">
        <div className="absolute bg-white inset-0 rounded-tl-[20px] rounded-tr-[20px] shadow-[0px_2px_7px_0px_rgba(0,0,0,0.24)]" />
        <div className="absolute bottom-0 left-[32.53%] right-[31.73%] top-[72.36%]">
          <div className="absolute bg-black bottom-[12.07px] h-[5px] left-1/2 rounded-[100px] translate-x-[-50%] w-[134px]" />
        </div>
      </div>

      {/* Bottom Tabs */}
      <div className="absolute h-[54px] left-0 right-0 bottom-[30px] z-40 flex items-center justify-around px-[16px]">
        {/* Home Button */}
        <button onClick={onNavigateHome} className="relative flex items-center justify-center w-[54px] h-[54px]">
          {currentPage === 'home' ? (
            <>
              <svg className="absolute block size-full" fill="none" viewBox="0 0 54 54">
                <circle cx="27" cy="27" fill="#F37A20" r="27" />
              </svg>
              <svg className="relative block size-[24px] z-10" fill="none" viewBox="0 0 24 24">
                <path clipRule="evenodd" d={svgPaths.pee438f0} fill="white" fillRule="evenodd" />
              </svg>
            </>
          ) : (
            <svg className="block size-[24px]" fill="none" viewBox="0 0 24 24">
              <path clipRule="evenodd" d={svgPaths.pee438f0} fill="black" opacity="0.28" fillRule="evenodd" />
            </svg>
          )}
        </button>

        {/* Search Button */}
        <button onClick={onNavigateSearch} className="relative flex items-center justify-center w-[54px] h-[54px]">
          {currentPage === 'search' ? (
            <>
              <svg className="absolute block size-full" fill="none" viewBox="0 0 54 54">
                <circle cx="27" cy="27" fill="#F37A20" r="27" />
              </svg>
              <svg className="relative block size-[24px] z-10" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.pc423380} fill="white" />
              </svg>
            </>
          ) : (
            <svg className="block size-[24px]" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.pc423380} fill="black" fillOpacity="0.28" />
            </svg>
          )}
        </button>

        {/* Cart Button */}
        <button onClick={onNavigateCart} className="relative flex items-center justify-center w-[54px] h-[54px]">
          {currentPage === 'cart' ? (
            <>
              <svg className="absolute block size-full" fill="none" viewBox="0 0 54 54">
                <circle cx="27" cy="27" fill="#F37A20" r="27" />
              </svg>
              <svg className="relative block size-[24px] z-10" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p3de6f800} fill="white" />
              </svg>
            </>
          ) : (
            <svg className="block size-[24px]" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.p3de6f800} fill="black" opacity="0.4" />
            </svg>
          )}
        </button>

        {/* Notifications Button */}
        <button onClick={onNavigateNotifications} className="relative flex items-center justify-center w-[54px] h-[54px]">
          {currentPage === 'notifications' ? (
            <>
              <svg className="absolute block size-full" fill="none" viewBox="0 0 54 54">
                <circle cx="27" cy="27" fill="#F37A20" r="27" />
              </svg>
              <svg className="relative block size-[24px] z-10" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p27eac080} fill="white" />
              </svg>
            </>
          ) : (
            <svg className="block size-[24px]" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.p27eac080} fill="black" opacity="0.32" />
            </svg>
          )}
        </button>

        {/* Account Button */}
        <button onClick={onNavigateAccount} className="relative flex items-center justify-center w-[54px] h-[54px]">
          {currentPage === 'account' ? (
            <>
              <svg className="absolute block size-full" fill="none" viewBox="0 0 54 54">
                <circle cx="27" cy="27" fill="#F37A20" r="27" />
              </svg>
              <svg className="relative block size-[24px] z-10" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p3d834a00} fill="white" />
              </svg>
            </>
          ) : (
            <svg className="block size-[24px]" fill="none" viewBox="0 0 24 24">
              <path d={svgPaths.p3d834a00} fill="black" opacity="0.24" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
