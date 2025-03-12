import Link from "next/link";
import React from "react";
import { FaInstagram, FaTelegram } from "react-icons/fa";
import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] my-[20px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {/* Contact Information */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] border-b-2 border-[#2A0E61] pb-2">
              Contact
            </div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Iran/Dezful</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">+98 916 771 6820</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                mmkkarbalaei@gmail.com
              </span>
            </p>
            <div className="mb-[20px] text-[15px] text-center">
              &copy; MMk 2025
            </div>
          </div>

          {/* Social Media */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] border-b-2 border-[#2A0E61] pb-2">
              Social Media
            </div>

            {/* Instagram */}
            <Link
              href="https://instagram.com/mmk4.official"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:text-[#2A0E61] hover:underline"
            >
              <FaInstagram />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </Link>

            {/* Telegram */}
            <Link
              href="https://t.me/mmk4_81"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <FaTelegram />
              <span className="text-[15px] ml-[6px]">Telegram</span>
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/mmkarbalaei"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </Link>

            {/* GitHub */}
            <Link
              href="https://github.com/mmk4-81"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">GitHub</span>
            </Link>
          </div>

          {/* About */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] border-b-2 border-[#2A0E61] pb-2">
              About
            </div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer text-justify max-w-[300px]">
              <span className="text-[15px] ml-[6px]">
                I&apos;m a passionate Full Stack Developer with a focus on
                building modern web applications. I specialize in creating
                user-friendly, scalable, and efficient solutions using the
                latest technologies. Let&apos;s collaborate and bring your ideas
                to life!
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
