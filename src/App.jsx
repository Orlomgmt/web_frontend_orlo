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
    <div className="w-full h-screen relative bg-gradient-to-tl select-none from-slate-50 to-blue-200 overflow-x-hidden mx-auto flex flex-col px-4 sm:px-28 md:justify-start md:items-start">
      <div className="w-full py-5 sm:py-10 flex justify-center md:justify-start md:absolute md:top-0 md:left-28 z-50 ">
        <img
          src="/orloLogo.svg"
          alt="Orlo Logo"
          className="w-32 sm:w-48 sm:mt-[200px] md:mt-0 h-auto"
        />
      </div>
      <div className="flex h-full flex-col justify-center -mt-32 items-center md:items-start max-w-[658px] z-40 md:z-auto md:mt-32">
        <h1 className="text-6xl sm:text-[134px]  font-AvenirBlack z-50 font-black text-[#3778C2] text-center md:text-left">
          Coming Soon!
        </h1>
        <p className="text-lg text-[#1F1D21] font-Avenir font-normal text-center md:text-left z-50">
          We are currently in the process of building.
        </p>
        <p className="text-lg text-[#1F1D21] font-Avenir font-normal text-center md:text-left z-50">
          You can subscribe to our mailing list so you want to get notified when
          we're LIVE.
        </p>
        <p className="justify-self-end absolute bottom-3 text-sm font-normal opacity-70 ">
          © Copyright Orlo | All Rights Reserved
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 items-center md:items-start mt-5 w-full max-w-[585px] z-50"
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
        className="absolute bottom-4 w-[350px] h-[350px] md:w-[550px] md:h-[450px] sm:bottom-[400px] md:mt-[450px] lg:mt-0  sm:left-1/2 lg:left-1/2 sm:-translate-x-1/2 md:-right-44 lg:w-[700px] lg:h-[700px] md:top-0 md:translate-x-32 z-10"
      />
      <img
        src="/Vector 344.png"
        alt="Vector"
        className="absolute -right-1 w-[650px] h-[650px] top-0 z-0"
      />

      <img
        src="/construstionTape.png"
        alt="Construction Tape"
        className="absolute right-[0.5px] max-w-[414px]:top-4 w-full md:w-fit md:-right-[260px] lg:-bottom-[260px] md:-bottom-[260px] xl:-bottom-[260px] md:-rotate-[40deg] z-20"
      />
    </div>
  );
};

export default App;
