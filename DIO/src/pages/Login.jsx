import { LockKeyhole, Mail } from 'lucide-react';
import Button from '../components/Button';

export default function Login({onPage}) {
  return (
    <div className="w-full lg:flex lg:justify-between justify-center items-center">
      <div className="h-[54px] w-full lg:hidden block"></div>
      <div className="lg:max-w-[565px] w-full">
        <h1 className="lg:text-[32px] sm:text-[26px] text-[20px] text-[#FFFFFF] font-bold lg:text-left text-center transition-all duration-500">
          A plataforma para você aprender com experts, dominar as principais
          tecnologias e entrar mais rápido nas empresas mais desejadas.
        </h1>
      </div>
      <div className="max-w-[368px] lg:mx-0 mx-auto lg:mt-0 mt-[20px]">
        <h1 className="lg:text-[32px] sm:text-[26px] text-[20px] text-[#FFFFFF] font-bold lg:text-left text-center">
          Faça seu cadastro
        </h1>
        <p className="max-w-[368px] lg:mx-0 mx-auto text-[16px] text-[#fff] lg:text-justify text-center">
          Faça seu login e make the change._
        </p>
        <div className="flex items-center border-b border-[#8647AD] pb-1 mt-[15px]">
          <Mail size={18} className="text-[#8647AD] mt-[3px]" />
          <input
            type="text"
            placeholder="E-mail"
            className=" border-[#8647AD] text-[#fff] bg-[#1E192C] ms-[3px] outline-none w-full"
          />
        </div>
        <div className="flex items-center border-b border-[#8647AD] pb-1 mt-[10px]">
          <LockKeyhole size={18} className="text-[#8647AD]  mt-[1px]" />
          <input
            type="text"
            placeholder="Password"
            className=" border-[#8647AD] text-[#fff] bg-[#1E192C] ms-[3px] outline-none"
          />
        </div>
        <div className="w-full lg:text-left text-center">
          <Button text="Entrar" />
        </div>
        <div className="w-full flex justify-between mt-[30px]">
          <button className="text-[#E5E044] text-[14px] font-bold hover:text-[#e5e044b4] transition-all duration-500">
            Esqueci minha senha
          </button>
          <button className="text-[#23DD7A] text-[14px] font-bold hover:text-[#23DD7Ab4] transition-all duration-500" onClick={() => onPage('register')}>
            Criar conta
          </button>
        </div>
      </div>
    </div>
  );
}
