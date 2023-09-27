import { Outlet, useNavigate } from 'react-router-dom';
import NaviMenu from '../components/NaviMenu';
import { useEffect, useState } from 'react';
import NaviBar from '../components/NaviBar';

function Layout() {
  const [naviMenuOpen, setNaviMenuOpen] = useState(false);
  const [desktopNavi, setDesktopNavi] = useState(false);
  const navigate = useNavigate();
  const desktopSize = 770;

  const navigateHome = () => {
    navigate('/');
  };

  const toggleNaviMenu = () => {
    setNaviMenuOpen(!naviMenuOpen);
  };

  onresize = () => {
    if (window.innerWidth > desktopSize) {
      setDesktopNavi(true);
    } else {
      setDesktopNavi(false);
      setNaviMenuOpen(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth > desktopSize) {
      setDesktopNavi(true);
    }
  }, []);

  return (
    <>
      <nav className="w-full h-28 p-5 bg-raisin-black flex justify-between items-center relative z-50">
        <div className="h-fit cursor-pointer" onClick={navigateHome}>
          <h1 className="text-non-photo-blue font-HammersmithOne text-3xl">Film</h1>
          <h1 className="text-non-photo-blue font-HammersmithOne text-3xl">Festival</h1>
        </div>
        {desktopNavi && <NaviBar></NaviBar>}
        {!desktopNavi && (
          <button
            className={naviMenuOpen ? 'w-14 h-14 bg-[url(../closeIcon.svg)] bg-cover' : 'w-14 h-14 bg-[url(../menuIcon.svg)] bg-cover'}
            onClick={toggleNaviMenu}
          ></button>
        )}
      </nav>
      {naviMenuOpen && !desktopNavi ? <NaviMenu toggleNaviMenu={toggleNaviMenu}></NaviMenu> : null}
      <main className="bg-raisin-black-2 h-full">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
