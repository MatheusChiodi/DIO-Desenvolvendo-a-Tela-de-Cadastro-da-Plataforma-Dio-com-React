export default function Header() {
  return (
    <div className="fixed w-full h-[48px] top-0">
      <div className="bg-[#151515] h-[47px] flex justify-between items-center px-[60px]">
        <img
          src="../public/logo-dio.png"
          alt="logo"
          className="h-[20px] m-[13px]"
        />
        <div className="flex justify-between items-center">
          <button className="text-[#FFFFFF] text-[18px] font-[400] hover:text-gray-500 transition-all duration-500">
            Home
          </button>
          <button className="text-[#FFFFFF] text-[16px] font-[400] w-[120px] h-[23px] mx-3 bg-[#565656] rounded-[15px] m-0 p-0 hover:bg-[#4b4b4b] transition-all duration-500">
            Entrar
          </button>
          <button className="text-[#FFFFFF] text-[16px] font-[400] w-[120px] h-[23px] bg-[#565656] rounded-[15px] m-0 p-0 hover:bg-[#4b4b4b] transition-all duration-500">
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
}
