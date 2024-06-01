"use client";

import { WrapperMain } from "@components/commons/Main";
import { ThemeApp } from "@components/wrappers/context";
import { useContext } from "react";

export default function Home() {
  const { themeApp } = useContext(ThemeApp);
  return (
    <WrapperMain>
      <div className="flex flex-col md:flex-row justify-center items-center h-full md:p-6">
        <div className="flex flex-col md:flex-row border border-sky-800 rounded-md">
          <div className="flex flex-col p-2 md:p-3 justify-center items-center md:items-start w-full md:w-1/2">
            <div className="my-4 w-full">
              <h2 className="text-center w-full font-bold text-2xl md:text-3xl bg-gradient-to-r from-fuchsia-600 to-purple-800 bg-clip-text text-transparent">
                Desenvolvedor Front-end
              </h2>
            </div>

            <div className="w-full flex justify-center">
              <img
                src="https://media.licdn.com/dms/image/D4D03AQEh-qNSzAsiJw/profile-displayphoto-shrink_400_400/0/1683594689756?e=1722470400&v=beta&t=llXFmcq_1qv2UtipcLuXu4wKtuebU6gMMn_VG5fRwHo"
                alt="Foto de perfil"
                className="object-cover lg:w-auto h-32 w-32 xl:h-64 xl:w-56 flex justify-center rounded-lg" />
            </div>
          </div>

          <div className="w-full md:w-1/2  p-2 md:p-3 mt-10 md:mt-0">
            <div className="my-4 w-full">
              <h2 className="text-center text-3xl font-bold bg-gradient-to-r from-fuchsia-600 to-purple-800 bg-clip-text text-transparent">
                Olá, sou o José Allef!
              </h2>
            </div>

            <div className="my-4 w-full">
              <p className="text-xl font-bold text-gray-400 mb-4">
                Com mais de 2 anos de experiência na área de tecnologia,
                sou formado em Análise e Desenvolvimento de Sistemas pela UNICID e continuo a me aprimorar
                por meio de treinamentos e desafios constantes. Participei ativamente do Ignite da Rocketseat
                e do Bootcamp JAMStack da Alura, ampliando ainda mais meu conhecimento e habilidades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </WrapperMain>
  );
}
