import imgImage from "figma:asset/fa648c5523e71d3cada7cfbd9e1cfadd48c513b4.png";
import imgImage1 from "figma:asset/a620297fbf227a3ab6fe91eccab8903996bdf979.png";
import imgImage2 from "figma:asset/d1a81c329997884332855549bf84957646c3655b.png";
import { useLanguage } from '../contexts/LanguageContext';

function Chevron() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Chevron">
          <circle cx="10" cy="10" fill="var(--fill-0, #F5F5F5)" id="Container" r="10" />
          <g id="Icon/Chevron">
            <path d={svgPaths.p3c73f180} fill="var(--fill-0, black)" id="chevron_right_slim" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Title() {
  const { t } = useLanguage();
  
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-center left-0 overflow-clip px-[16px] py-[8px] top-[326px] w-[375px]" data-name="Title">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.32px]">
        <p className="leading-[1.4] whitespace-pre">{t('categories')}</p>
      </div>
      <Chevron />
      <div className="relative shrink-0 size-[16px]" data-name="image 32">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function Item() {
  const { t } = useLanguage();
  
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[143px] items-center justify-center relative rounded-[4px] shrink-0 w-[104px]" data-name="Item">
      <div className="h-[94px] relative shrink-0 w-full" data-name="image 2">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[128.83%] left-0 max-w-none top-[-28.63%] w-full" src={imgImage2} />
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[128.83%] left-0 max-w-none top-[-28.63%] w-full" src={imgImage2} />
          </div>
          <img alt="" className="absolute max-w-none object-50%-50% object-contain size-full" src={imgImage2} />
        </div>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium h-[40px] leading-[1.4] not-italic relative shrink-0 text-[#161823] text-[14px] text-center tracking-[0.1358px] w-[119px]">{t('fruits')}</p>
    </div>
  );
}

function Item1() {
  const { t } = useLanguage();
  
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[151px] items-center justify-center relative rounded-[4px] shrink-0 w-[114px]" data-name="Item">
      <div className="h-[78px] relative shrink-0 w-[76px]" data-name="at2XY9OnJ6-removebg-preview 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-97.54%] max-w-none top-0 w-[292.28%]" src={imgAt2Xy9OnJ6RemovebgPreview1} />
        </div>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] min-w-full not-italic relative shrink-0 text-[#161823] text-[14px] text-center tracking-[0.1358px] w-[min-content]">{t('snacksConfectioneries')}</p>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[151px] items-center justify-center relative rounded-[4px] shrink-0 w-[85px]" data-name="Item">
      <div className="h-[78px] shrink-0 w-[76px]" data-name="at2XY9OnJ6-removebg-preview 1" />
    </div>
  );
}

function Image() {
  return (
    <div className="relative rounded-[38px] shrink-0 size-[76px]" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[38px]">
        <div className="absolute bg-[#f7f7f7] inset-0 rounded-[38px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[38px] size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative rounded-[4px] shrink-0" data-name="Item">
      <Image />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[#161823] text-[14px] text-center tracking-[0.1358px] w-[76px]">Baby Care</p>
    </div>
  );
}

function Carousel() {
  return (
    <div className="absolute box-border content-stretch flex gap-[24px] h-[167px] items-start left-[-31px] overflow-clip pl-[16px] pr-0 py-[8px] top-[364px] w-[375px]" data-name="Carousel">
      <Item />
      <Item1 />
      <div className="h-[99px] relative shrink-0 w-[90px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
      <Item2 />
      <Item3 />
    </div>
  );
}

function Row() {
  return (
    <div className="absolute contents left-[-31px] top-[326px]" data-name="Row">
      <Title />
      <Carousel />
    </div>
  );
}

function Group3() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Chevron">
          <circle cx="10" cy="10" fill="var(--fill-0, #F5F5F5)" id="Container" r="10" />
          <g id="Icon/Chevron">
            <path d={svgPaths.p3c73f180} fill="var(--fill-0, black)" id="chevron_right_slim" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-center left-0 overflow-clip px-[16px] py-[8px] top-[535px] w-[375px]" data-name="Header">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.32px]">
        <p className="leading-[1.4] whitespace-pre">Shop by Brand</p>
      </div>
      <Group3 />
      <div className="relative shrink-0 size-[16px]" data-name="image 31">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage32} />
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Info">
      <div className="-webkit-box flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-black w-full">
        <p className="leading-[1.4]">Unilever</p>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[180px] items-start justify-center overflow-clip relative shrink-0 w-[131px]" data-name="Card">
      <div className="relative shrink-0 size-[131px]" data-name="image 8">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage8} />
      </div>
      <Info />
    </div>
  );
}

function Info1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Info">
      <div className="-webkit-box flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] text-black w-full">
        <p className="leading-[1.4]">Kolson</p>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center overflow-clip relative shrink-0" data-name="Card">
      <div className="h-[153px] relative shrink-0 w-[149px]" data-name="image 9">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[142.48%] left-[-21.82%] max-w-none top-[-22.12%] w-[146.36%]" src={imgImage9} />
        </div>
      </div>
      <Info1 />
    </div>
  );
}

function Carousel1() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] items-center left-0 px-[16px] py-[8px] top-[562px]" data-name="Carousel">
      <Card />
      <Card1 />
      <div className="relative shrink-0 size-[155px]" data-name="image 10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage10} />
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="absolute contents left-0 top-[535px]" data-name="Row">
      <Header />
      <Carousel1 />
    </div>
  );
}

function Chevron1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Chevron">
          <circle cx="10" cy="10" fill="var(--fill-0, #F5F5F5)" id="Container" r="10" />
          <g id="Icon/Chevron">
            <path d={svgPaths.p3c73f180} fill="var(--fill-0, black)" id="chevron_right_slim" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Title1() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-center left-0 overflow-clip px-[16px] py-[8px] top-[767px] w-[375px]" data-name="Title">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap tracking-[-0.32px]">
        <p className="leading-[1.4] whitespace-pre">Title</p>
      </div>
      <Chevron1 />
    </div>
  );
}

function Carousel2() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] items-center left-0 px-[16px] py-[8px] top-[805px]" data-name="Carousel">
      <div className="relative rounded-[8px] shrink-0 size-[96px]" data-name="Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <div className="absolute bg-[#f7f7f7] inset-0 rounded-[8px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgImage1} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgImage4} />
        </div>
      </div>
      <div className="relative rounded-[8px] shrink-0 size-[96px]" data-name="Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <div className="absolute bg-[#f7f7f7] inset-0 rounded-[8px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgImage5} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgImage6} />
        </div>
      </div>
      <div className="relative rounded-[8px] shrink-0 size-[96px]" data-name="Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
          <div className="absolute bg-[#f7f7f7] inset-0 rounded-[8px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgImage7} />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" src={imgImage11} />
        </div>
      </div>
      <div className="relative rounded-[8px] shrink-0 size-[96px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full" src={imgImage12} />
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="absolute contents left-0 top-[767px]" data-name="Row">
      <Title1 />
      <Carousel2 />
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="search">
          <path d={svgPaths.p19568f00} id="Vector" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2614b00} id="Vector_2" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Search1() {
  return (
    <div className="absolute bg-neutral-100 box-border content-stretch flex gap-[12px] h-[40px] items-center left-[16px] pl-[12px] pr-[16px] py-[8px] rounded-[8px] top-[122px] w-[343px]" data-name="Search">
      <Search />
      <p className="[white-space-collapse:collapse] basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[24px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#828282] text-[16px] text-nowrap">Search</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute left-[12px] size-[45px] top-[42px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
        <g id="Group 136">
          <circle cx="22.5" cy="22.5" fill="var(--fill-0, black)" id="Ellipse 17" r="22.5" />
        </g>
      </svg>
    </div>
  );
}

function MapsPlace24Px() {
  return (
    <div className="absolute left-[22px] size-[24px] top-[53px]" data-name="maps/place_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="maps/place_24px">
          <path clipRule="evenodd" d={svgPaths.p36683780} fill="var(--fill-0, #FFD037)" fillRule="evenodd" id="icon/maps/place_24px" />
        </g>
      </svg>
    </div>
  );
}

function NavigationArrowForwordIos24Px() {
  return (
    <div className="absolute left-[334px] size-[20px] top-[55px]" data-name="navigation/arrow_forword_ios_24px">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="navigation/arrow_forword_ios_24px">
          <path d={svgPaths.p63a0100} fill="var(--fill-0, #37474F)" id="icon/navigation/arrow_forword_ios_24px" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[12px] top-[42px]">
      <Group />
      <MapsPlace24Px />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[68px] not-italic text-[#37474f] text-[11px] text-nowrap top-[45px] whitespace-pre">Your Location</p>
      <NavigationArrowForwordIos24Px />
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
    <div className="absolute bg-[#ffd037] inset-[-0.37%_0.53%_94.95%_-0.53%]" data-name="Bars / Status Bar / iPhone / Light">
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

function Group2() {
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
    <div className="absolute h-[116px] left-[2px] top-[700px] w-[375px]" data-name="navbar">
      <Group2 />
      <BarsHomeIndicatorIPhoneLightPortrait />
    </div>
  );
}

function IconTabHomeFill() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon_Tab/Home_Fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon_Tab/Home_Fill">
          <path clipRule="evenodd" d={svgPaths.pee438f0} fill="var(--fill-0, black)" fillRule="evenodd" id="home_fill" />
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

function Search2() {
  return (
    <div className="absolute inset-[27.27%_66.67%_18.18%_26.93%]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="search" opacity="0.56">
          <path d={svgPaths.pc423380} fill="var(--fill-0, #1D1B20)" id="icon" />
        </g>
      </svg>
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

function IconPerson() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon/Person">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon/Person">
          <path d={svgPaths.p3d834a00} fill="var(--fill-0, black)" id="person" />
        </g>
      </svg>
    </div>
  );
}

function TabBarItem3() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-start left-[calc(50%+150.5px)] opacity-[0.24] pb-[8px] pt-[12px] px-[26px] top-0 translate-x-[-50%]" data-name="Tab Bar Item">
      <IconPerson />
    </div>
  );
}

function Tabs() {
  return (
    <div className="absolute h-[44px] left-[2px] overflow-clip right-[-2px] top-[719px]" data-name="Tabs">
      <TabBarItem />
      <TabBarItem1 />
      <Search2 />
      <TabBarItem2 />
      <TabBarItem3 />
    </div>
  );
}

function Pagination() {
  return (
    <div className="absolute bottom-[503px] h-[5px] left-1/2 translate-x-[-50%] w-[45px]" data-name="Pagination">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 5">
        <g clipPath="url(#clip0_1_2020)" id="Pagination">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, black)" fillOpacity="0.8" id="Selected" r="2.5" />
          <circle cx="12.5" cy="2.5" fill="var(--fill-0, black)" fillOpacity="0.2" id="Default" r="2.5" />
          <circle cx="22.5" cy="2.5" fill="var(--fill-0, black)" fillOpacity="0.2" id="Default_2" r="2.5" />
          <circle cx="32.5" cy="2.5" fill="var(--fill-0, black)" fillOpacity="0.2" id="Default_3" r="2.5" />
          <circle cx="42.5" cy="2.5" fill="var(--fill-0, black)" fillOpacity="0.2" id="Default_4" r="2.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_2020">
            <rect fill="white" height="5" width="45" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute left-[18px] size-[54px] top-[718px]" data-name="menu">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
        <g id="menu">
          <rect fill="white" height="54" width="54" />
          <circle cx="27" cy="27" fill="var(--fill-0, #F37A20)" id="Ellipse 18" r="27" />
          <g id="action/home_24px">
            <path clipRule="evenodd" d={svgPaths.p35ff0100} fill="var(--fill-0, white)" fillRule="evenodd" id="icon/action/home_24px" />
          </g>
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
    <div className="absolute bg-[#ffd037] box-border content-stretch flex flex-col items-center justify-center left-[280px] overflow-clip rounded-[100px] shadow-[0px_4px_5px_5px_rgba(0,0,0,0.25)] size-[80px] top-[606px]" data-name="Content">
      <StateLayer />
    </div>
  );
}

export default function HomeScreen() {
  return (
    <div className="bg-white relative size-full" data-name="Home Screen">
      <Row />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.4] left-[344.5px] not-italic text-[#161823] text-[14px] text-center top-[471px] tracking-[0.1358px] translate-x-[-50%] w-[105px]">Cleaning and Laundry</p>
      <Row1 />
      <Row2 />
      <Search1 />
      <div className="absolute bg-[#ffd037] bottom-[703px] h-[112px] left-[calc(50%-10.5px)] rounded-[8px] translate-x-[-50%] w-[396px]" data-name="Home Indicator" />
      <Group1 />
      <BarsStatusBarIPhoneLight />
      <Navbar />
      <Tabs />
      <div className="absolute bg-[#c6d7ae] h-[131px] left-[29px] rounded-[10px] top-[185px] w-[325px]" />
      <Pagination />
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[1.4] left-[36px] not-italic text-[20px] text-black top-[calc(50%-149px)] tracking-[-0.4px] translate-y-[-50%] w-[146px]">
        <p className="mb-0">AVAIL</p>
        <p>20% OFF</p>
      </div>
      <Menu />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.5] left-[137.5px] not-italic text-[16px] text-black text-center text-nowrap top-[61px] translate-x-[-50%] whitespace-pre">IBA, Main Campus</p>
      <Content />
      <div className="absolute h-[126px] left-[16px] top-[175px] w-[343px]" data-name="image 46">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage46} />
      </div>
    </div>
  );
}