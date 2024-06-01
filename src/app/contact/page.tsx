"use client";

import { WrapperMain } from '@components/commons/Main';
import { ThemeApp } from '@components/wrappers/context';
import { useContext } from 'react';

export default function Contact() {
  const { themeApp } = useContext(ThemeApp)
  return (
    <WrapperMain>
      <div className="flex justify-between items-center lg:justify-around flex-wrap w-full m-auto my-5 z-2 md:flex-nowrap p-4">
        <div className={`flex justify-center items-center transition-all duration-300 ${themeApp === "dark" ? "bg-slate-900" : "bg-[#2c4efa3f]"} text-white rounded-[27px_0px_27px_0px] text-xs h-10 w-full mb-4 transition-all duration-300 border-b-[1px] border-[rgba(44,77,250,0.23)] shadow-[0_0_2px_1px_#4e69f49c] hover:border-b-[#b3ccff] sm:h-10 sm:w-[250px] md:h-12 md:w-[200px] lg:w-[250px]`}>
          <a
            href="https://www.linkedin.com/in/josé-allef-17b508170/"
            target="_blanck"
            className="flex justify-center items-center w-full h-full hover:border-b-[#b3ccff] transition-transform duration-200 ease-in-out hover:transform hover:skew-x-[18deg] hover:skew-y-[11deg]">
            <img src="/image/linkedinIcon.svg" alt="Linkedin" width="30" />
          </a>
        </div>

        <div className={`flex justify-center items-center transition-all duration-300 ${themeApp === "dark" ? "bg-slate-900" : "bg-[#2c4efa3f]"} text-white rounded-[27px_0px_27px_0px] text-xs h-10 w-full mb-4 transition-all duration-300 border-b-[1px] border-[rgba(44,77,250,0.23)] shadow-[0_0_2px_1px_#4e69f49c] hover:border-b-[#b3ccff] sm:h-10 sm:w-[250px] md:h-12 md:w-[200px] lg:w-[250px]`}>
          <a href="https://github.com/joseallef"
            target="_blank"
            className="flex justify-center items-center w-full h-full transition-transform duration-200 ease-in-out hover:transform hover:skew-x-[18deg] hover:skew-y-[11deg]">
            <img src="/image/githubIcon.svg" alt="Github" width="30" />
          </a>
        </div>

        <div className={`flex justify-center items-center transition-all duration-300 ${themeApp === "dark" ? "bg-slate-900" : "bg-[#2c4efa3f]"} text-white rounded-[27px_0px_27px_0px] text-xs h-10 w-full mb-4 transition-all duration-300 border-b-[1px] border-[rgba(44,77,250,0.23)] shadow-[0_0_2px_1px_#4e69f49c] hover:border-b-[#b3ccff] sm:h-10 sm:w-[250px] md:h-12 md:w-[200px] lg:w-[250px]`}>
          <a href="https://www.instagram.com/allef_96/" target="_blank"
            className="flex justify-center items-center w-full h-full transition-transform duration-200 ease-in-out hover:transform hover:skew-x-[18deg] hover:skew-y-[11deg]">
            <svg width="32" height="32" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="30" fill="url(#paint0_radial_206_683)" />
              <rect width="32" height="32" rx="30" fill="url(#paint1_radial_206_683)" />
              <path d="M128.009 28C100.851 28 97.4424 28.1188 86.7756 28.6042C76.1297 29.0917 68.8629 30.7771 62.5045 33.2501C55.9274 35.8042 50.3481 39.221 44.7898 44.7814C39.2272 50.3398 35.8105 55.919 33.248 62.4941C30.7688 68.8546 29.0813 76.1234 28.6021 86.7652C28.125 97.432 28 100.842 28 128.001C28 155.16 28.1208 158.558 28.6042 169.224C29.0938 179.87 30.7792 187.137 33.2501 193.495C35.8063 200.073 39.223 205.652 44.7835 211.21C50.3398 216.773 55.919 220.198 62.492 222.752C68.8546 225.225 76.1234 226.91 86.7673 227.398C97.4341 227.883 100.84 228.002 127.997 228.002C155.158 228.002 158.556 227.883 169.222 227.398C179.868 226.91 187.143 225.225 193.506 222.752C200.081 220.198 205.652 216.773 211.208 211.21C216.771 205.652 220.187 200.073 222.75 193.498C225.208 187.137 226.896 179.868 227.396 169.226C227.875 158.56 228 155.16 228 128.001C228 100.842 227.875 97.4341 227.396 86.7673C226.896 76.1213 225.208 68.8546 222.75 62.4962C220.187 55.919 216.771 50.3398 211.208 44.7814C205.646 39.2189 200.083 35.8022 193.5 33.2501C187.125 30.7771 179.854 29.0917 169.208 28.6042C158.541 28.1188 155.145 28 127.978 28H128.009ZM119.038 46.021C121.701 46.0169 124.672 46.021 128.009 46.021C154.71 46.021 157.874 46.1169 168.418 46.596C178.168 47.0419 183.46 48.671 186.985 50.0398C191.652 51.8523 194.979 54.019 198.477 57.5191C201.977 61.0191 204.143 64.3525 205.96 69.0192C207.329 72.54 208.96 77.8318 209.404 87.5819C209.883 98.1236 209.987 101.29 209.987 127.978C209.987 154.666 209.883 157.833 209.404 168.374C208.958 178.124 207.329 183.416 205.96 186.937C204.148 191.604 201.977 194.927 198.477 198.425C194.977 201.925 191.654 204.091 186.985 205.904C183.464 207.279 178.168 208.904 168.418 209.35C157.876 209.829 154.71 209.933 128.009 209.933C101.307 209.933 98.1424 209.829 87.6006 209.35C77.8505 208.9 72.5588 207.271 69.0317 205.902C64.365 204.089 61.0316 201.923 57.5316 198.423C54.0315 194.923 51.8648 191.598 50.0481 186.929C48.6794 183.408 47.0481 178.116 46.6044 168.366C46.1252 157.824 46.0294 154.658 46.0294 127.953C46.0294 101.249 46.1252 98.0986 46.6044 87.5569C47.0502 77.8068 48.6794 72.515 50.0481 68.99C51.8607 64.3233 54.0315 60.9899 57.5316 57.4899C61.0316 53.9899 64.365 51.8232 69.0317 50.0065C72.5567 48.6315 77.8505 47.0064 87.6006 46.5585C96.8257 46.1419 100.401 46.0169 119.038 45.996V46.021ZM181.389 62.6254C174.764 62.6254 169.389 67.9942 169.389 74.6213C169.389 81.2464 174.764 86.6214 181.389 86.6214C188.014 86.6214 193.389 81.2464 193.389 74.6213C193.389 67.9962 188.014 62.6212 181.389 62.6212V62.6254ZM128.009 76.6463C99.6487 76.6463 76.6547 99.6403 76.6547 128.001C76.6547 156.362 99.6487 179.345 128.009 179.345C156.37 179.345 179.356 156.362 179.356 128.001C179.356 99.6403 156.368 76.6463 128.007 76.6463H128.009ZM128.009 94.6674C146.418 94.6674 161.343 109.59 161.343 128.001C161.343 146.41 146.418 161.335 128.009 161.335C109.599 161.335 94.6757 146.41 94.6757 128.001C94.6757 109.59 109.599 94.6674 128.009 94.6674V94.6674Z" fill="white" />
              <defs>
                <radialGradient id="paint0_radial_206_683" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(68.0003 275.717) rotate(-90) scale(253.715 235.975)">
                  <stop stopColor="#FFDD55" />
                  <stop offset="0.1" stopColor="#FFDD55" />
                  <stop offset="0.5" stopColor="#FF543E" />
                  <stop offset="1" stopColor="#C837AB" />
                </radialGradient>
                <radialGradient id="paint1_radial_206_683" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-42.8814 18.4418) rotate(78.6806) scale(113.412 467.488)">
                  <stop stopColor="#3771C8" />
                  <stop offset="0.128" stopColor="#3771C8" />
                  <stop offset="1" stopColor="#6600FF" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </WrapperMain>
  );
}
