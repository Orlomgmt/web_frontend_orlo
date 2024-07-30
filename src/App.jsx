import { useState } from "react";
import "./index.css";

const App = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    setEmail("");
  };

  return (
    <div className="w-full h-screen relative bg-gradient-to-tl select-none from-slate-50 to-blue-200 overflow-hidden sm:justify-center sm:items-start mx-auto flex flex-col px-4 sm:px-28">
      <div className="w-full py-5 sm:py-10 sm:flex md:flex lg:flex xl:flex justify-center sm:justify-start sm:absolute sm:top-0 sm:left-28 z-50 hidden ">
        <img
          src="/orloLogo.svg"
          alt="Orlo Logo"
          className="w-32 sm:w-48 h-auto"
        />
      </div>

      <div className="flex h-full flex-col justify-center sm:justify-start items-center sm:items-start max-w-[658px] z-40 sm:z-auto sm:mt-32">
        <img
          src="/orloLogo.svg"
          alt="Orlo Logo"
          className="w-32 sm:w-48 h-auto flex mb-4 sm:hiddedn lg:hidden xl:hidden md:hidden"
        />
        <h1 className="text-6xl sm:text-[134px] leading-tight sm:leading-[132px] font-AvenirBlack z-50 font-black text-[#3778C2] text-center sm:text-left">
          Coming Soon!
        </h1>
        <p className="text-lg text-[#1F1D21] font-Avenir font-normal text-center sm:text-left z-50">
          We are currently in the process of building.
        </p>
        <p className="text-lg text-[#1F1D21] font-Avenir font-normal text-center sm:text-left z-50">
          You can subscribe to our mailing list so you want to get notified when
          we're LIVE.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 items-center sm:items-start mt-5 w-full max-w-[585px] z-50"
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-[#FFF] w-full shadow-custom bg-[#E3EDF7] h-[56px] rounded-2xl placeholder:text-[#1F1D21] placeholder:stroke-[#000] placeholder:stroke-2 pl-5"
            required
          />
          <button
            type="submit"
            className="border border-[#FFF] w-[151px] shadow-custom bg-[#E3EDF7] h-[56px] rounded-2xl stroke-black stroke-2 hover:shadow-customHover active:shadow-customHover"
          >
            Subscribe
          </button>
        </form>
      </div>

      <img
        src="/washingM.png"
        alt="Washing Machine"
        className="absolute -bottom-44 sm:-right-44 md:w-[650px] md:h-[650px] w-fit h-fit sm:top-0 z-10 "
      />
      <img
        src="/Vector 344.png"
        alt="Vector"
        className="absolute -right-1 w-[650px] h-[650px] top-0 z-0 sm:z-10"
      />
      <img
        src="/construstionTape.png"
        alt="Construction Tape"
        className="absolute right-[90px] top-0 w-[800px] md:w-fit md:-right-[500px] lg:-bottom-[260px] md:-bottom-[260px] xl:-bottom-[260px] -rotate-[40deg] z-20"
      />
    </div>
  );
};

export default App;
