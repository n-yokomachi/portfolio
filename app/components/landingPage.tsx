export function LandingPage() {
  return (
    <div className="min-h-screen bg-[#fffbeb] flex flex-row items-center justify-center px-4 sm:px-8">
      <div className="w-[70%] flex items-center justify-center">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-sky-950">
          PORTFOLIO
        </h1>
      </div>
      <div className="h-[100px] w-px bg-sky-950 mx-4"></div>
      <div className="w-[30%] flex items-center justify-start">
        <div className="text-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-sky-950 mb-2">
            Yokomachi
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-sky-950">
            Naoki
          </h2>
        </div>
      </div>
    </div>
  );
}
