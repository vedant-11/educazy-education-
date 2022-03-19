import Image from "next/image";
import hero from "../assets/hero.png";
import NavBox from "../components/NavBox";
import Schedule from "../components/Schedule";

export default function Home() {
  return (
    <>
      <section className="  flex mx-12 justify-between my-24 ">
        <div className="justify-evenly flex flex-col ">
          <article>
            {" "}
            <h1 className="font-poppins text-[#303030] text-5xl">
              Join the class
            </h1>
            <p className="text-[#5e5d5d] text-lg mt-4 w-3/4">
              orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididun
            </p>
          </article>

          <div>
            <input
              className="bg-white/60 text-[#8D8D8D] px-4 drop-shadow-2xl rounded-sm h-10 w-96"
              placeholder="Ecyz-219"
            />
            <a
              href="https://educazy.herokuapp.com/api"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#62C733] h-10 text-white rounded-sm drop-shadow-2xl ml-4 font-poppins w-40">
                Enter class
              </button>
            </a>
          </div>
        </div>
        <div className="w-96 mr-24 ">
          <Image src={hero} layout="responsive" />
        </div>
      </section>
      <NavBox />
      <Schedule />
    </>
  );
}
