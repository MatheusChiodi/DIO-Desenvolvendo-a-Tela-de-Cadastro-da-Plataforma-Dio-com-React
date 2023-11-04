import { LockKeyhole, Mail, User } from 'lucide-react';
import Button from '../components/Button';

export default function Login({onPage}) {
  return (
    <>
      <div className="w-full lg:flex lg:justify-between justify-center items-center overflow-auto">
        <div className="h-[54px] w-full lg:hidden block"></div>
        <div className="lg:max-w-[565px] w-full">
          <h1 className="lg:text-[32px] sm:text-[26px] text-[20px] text-[#FFFFFF] font-bold lg:text-left text-center transition-all duration-500">
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </h1>
        </div>
        <div className="max-w-[368px] lg:mx-0 mx-auto lg:mt-0 mt-[20px]">
          <h1 className="lg:text-[32px] sm:text-[26px] text-[20px] text-[#FFFFFF] font-bold lg:text-left text-center">
            Comece agora grátis
          </h1>
          <p className="max-w-[368px] lg:mx-0 mx-auto text-[16px] text-[#fff] lg:text-justify text-center">
            Crie sua conta e make the change._
          </p>
          <div className="flex items-center border-b border-[#8647AD] pb-1 mt-[15px]">
            <User size={18} className="text-[#8647AD] mt-[3px]" />
            <input
              type="text"
              placeholder="Nome completo"
              className=" border-[#8647AD] text-[#fff] bg-[#1E192C] ms-[3px] outline-none"
            />
          </div>
          <div className="flex items-center border-b border-[#8647AD] pb-1 mt-[15px]">
            <Mail size={18} className="text-[#8647AD] mt-[3px]" />
            <input
              type="text"
              placeholder="E-mail"
              className=" border-[#8647AD] text-[#fff] bg-[#1E192C] ms-[3px] outline-none"
            />
          </div>
          <div className="flex items-center border-b border-[#8647AD] pb-1 mt-[15px]">
            <LockKeyhole size={18} className="text-[#8647AD]  mt-[1px]" />
            <input
              type="text"
              placeholder="Password"
              className=" border-[#8647AD] text-[#fff] bg-[#1E192C] ms-[3px] outline-none"
            />
          </div>
          <div className="w-full lg:text-left text-center">
            <Button text="Criar minha conta" />
          </div>
          <p className="mt-[20px] max-w-[368px] lg:mx-0 mx-auto text-[16px] text-[#fff] lg:text-justify text-center">
            Ao clicar em "criar minha conta grátis", declaro que aceito as
            Políticas de Privacidade e os Termos de Uso da DIO.
          </p>
          <p className="max-w-[368px] lg:mx-0 mx-auto text-[16px] text-[#fff] lg:text-justify text-center">
            Já tenho conta.{' '}
            <button className="text-[#23DD7A] text-[14px] font-bold hover:text-[#23DD7Ab4] transition-all duration-500" onClick={() => onPage('login')}>
              Fazer login
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
