import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncSetAuthUser, asyncUnsetAuthUser } from './states/authUser/action';
import { asyncPreloadProcess } from './states/isPreload/action';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navigation from './components/menu/Navigation';
import Beranda from './pages/public/Beranda';
import Footer from './components/Footer';
import Dropdown from './components/menu/Dropdown';
import DataBeranda from './pages/admin/beranda/DataBeranda';
import Guru from './pages/public/Guru';
import Murid from './pages/public/Murid';
import Sekolah from './pages/public/Sekolah';
import Prestasi from './pages/public/Prestasi';
import Fasilitas from './pages/public/Fasilitas';
import Login from './pages/Login';
import DataAdmin from './pages/admin/admin/DataAdmin';
import DataFasilitas from './pages/admin/fasilias/DataFasilitas';
import DataCarousel from './pages/admin/beranda/DataCarousel';
import DataKegiatan from './pages/admin/beranda/DataKegiatan';
import DataSekolah from './pages/admin/profile/DataSekolah';
import DataGuru from './pages/admin/profile/DataGuru';
import DataPrestasi from './pages/admin/prestasi/DataPrestasi';
import DataSiswa from './pages/admin/profile/DataSiswa';

function App() {
  const authUser = useSelector((states) => states.authUser);
  const navigate = useNavigate();
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onLogin = ({ username, password }) => {
    dispatch(asyncSetAuthUser({ username, password }));
    navigate('/');
  };

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (authUser === null){
    return(
      <>
        <header>
          <Navigation auth={false}/>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Beranda/>} />
            <Route path="/guru" element={<Guru/>} />
            <Route path="/murid" element={<Murid/>} />
            <Route path="/sekolah" element={<Sekolah/>} />
            <Route path="/prestasi" element={<Prestasi/>} />
            <Route path="/fasilitas" element={<Fasilitas/>} />
            <Route path="/login" element={<Login login={onLogin}/>} />
          </Routes>
        </main>
        <footer>
          <Footer/>
        </footer>
      </>
    )
  }

  return (
    <div className='admin'>
        <Navigation auth={true} />
        <div className='admin-content-section'>
          <Dropdown signOut={onSignOut} />
          <Routes>
            <Route path="/" element={<DataBeranda/>} />
            <Route path="/carousel" element={<DataCarousel/>} />
            <Route path="/kegiatan" element={<DataKegiatan/>} />
            <Route path="/sekolah" element={<DataSekolah/>} />
            <Route path="/guru" element={<DataGuru/>} />
            <Route path="/siswa" element={<DataSiswa/>} />
            <Route path="/prestasi" element={<DataPrestasi/>} />
            <Route path="/fasilitas" element={<DataFasilitas/>} />
            <Route path="/admin" element={<DataAdmin/>} />
          </Routes>
        </div>
    </div>
  )
}

export default App
