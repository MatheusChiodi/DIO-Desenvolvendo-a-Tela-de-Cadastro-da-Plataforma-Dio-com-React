export default function Button({ text }) {
  return (
    <button className="px-[4px] border-[1px] border-[rgb(228,16,93)] w-[177px] h-[41px] rounded-xl mt-[40px]">
      <p className="bg-[#E4105D] rounded-xl text-[#fff] hover:bg-[#e4105ed4] transition-all duration-500">{text}</p>
    </button>
  );
}
