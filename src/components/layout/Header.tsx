"use client";
import React from "react";
import headerStyles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { homeMenu } from "@/utils/constants";
import clsx from "clsx";

const Header = () => {
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);
  const classNames = {
    nav: "w-100",
    ul: "flex md:flex-row flex-col",
    li: "flex grow bg-gray-500 hover:bg-gray-400 hover:text-slate-900",
    link: "grow p-1 text-center outline-0",
    menuItemLink: `bg-gray-500`,
    menuItem: "p-2",
  };

  return (
    <header className={headerStyles["header-wrapper"]}>
      <div className="md:container mx-auto">
        <div>
          <Link href="/" className="p-5">
            <Image
              src="/logo.avif"
              alt="kernel international logo"
              height={72}
              width={96}
            />
          </Link>
        </div>
      </div>
      <nav className={classNames.nav}>
        <ul className={clsx(classNames.nav, classNames.ul)}>
          <li className={classNames.li}>
            <Link href="/" className={classNames.link}>
              Home
            </Link>
          </li>
          <li className={classNames.li}>
            <Menu>
              <MenuButton
                ref={menuButtonRef}
                className={classNames.link}
                as={Link}
                href="#"
              >
                Sector
              </MenuButton>
              <MenuItems as="ul" anchor="bottom" className="outline-0">
                {homeMenu.map((menu) => (
                  <Link
                    key={menu.link}
                    href={`/#${menu.link}`}
                    className={classNames.menuItemLink}
                  >
                    <MenuItem
                      as="li"
                      className={clsx(
                        classNames.menuItem,
                        classNames.menuItemLink,
                      )}
                    >
                      {menu.label}
                    </MenuItem>
                  </Link>
                ))}
              </MenuItems>
            </Menu>
          </li>
          <li className={classNames.li}>
            <Link href="/products" className={classNames.link}>
              {" "}
              Products
            </Link>
          </li>
          <li className={classNames.li}>
            <Link href="/#contact" className={classNames.link}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
