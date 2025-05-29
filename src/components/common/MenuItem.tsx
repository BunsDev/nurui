"use client";
import { useAppContext } from "@/context/AppContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface IProps {
  icon: React.ReactNode;
  title: string;
  submenu?: { name: string; href: string }[];
  parentHover?: boolean;
  subMenuHover?: boolean;
}

const MenuItem: React.FC<IProps> = ({
  icon,
  title,
  submenu,
  parentHover = true,
  subMenuHover = false,
}) => {
  const pathName = usePathname();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const { sideBar } = useAppContext();

  const iconWrapperClasses =
    "text-sm text-[var(--primary-color)] bg-[var(--primary-color-3)] p-1.5 rounded";

  const withSubmenu = (
    <div
      onClick={() => setIsSubMenuOpen((prev) => !prev)}
      className="flex items-center justify-between w-full cursor-pointer"
    >
      <div className="flex items-center gap-3.5">
        <span className={iconWrapperClasses}>{icon}</span>
        <p className="font-semibold">{title}</p>
      </div>
      {isSubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
    </div>
  );

  const withOutSubmenu = (
    <div className="flex items-center gap-3.5 cursor-pointer">
      <span className={iconWrapperClasses}>{icon}</span>
      <span className="font-semibold">{title}</span>
    </div>
  );

  if (!sideBar && pathName.includes("docs")) {
    return (
      <div className="py-2">
        <p className={iconWrapperClasses}>{icon}</p>
      </div>
    );
  }

  return (
    <>
      <div
        className={`text-[var(--black-color-4)] ${
          parentHover ? "hover:bg-[var(--primary-color-2)]" : ""
        } hover:text-[var(--primary-color)] rounded py-2 px-2.5`}
      >
        {submenu ? withSubmenu : withOutSubmenu}
      </div>

      <div>
        {isSubMenuOpen && submenu && (
          <div className="flex flex-col gap-y-1 ml-5 pl-2 py-0.5 border-l border-[var(--primary-color)] min-h-9">
            {submenu.map((sub, index) => (
              <Link
                key={sub.name + index}
                href={sub.href}
                className={`text-[var(--black-color-4)] hover:text-[var(--primary-color)] capitalize ${
                  subMenuHover ? "hover:bg-[var(--primary-color-2)]" : ""
                } rounded py-1 px-2.5`}
              >
                {sub.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MenuItem;
