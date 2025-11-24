import { useState } from 'react';
import svgPaths from "../imports/svg-l9l03enqp6";
import imgMain2 from "figma:asset/db4e58fac23dd6eaeefc5f9b23a040409692e76a.png";
import { imgMain1 } from "../imports/svg-9g90j";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilter: (filters: FilterState) => void;
  currentFilters: FilterState;
}

export interface FilterState {
  minPrice: string;
  maxPrice: string;
  categories: string[];
}

const CATEGORIES = [
  'Dairy Products',
  'Foods',
  'Vegetables',
  'Snacks',
  'Healthcare',
  'Others'
];

export default function FilterModal({ isOpen, onClose, onApplyFilter, currentFilters }: FilterModalProps) {
  const [minPrice, setMinPrice] = useState(currentFilters.minPrice);
  const [maxPrice, setMaxPrice] = useState(currentFilters.maxPrice);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(currentFilters.categories);

  if (!isOpen) return null;

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleCheckAll = () => {
    if (selectedCategories.length === CATEGORIES.length) {
      setSelectedCategories([]);
    } else {
      setSelectedCategories([...CATEGORIES]);
    }
  };

  const handleApply = () => {
    onApplyFilter({
      minPrice,
      maxPrice,
      categories: selectedCategories
    });
    onClose();
  };

  return (
    <div className="absolute inset-0 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      
      {/* Modal */}
      <div className="absolute bg-white h-full left-0 shadow-[0px_12px_12px_0px_rgba(0,0,0,0.12)] top-0 w-[323px]">
        {/* Background Elements */}
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
          <div className="absolute backdrop-blur-[45px] backdrop-filter bg-gradient-to-b bottom-[73.98%] from-[rgba(252,252,252,0.6)] left-[-0.04%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.137px_0px] mask-size-[323px_812px] right-[-0.14%] to-[rgba(255,255,255,0.6)] top-0" style={{ maskImage: `url('${imgMain1}')` }} />
        </div>

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
          <div className="absolute backdrop-blur-[45px] backdrop-filter bg-[rgba(254,254,254,0.55)] bottom-0 left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-537.624px] mask-size-[323px_812px] right-0 top-[66.21%]" style={{ maskImage: `url('${imgMain1}')` }} />
        </div>

        {/* Close Button */}
        <button onClick={onClose} className="absolute left-[276px] size-[24px] top-[60px]" data-name="navigation/close_24px">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.p3e370b00} fill="#37474F" />
          </svg>
        </button>

        {/* Price Range */}
        <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[16px] not-italic text-[#37474f] text-[20px] text-nowrap top-[57px] whitespace-pre">Price Range</p>

        <div className="absolute left-[16px] top-[110px]">
          <p className="absolute font-['Poppins:Medium',sans-serif] leading-[normal] left-[157px] not-italic text-[#37474f] text-[20px] text-nowrap top-[6px] whitespace-pre">-</p>
          
          {/* Minimum Input */}
          <div className="absolute h-[42px] left-0 top-0 w-[130px]">
            <div className="absolute inset-0 overflow-clip">
              <div className="absolute bg-[#f0f1f2] inset-0 rounded-[8px]" />
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                placeholder="Minimum"
                className="absolute left-[16px] top-[10px] font-['Poppins:Regular',sans-serif] text-[16px] text-[rgba(55,71,79,0.72)] bg-transparent border-none outline-none w-[100px]"
              />
            </div>
          </div>

          {/* Maximum Input */}
          <div className="absolute h-[42px] left-[159px] top-0 w-[130px]">
            <div className="absolute inset-0 overflow-clip">
              <div className="absolute bg-[#f0f1f2] inset-0 rounded-[8px]" />
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="Maximum"
                className="absolute left-[16px] top-[10px] font-['Poppins:Regular',sans-serif] text-[16px] text-[rgba(55,71,79,0.72)] bg-transparent border-none outline-none w-[100px]"
              />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="absolute left-[16px] right-[16px] top-[185px]">
          <div className="flex justify-between items-center mb-[37px]">
            <p className="font-['Poppins:Medium',sans-serif] text-[#37474f] text-[20px]">Categories</p>
            <button 
              onClick={handleCheckAll}
              className="bg-[#f37a20] px-[12px] py-[3px] rounded-[12.5px]"
            >
              <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-white">
                {selectedCategories.length === CATEGORIES.length ? 'Uncheck All' : 'Check All'}
              </p>
            </button>
          </div>

          {/* Category List */}
          <div className="space-y-0">
            {CATEGORIES.map((category, index) => (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className="w-full bg-white rounded-[8px] h-[67px] mb-[-1px] relative"
              >
                <div className="absolute bg-white bottom-[1.49%] left-0 right-[0.27%] rounded-[8px] top-0" />
                
                {/* Checkbox */}
                <div className="absolute right-[21px] size-[20px] top-[calc(50%-0.5px)] translate-y-[-50%]">
                  {selectedCategories.includes(category) ? (
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p1ecd8df0} fill="#FFD037" />
                    </svg>
                  ) : (
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <circle cx="10.5" cy="10.5" r="8.65" stroke="#37474F" strokeWidth="1.7" />
                    </svg>
                  )}
                </div>

                {/* Label */}
                <div className="absolute left-[16px] top-[21px]">
                  <p className={`font-['Poppins:Medium',sans-serif] text-[14px] ${
                    selectedCategories.includes(category) ? 'text-[#ffd037]' : 'text-[#37474f]'
                  }`}>
                    {category}
                  </p>
                </div>

                {/* Divider */}
                {index < CATEGORIES.length - 1 && (
                  <div className="absolute bottom-0 left-[0.13%] right-[0.13%] top-[98.51%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 323 1">
                      <path d="M0.5 0.5H322.211" stroke="#F0F0F0" strokeLinecap="square" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Apply Button */}
        <button
          onClick={handleApply}
          className="absolute bottom-[40px] left-[16px] right-[16px] bg-[#ffd037] h-[48px] rounded-[8px] flex items-center justify-center"
        >
          <p className="font-['Poppins:Medium',sans-serif] text-[16px] text-[#37474f]">Apply Filters</p>
        </button>
      </div>
    </div>
  );
}
