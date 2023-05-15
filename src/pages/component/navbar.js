import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from "next/router";
import Logo from "../images/logo.svg";
import { useTheme } from "next-themes";
import { FaChevronDown } from "react-icons/fa";
import { RiArrowUpSLine } from "react-icons/ri";
import { IoMdMoon } from "react-icons/io";
import { BsSun } from "react-icons/bs";
import tr from "../../../locales/tr";
import en from "../../../locales/en";
import nl from "../../../locales/nl";
import it from "../../../locales/it";
import de from "../../../locales/de";

const navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [nav, setNav] = useState(false);
  const [open, setOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const handleClick = () => setNav(!nav);
  const { systemTheme, theme, setTheme } = useTheme();
  const router = useRouter();
  const [defaultLocale, setDefaultLocale] = useState(router.locale);

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push("/", "/", { locale });
    setDefaultLocale(locale);
  };

  const { locale, locales } = router;

  const t =
    locale === "tr"
      ? tr
      : locale === "it"
      ? it
      : locale === "nl"
      ? nl
      : locale === "de"
      ? de
      : en;

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeChange = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <BsSun
          className="w-7 h-7 mr-5 mt-1"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <IoMdMoon
          className="w-5 h-5 mr-5 mt-1 text-black"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  const isActivePage = (pathname) => {
    return router.pathname === pathname ? "text-dark" : "text-dark opacity-60";
  };
  return (
    <header className="fixed w-full z-10 flex bg-gray-100 dark:bg-gray-900 justify-between items-center px-4 text-gray-300 left-0">
      <div className="">
        <Link href="/">
          <Image
            src={Logo}
            alt="Picture of the author"
            width={125}
            height={75}
            className="cursor-pointer"
          />
        </Link>
      </div>

      <ul className="hidden justify-between dark:text-white items-center gap-x-5 font-['Open_Sans'] text-black md:flex">
        <li>
          <Link
            href="/"
            className={`${isActivePage("/")}`}
            smooth={true}
            duration={500}
          >
            <span
              className={`font-bold ${
                router.pathname === "/home" ? "text-white" : ""
              }`}
            >
              {t.home.title1}
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`${isActivePage("/about")}`}
            smooth={true}
            duration={500}
          >
            <span
              className={`font-bold ${
                router.pathname === "/about" ? "text-zinc-600" : ""
              }`}
            >
              {" "}
              {t.home.title2}
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            smooth={true}
            className={`${isActivePage("/products")}`}
            duration={500}
          >
            <span
              className={`font-bold ${
                router.pathname === "/skills" ? "text-zinc-600" : ""
              }`}
            >
              {t.home.title3}
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/sertificates"
            smooth={true}
            className={`${isActivePage("/sertificates")}`}
            duration={500}
          >
            <span
              className={`font-bold ${
                router.pathname === "/work" ? "text-zinc-600" : ""
              }`}
            >
              {t.home.title4}
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            smooth={true}
            className={`${isActivePage("/contact")}`}
            duration={500}
          >
            <span
              className={`font-bold ${
                router.pathname === "/contact" ? "text-zinc-600" : ""
              }`}
            >
              {t.home.title5}
            </span>
          </Link>
        </li>
      </ul>
      <div className="flex ">
        <div
          onClick={handleClick}
          className="md:hidden cursor-pointer justify-between flex z-10"
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        <ul
          className={`${
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full text-center h-screen bg-white flex text-black flex-col justify-center items-center"
          }`}
        >
          <Image
            src={Logo}
            className="mt-44"
            alt="Picture of the author"
            width={125}
            height={75}
          />
          <li className="py-1 text-xl mt-10">
            <Link href="/" smooth={true} duration={500}>
              Anasayfa
            </Link>
          </li>
          <li className="py-1 text-xl">
            <div className={`collapse ${isOpen1 ? "open" : ""}`}>
              <input type="checkbox" id="menu-toggle1" className="hidden" />
              <label
                htmlFor="menu-toggle1"
                className="collapse-title flex items-center cursor-pointer"
                onClick={() => setIsOpen1(!isOpen1)}
              >
                <span className="py-1 text-xl">{t.home.title1}</span>
                {isOpen1 ? (
                  <FaChevronDown className="ml-2 transition-transform duration-700 transform" />
                ) : (
                  <RiArrowUpSLine className="ml-2 transition-transform duration-300 transform" />
                )}
              </label>
              <div className="collapse-content grid grid-cols-1">
                <Link href="/about" className="text-sm text-gray-500">
                  {t.home.title2}
                </Link>
                <Link href="/misyon" className="text-sm text-gray-500">
                  {t.home.title3}
                </Link>
                <Link href="/referans" className="text-sm text-gray-500">
                  {t.home.title4}
                </Link>
                <Link href="/bth" className="text-sm text-gray-500">
                  {t.home.title5}
                </Link>
              </div>
            </div>
          </li>
          <li className="py-1 text-xl">
            <div className={`collapse ${isOpen2 ? "open" : ""}`}>
              <input type="checkbox" id="menu-toggle2" className="hidden" />
              <label
                htmlFor="menu-toggle2"
                className="collapse-title flex items-center cursor-pointer"
                onClick={() => setIsOpen2(!isOpen2)}
              >
                <span className="py-1 text-xl">{t.home.title3}</span>
                {isOpen2 ? (
                  <FaChevronDown className="ml-2 transition-transform duration-700 transform" />
                ) : (
                  <RiArrowUpSLine className="ml-2 transition-transform duration-300 transform" />
                )}
              </label>
              <div className="collapse-content grid grid-col-1">
                <Link href="/products" className="text-sm text-gray-500">
                  {t.home.card1}
                </Link>
                <Link href="/al-billet" className="text-sm text-gray-500">
                  {t.home.card2}
                </Link>
                <Link href="/al-ingot" className="text-sm text-gray-500">
                  {t.home.card3}
                </Link>
                <Link href="/alhemisphere" className="text-sm text-gray-500">
                  {t.home.card4}
                </Link>
              </div>
            </div>
          </li>
          <li className="py-1 text-xl">
            {" "}
            <Link
              href="/sertificates"
              onClick={handleClick}
              smooth={true}
              duration={500}
            >
              {t.home.title4}
            </Link>
          </li>
          <li className="py-1 text-xl">
            {" "}
            <Link href="#" onClick={handleClick} smooth={true} duration={500}>
              {t.home.title5}
            </Link>
          </li>
        </ul>
      </div>
      <div className="md:inline-flex hidden relative">
        {themeChange()}

        <select
          className="dark:text-white focus:outline-none rounded-lg block px-4 py-2 text-sm text-black hover:text-gray-900"
          value={defaultLocale}
          onChange={changeLanguage}
        >
          <option
            className="block px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-gray-900"
            value="tr"
          >
            Türkçe
          </option>
          <option
            className="block px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-gray-900"
            value="en"
          >
            İngilizce
          </option>
          <option
            className="block px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-gray-900"
            value="de"
          >
            Almanca
          </option>
          <option
            className="block px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-gray-900"
            value="it"
          >
            İtalyanca
          </option>{" "}
          <option
            className="block px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-gray-900"
            value="nl"
          >
            Flemenkçe
          </option>
        </select>
      </div>
    </header>
  );
};

export default navbar;