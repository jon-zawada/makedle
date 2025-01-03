import React from "react";
import _isEmpty from "lodash/isEmpty";
import { useAuth } from "../../context/AuthProvider";

interface IDropdownMenuProps {
  isOpen: boolean;
  menuRef: React.RefObject<HTMLDivElement>;
  items: IDropdownMenuItems[];
  fitParent?: boolean;
  isProfile?: boolean;
}

export interface IDropdownMenuItems {
  name: string;
  onClick: (event: React.MouseEvent) => void;
}

/* must exist within a relatively positioned element */
export default function DropdownMenu({
  isOpen,
  menuRef,
  items,
  fitParent = false,
  isProfile = false,
}: IDropdownMenuProps) {
  const { appUser } = useAuth();
  return (
    <>
      {isOpen && !_isEmpty(items) && (
        <div
          ref={menuRef}
          className={`absolute right-0 mt-2 ${
            fitParent ? "w-full" : "w-48"
          } bg-white rounded-lg shadow-lg border border-gray-200 z-10`}
        >
          {isProfile && (
            <>
              <div className="w-full text-left px-4 py-2">
                {appUser?.username}
              </div>
              <hr />
            </>
          )}
          <ul className="flex flex-col max-h-60 overflow-y-auto">
            {items.map((item: IDropdownMenuItems) => (
              <li key={item.name}>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={item.onClick}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
