import React from "react";
import { ChevronDown } from "lucide-react";

interface DropdownProps {
  items: string[];
  selectedItem: string;
  onSelect: (item: string) => void;
  placeholder: string;
  isDropdownOpen: boolean;
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown: React.FC<DropdownProps> = ({
  items,
  selectedItem,
  onSelect,
  placeholder,
  isDropdownOpen,
  setIsDropdownOpen,
}) => (
  <div className="relative">
    <input
      type="text"
      value={selectedItem}
      onFocus={() => setIsDropdownOpen(true)}
      onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
      placeholder={placeholder}
      className="w-full p-2 mt-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer"
    />

    {isDropdownOpen && (
      <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
        <div className="p-2 max-h-60 overflow-y-auto">
          {items.map((item) => (
            <div
              key={item}
              className="px-4 py-2 cursor-pointer"
              onClick={() => {
                onSelect(item);
                setIsDropdownOpen(false);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default Dropdown;
