import Button from '../components/Button';

export default function Home() {
  return (
      <div className="w-full md:flex md:justify-between justify-center items-center">
        <div>
          <h1 className="text-[32px] text-[#E4105D] font-bold md:text-left text-center">
            Implemente <br />{' '}
            <span className="text-[#FFFFFF]">o seu futuro global agora!</span>
          </h1>
          <p className="max-w-[368px] md:mx-0 mx-auto text-[16px] text-[#fff] md:text-justify text-center">
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </p>
          <div className='w-full md:text-left text-center'>
            <Button text="Começar agora" />
          </div>
        </div>
        <img src="../public/img1.png" alt="hero" className='md:block hidden'/>
      </div>
  );
}
