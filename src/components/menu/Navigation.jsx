import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';



function Navigation({auth}){
    const navigate = useNavigate();

    function navLogin(event){
        event.preventDefault();
        navigate('/login');
    }
    return(
        <div>{
            auth?
                <nav className='admin-navigation'>
                    <ol>
                        <h1>Sekolah Luar Biasa UM</h1>
                        <li>
                            <h2>BERANDA</h2>
                            <ul><a href="/">Data Beranda</a></ul>
                            <ul><a href="/carousel">Data Carousel</a></ul>
                            <ul><a href="/kegiatan">Data Kegiatan</a></ul>
                        </li>
                        <li>
                            <h2>PROFILE</h2>
                            <ul><a href="/sekolah">Data Sekolah</a></ul>
                            <ul><a href="/guru">Data Guru</a></ul>
                            <ul><a href="/siswa">Data Siswa</a></ul>
                        </li>
                        <li>
                            <h2>PRESTASI</h2>
                            <ul><a href="/prestasi">Data Prestasi</a></ul>
                        </li>
                        <li>
                            <h2>FASILITAS</h2>
                            <ul><a href="/fasilitas">Data Fasilitas</a></ul>
                        </li>
                        <li>
                            <h2>ADMIN</h2>
                            <ul><a href="/admin">Data Admin</a></ul>
                        </li>
                    </ol>
                </nav>
            :
                <nav id='public-navigation'>
                    <ul>
                        <li className='nav-logo'>
                            <img src='logo.png' alt='logo'></img>
                            <h1>SLB Autis UM</h1>
                        </li>
                        <li>
                            <a href='/'>BERANDA</a>
                        </li>
                        <li>
                            <Dropdown auth={false}/>
                        </li>
                        <li>
                            <a href='/prestasi'>PRESTASI</a>
                        </li>
                        <li>
                            <a href='/fasilitas'>FASILITAS</a>
                        </li>
                        {/* <li>
                            <a href='/program'>PROGRAM</a>
                        </li> */}
                        <li>
                        <button onClick={navLogin}>LOGIN</button>
                        </li>
                    </ul>
                </nav>
        }</div>
        
    )
}

Navigation.propTypes = {
    auth : PropTypes.bool.isRequired,
    signOut : PropTypes.func.isRequired,
  };

export default Navigation