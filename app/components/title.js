const Title = () => {
    return (
        <div className="flex justify-center items-center flex-1 overflow-hidden bg-white h-screen">
        <div 
          className="flex items-center gap-4 animate-[slideLeftToRight_20s_linear_infinite]"
        >
          <h1 className="text-[20vw] text-[#f4f4f4] font-vercetti tracking-tight text-orange-500">Lussert</h1>
          <span className="text-[20vw] text-[#f4f4f4] font-vercetti text-orange-200">—</span>
          <h1 className="text-[20vw] text-[#f4f4f4] font-vercetti tracking-tight text-orange-500">Axel</h1>
        </div>
      </div>
    );
};

export default Title;