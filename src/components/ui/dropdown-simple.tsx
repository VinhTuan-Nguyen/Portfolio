import React, { useState } from "react";

export interface DropDownSimpleProps {
  button: {
    text?: string;
    icon?: React.ReactNode;
    isChevronDown?: boolean;
    classes: string[];
  },
  menu: {
    isDisplay: boolean;
    menuList: unknown[];
    classes?: string[];
  }
}

export const initDropDownSimpleProps: DropDownSimpleProps = {
  button: {
    icon: '',
    text: '',
    isChevronDown: false,
    classes: [],
  },
  menu: {
    isDisplay: false,
    menuList: [],
  }
}

export default function DropDownSimple(props: DropDownSimpleProps = initDropDownSimpleProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = (isActive: boolean): void => {
    setIsMenuOpen(isActive);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => toggleMenu(true)}
        id="menu-button"
        type="button"
        aria-expanded="true"
        aria-haspopup="true"
        className={`inline-flex w-full justify-center px-3 py-2 ${props.button.classes.join(' ')}`}
      >
        {props.button.icon ?? ''} {props.button.text ?? ''} {props.button.isChevronDown && (
          <svg className="-mr-1 size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd" />
          </svg>
        )}
      </button>
      {isMenuOpen && (
        <div
          role="menu"
          tabIndex={-1}
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          className="absolute mt-2 origin-top-right rounded-md"
        >
          <div className="absolute flex flex-col space-y-3" role="none">
            {props.menu.menuList.map(item => item as React.ReactNode)}
          </div>
        </div>
      )}
    </div>

  )
}
