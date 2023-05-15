import React, { useState } from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Sertificate from "../images/sertificate.jpg";
import Sertificate1 from "../images/sertificate1.jpg";
import Sertificate2 from "../images/sertificate2.jpg";
import Sertificate3 from "../images/sertificate3.jpg";
import Sertificate4 from "../images/sertificate4.jpg";
import Sertificate5 from "../images/sertificate5.jpg";
import Sertificate6 from "../images/sertificate6.webp";
import Sertificate7 from "../images/sertificate7.webp";
import Sertificate12 from "../images/sertificate12.jpg";
import Sertificate9 from "../images/sertificate9.webp";
import Sertificate10 from "../images/sertificate10.webp";
import Sertificate11 from "../images/sertificate11.jpg";
import Sertificate14 from "../images/sertificate14.jpg";
import Sertificate15 from "../images/sertificate15.jpg";
import Sertificate16 from "../images/sertificate16.jpg";
import Modal from "./modal";
import Image from "next/image";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";

const index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    Sertificate1,
    Sertificate2,
    Sertificate3,
    Sertificate4,
    Sertificate5,
    Sertificate6,
    Sertificate7,
    Sertificate12,
    Sertificate9,
    Sertificate11,
    Sertificate14,
    Sertificate15,
    Sertificate16,
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const customStyles = {
    content: {
      width: "50%",
      height: "50%",
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div className="font-light text-xl ml-20">Sertifikalar</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-20 relative">
          <div className="md:flex gap-5">
            <Image
              src={Sertificate}
              alt="Picture of the author"
              className=" rounded-3xl p-3 shadow-2xl hover:opacity-50  hover:bg-blue-300 transition duration-300 cursor-pointer"
              onClick={() => openModal(Sertificate)}
            />
            <Image
              src={Sertificate1}
              alt="Picture of the author"
              className="  rounded-3xl p-3 shadow-2xl hover:opacity-50  hover:bg-blue-300 transition duration-300 cursor-pointer"
              onClick={() => openModal(Sertificate1)}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 p-2 ml-14">
          <Image
            src={Sertificate2}
            alt="Picture of the author"
            className="  rounded-3xl p-3 shadow-2xl hover:opacity-50  hover:bg-blue-300 transition duration-300 cursor-pointer"
            onClick={() => openModal(Sertificate2)}
          />
          <Image
            src={Sertificate3}
            alt="Picture of the author"
            className="  rounded-3xl p-3 shadow-2xl hover:opacity-50  hover:bg-blue-300 transition duration-300 cursor-pointer"
            onClick={() => openModal(Sertificate3)}
          />
          <Image
            src={Sertificate4}
            alt="Picture of the author"
            className="  rounded-3xl p-3 shadow-2xl hover:opacity-50  hover:bg-blue-300 transition duration-300 cursor-pointer"
            onClick={() => openModal(Sertificate4)}
          />
          <Image
            src={Sertificate5}
            alt="Picture of the author"
            className="  rounded-3xl p-3 shadow-2xl hover:opacity-50  hover:bg-blue-300 transition duration-300 cursor-pointer"
            onClick={() => openModal(Sertificate5)}
          />
        </div>
        <hr className="mt-10"></hr>
        <div className="font-light text-xl ml-20">Sertifikalar</div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-12 p-2 ml-12">
          <Image
            src={Sertificate6}
            alt="Picture of the author"
            className="  rounded-3xl p-3 shadow-2xl hover:opacity-50  hover:bg-blue-300 transition duration-300 cursor-pointer"
            onClick={() => openModal(Sertificate6)}
          />
          <Image
            src={Sertificate7}
            alt="Picture of the author"
            className="  rounded-3xl p-3 shadow-2xl hover:opacity-50  hover:bg-blue-300 transition duration-300 cursor-pointer"
            onClick={() => openModal(Sertificate7)}
          />
          <Image
            src={Sertificate9}
            alt="Picture of the author"
            className="  rounded-3xl p-3 shadow-2xl hover:opacity-50  hover:bg-blue-300 transition duration-300 cursor-pointer"
            onClick={() => openModal(Sertificate9)}
          />
          <Image
            src={Sertificate10}
            alt="Picture of the author"
            className="  rounded-3xl p-3 shadow-2xl hover:opacity-50  hover:bg-blue-300 transition duration-300 cursor-pointer"
            onClick={() => openModal(Sertificate10)}
          />
          <Image
            src={Sertificate11}
            alt="Picture of the author"
            className="  rounded-3xl p-3 shadow-2xl hover:opacity-50  hover:bg-blue-300 transition duration-300 cursor-pointer"
            onClick={() => openModal(Sertificate11)}
          />
          <Image
            src={Sertificate12}
            alt="Picture of the author"
            className="  rounded-3xl p-3 shadow-2xl hover:opacity-50  hover:bg-blue-300 transition duration-300 cursor-pointer"
            onClick={() => openModal(Sertificate12)}
          />
        </div>
        <hr className="mt-10"></hr>
        <div className="font-light text-xl ml-20">Ödüller</div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 p-2 ml-12 mb-12">
          <Image
            src={Sertificate16}
            alt="Picture of the author"
            className="  rounded-3xl p-3 shadow-2xl hover:opacity-50  hover:bg-blue-300 transition duration-300 cursor-pointer"
            onClick={() => openModal(Sertificate16)}
          />
          <Image
            src={Sertificate14}
            alt="Picture of the author"
            className="  rounded-3xl p-3 shadow-2xl  hover:opacity-50  hover:bg-blue-300 transition duration-300 cursor-pointer"
            onClick={() => openModal(Sertificate14)}
          />
          <Image
            src={Sertificate15}
            alt="Picture of the author"
            className="rounded-3xl p-3 shadow-2xl hover:opacity-50  hover:bg-blue-300 transition duration-300 cursor-pointer"
            onClick={() => openModal(Sertificate15)}
          />
        </div>
        <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex justify-center items-center h-screen">
            <button
              onClick={() =>
                setCurrentImageIndex((prevIndex) =>
                  prevIndex === 0 ? images.length - 1 : prevIndex - 1
                )
              }
            >
              <BsArrowLeftCircleFill className="w-10 h-10 mr-10 ml-10" />
            </button>
            <Image
              src={images[currentImageIndex]}
              alt="Picture of the author"
              className="w-auto h-auto"
            />
            <button
              onClick={() =>
                setCurrentImageIndex((prevIndex) =>
                  prevIndex === images.length - 1 ? 0 : prevIndex + 1
                )
              }
            >
              <BsArrowRightCircleFill className="w-10 h-10 mr-10 ml-10" />
            </button>
          </div>
        </Modal>
      </div>

      <Footer />
    </div>
  );
};

export default index;
