import { useNavigate } from 'react-router-dom';
import thumbnail from '../assets/images/thumbnail.jpeg';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <h2 className="absolute text-5xl font-HammersmithOne font-bold text-raisin-black top-[13rem] left-1/2 translate-x-[-50%]">Slogan</h2>
      <div className="bannerImage"></div>
      <div className="w-full flex flex-col items-center justify-center gap-24 mt-24 pb-8">
        <div className="w-[90%] lg:w-[921px] h-fit relative ">
          <div className="absolute left-5 bottom-5 flex items-baseline gap-3 z-10">
            <p className=" font-medium text-3xl text-white">Live</p>
            <div className="bg-red-600 w-4 h-4 rounded-full"></div>
          </div>
          <a
            className="w-full h-full absolute z-20 cursor-pointer"
            onClick={() => {
              navigate('/stream');
            }}
          ></a>
          <div className="w-full h-full absolute filter"></div>
          <img className="w-full rounded-md streamImage" src={thumbnail}></img>
        </div>

        <div className="w-[90%] sm:w-[576px] h-fit flex flex-col p-5 gap-5 bg-non-photo-blue justify-center items-center rounded-md">
          <img className="w-full rounded-md" src={thumbnail}></img>
          <p className="rounded-md font-base text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis arcu eu rhoncus accumsan. Aenean lacinia, magna rhoncus hendrerit
            efficitur.
          </p>
          <button className="w-1/2 h-12 text-center bg-raisin-black-2 hover:bg-quinacridone-magenta text-white text-lg rounded-md">Lue lisää</button>
        </div>
      </div>
    </>
  );
}

export default Home;
