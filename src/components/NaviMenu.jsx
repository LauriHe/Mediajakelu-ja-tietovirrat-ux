import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function NaviMenu({ toggleNaviMenu }) {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[100vh] absolute z-50 bg-raisin-black flex justify-center pt-16">
      <ul className="flex flex-col gap-10">
        <li
          className="text-non-photo-blue hover:text-quinacridone-magenta-2 text-2xl text-center cursor-pointer"
          onClick={() => {
            toggleNaviMenu();
            navigate('/');
          }}
        >
          Koti
        </li>
        <li
          className="text-non-photo-blue hover:text-quinacridone-magenta-2 text-2xl text-center cursor-pointer"
          onClick={() => {
            toggleNaviMenu();
            navigate('/stream');
          }}
        >
          Live
        </li>
        <li className="text-non-photo-blue hover:text-quinacridone-magenta-2 text-2xl text-center cursor-pointer">Kalenteri</li>
        <li className="text-non-photo-blue hover:text-quinacridone-magenta-2 text-2xl text-center cursor-pointer">Arkisto</li>
        <li className="text-non-photo-blue hover:text-quinacridone-magenta-2 text-2xl text-center cursor-pointer">Info</li>
      </ul>
    </div>
  );
}

NaviMenu.propTypes = {
  toggleNaviMenu: PropTypes.func,
};

export default NaviMenu;
