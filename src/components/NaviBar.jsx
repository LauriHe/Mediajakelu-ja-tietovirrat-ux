import { useNavigate } from 'react-router-dom';

function NaviBar() {
  const navigate = useNavigate();

  return (
    <ul className="flex gap-16">
      <li
        className=" text-non-photo-blue hover:text-quinacridone-magenta-2 text-2xl text-center cursor-pointer"
        onClick={() => {
          navigate('/');
        }}
      >
        Koti
      </li>
      <li
        className=" text-non-photo-blue hover:text-quinacridone-magenta-2 text-2xl text-center cursor-pointer"
        onClick={() => {
          navigate('/stream');
        }}
      >
        Live
      </li>
      <li className=" text-non-photo-blue hover:text-quinacridone-magenta-2 text-2xl text-center cursor-pointer">Kalenteri</li>
      <li className=" text-non-photo-blue hover:text-quinacridone-magenta-2 text-2xl text-center cursor-pointer">Arkisto</li>
      <li className=" text-non-photo-blue hover:text-quinacridone-magenta-2 text-2xl text-center cursor-pointer">Info</li>
    </ul>
  );
}

export default NaviBar;
