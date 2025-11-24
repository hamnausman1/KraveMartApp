import svgPaths from "../imports/svg-7nfdeea9xv";

interface BottomNavProps {
  activeTab?: 'home' | 'cart' | 'search' | 'notifications' | 'account';
  onHomeClick?: () => void;
  onCartClick?: () => void;
  onSearchClick?: () => void;
  onNotificationsClick?: () => void;
  onAccountClick?: () => void;
}

export function BottomNav({
  activeTab = 'home',
  onHomeClick,
  onCartClick,
  onSearchClick,
  onNotificationsClick,
  onAccountClick
}: BottomNavProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-white border-t border-[#e1e1e1] z-30">
      <div className="absolute inset-[16px_16px_12px_16px] flex items-center justify-around">
        {/* Home Icon */}
        <button
          onClick={onHomeClick}
          className={`flex flex-col items-center gap-1 cursor-pointer bg-transparent border-none p-0 ${activeTab === 'home' ? 'opacity-100' : 'opacity-40'}`}
        >
          <div className={`flex items-center justify-center ${activeTab === 'home' ? 'size-[54px] bg-[#f37a20] rounded-full' : 'size-[24px]'}`}>
            <div className="size-[24px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path
                  clipRule="evenodd"
                  d={svgPaths.pee438f0}
                  fill={activeTab === 'home' ? 'white' : 'black'}
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </button>

        {/* Search Icon */}
        <button
          onClick={onSearchClick}
          className={`flex flex-col items-center gap-1 cursor-pointer bg-transparent border-none p-0 ${activeTab === 'search' ? 'opacity-100' : 'opacity-40'}`}
        >
          <div className={`flex items-center justify-center ${activeTab === 'search' ? 'size-[54px] bg-[#f37a20] rounded-full' : 'size-[24px]'}`}>
            <div className="size-[24px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={svgPaths.pc423380} fill={activeTab === 'search' ? 'white' : '#1D1B20'} />
              </svg>
            </div>
          </div>
        </button>

        {/* Cart Icon */}
        <button
          onClick={onCartClick}
          className={`flex flex-col items-center gap-1 cursor-pointer bg-transparent border-none p-0 ${activeTab === 'cart' ? 'opacity-100' : 'opacity-40'}`}
        >
          <div className={`flex items-center justify-center ${activeTab === 'cart' ? 'size-[54px] bg-[#f37a20] rounded-full' : 'size-[24px]'}`}>
            <div className="size-[24px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={svgPaths.p3de6f800} fill={activeTab === 'cart' ? 'white' : 'black'} />
              </svg>
            </div>
          </div>
        </button>

        {/* Notifications Icon */}
        <button
          onClick={onNotificationsClick}
          className={`flex flex-col items-center gap-1 cursor-pointer bg-transparent border-none p-0 ${activeTab === 'notifications' ? 'opacity-100' : 'opacity-40'}`}
        >
          <div className={`flex items-center justify-center ${activeTab === 'notifications' ? 'size-[54px] bg-[#f37a20] rounded-full' : 'size-[24px]'}`}>
            <div className="size-[24px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={svgPaths.p27eac080} fill={activeTab === 'notifications' ? 'white' : 'black'} />
              </svg>
            </div>
          </div>
        </button>

        {/* Account Icon */}
        <button
          onClick={onAccountClick}
          className={`flex flex-col items-center gap-1 cursor-pointer bg-transparent border-none p-0 ${activeTab === 'account' ? 'opacity-100' : 'opacity-40'}`}
        >
          <div className={`flex items-center justify-center ${activeTab === 'account' ? 'size-[54px] bg-[#f37a20] rounded-full' : 'size-[24px]'}`}>
            <div className="size-[24px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <path d={svgPaths.p3d834a00} fill={activeTab === 'account' ? 'white' : 'black'} />
              </svg>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}