import React from "react";
import Image from "next/image";
import Logo from "../images/addslogo.png";
import Vector from "../images/Vector.svg";
import Phone from "../images/phone.svg";
import HomeIc from "../images/HomeIc.svg";
import Twitter from "../images/twitter.svg";
import Linkedin from "../images/likedin.svg";
import Face from "../images/face.svg";
import Insta from "../images/insta.svg";
import Link from "next/link";
import tr from "../../../locales/tr";
import en from "../../../locales/en";
import nl from "../../../locales/nl";
import it from "../../../locales/it";
import de from "../../../locales/de";
import { useRouter } from "next/router";

const footer = () => {
  const router = useRouter();

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

  return (
    <footer class="bg-[#E3E4E833]">
      <div class="mx-auto w-full max-w-screen-xl">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 py-6 lg:py-8 sm:place-items-center lg:place-items-start md:place-items-start text-center">
          <div class="mx-auto w-200">
            <Image
              src={Logo}
              alt="Picture of the author"
              className="w-full mx-auto"
            />
          </div>
          <div class="mx-auto w-200">
            <h2 class="mb-5 text-md font-semibold uppercase">
              {t.home.title2}
            </h2>
            <ul class="text-gray-500 font-medium">
              <li class="mb-4">
                <Link href="/about" class="hover:underline">
                  {t.home.title2}
                </Link>
              </li>
              <li class="mb-4">
                <Link href="/misyon" class="hover:underline">
                  {t.home.subTitle1}
                </Link>
              </li>
              {/* <li class="mb-4">
                <Link href="/referans" class="hover:underline">
                  Referanslar
                </Link>
              </li> */}
              <li class="mb-4">
                <Link href="/bth" class="hover:underline">
                  {t.home.subTitle3}
                </Link>
              </li>
            </ul>
          </div>
          <div class="mx-auto w-200">
            <h2 class="mb-5 text-md font-semibold uppercase">
              {t.home.title3}
            </h2>
            <ul class="text-gray-500 font-medium">
              <li class="mb-4">
                <Link href="/products" class="hover:underline">
                  {t.home.card1}
                </Link>
              </li>
              <li class="mb-4">
                <Link href="/al-billet" class="hover:underline">
                  {t.home.card2}{" "}
                </Link>
              </li>
              <li class="mb-4">
                <Link href="/al-ingot" class="hover:underline">
                  {t.home.card3}
                </Link>
              </li>
              <li class="mb-4">
                <Link href="/alhemisphere" class="hover:underline">
                  {t.home.card4}
                </Link>
              </li>
            </ul>
          </div>
          <div class="mx-auto w-200">
            <h2 class="mb-5 text-md font-bold uppercase">{t.home.subTitle6}</h2>
            <ul class="text-gray-500 font-small">
              <li class="mb-4">
                <a
                  href="#"
                  class="hover:underline flex  items-start text-start justify-start"
                >
                  {" "}
                  <Image
                    src={HomeIc}
                    alt="Picture of the author"
                    className="flex mr-3 mt-2"
                  />
                  Varyap Plaza Esenyalı Mah. Yanyol Cad. No:61/113 3899
                  Pendik/İSTANBUL
                </a>
              </li>
              <li class="mb-4">
                <i class="fa fa-phone text-amber-900 text-xl"></i>
                <a href="#" class="hover:underline flex">
                  <Image
                    src={Phone}
                    alt="Picture of the author"
                    className="flex mr-3"
                  />{" "}
                  0216 706 AD SS (23 77)
                </a>
              </li>
              <li class="mb-4">
                <i class="fa fa-envelope text-amber-900 text-xl"></i>
                <a href="#" class="hover:underline flex">
                  <Image
                    src={Vector}
                    alt="Picture of the author"
                    className="flex mr-3"
                  />{" "}
                  info@adss.com.tr
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="px-4 py-6 flex flex-col-reverse justify-center  md:flex md:flex-row md:justify-between lg:flex lg:flex-row lg:justify-between">
          <span class="flex justify-center text-sm text-gray-500 sm:text-center gap-5">
            © 2023
            <a href="https://flowbite.com/">ADDS</a>.
          </span>
          <div class="flex justify-center items-center flex-col gap-2 mt-5 mb-16 md:flex md:justify-center md:flex-row md:gap-4 md:mt-0 md:mb-0">
            <a href="#" class="font-normal text-gray-600 hover:underline">
              {t.home.subTitle3}
            </a>
            <a href="#" class="font-normal text-gray-600 hover:underline">
              {t.home.subTitle4}
            </a>
            <a href="#" class="font-normal text-gray-600 hover:underline">
              {t.home.subTitle5}
            </a>
          </div>
          <div class="flex flex-col">
            <div class="flex mt-4 space-x-6 justify-center md:mt-0">
              <Image
                src={Twitter}
                alt="Picture of the author"
                className="flex mr-3"
              />
              <Image
                src={Linkedin}
                alt="Picture of the author"
                className="flex mr-3"
              />{" "}
              <Image
                src={Face}
                alt="Picture of the author"
                className="flex mr-3"
              />{" "}
              <Image
                src={Insta}
                alt="Picture of the author"
                className="flex mr-3"
              />
            </div>
            <span class="w-2/3 h-0.5 bg-gray-900 mt-2 mx-auto md:hidden"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
