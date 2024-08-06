import { useState } from "react";
import { useSelector } from 'react-redux';
import { IoCloseOutline } from "react-icons/io5";

function Profile({onEdit}){
    const beranda = useSelector((states) => states.beranda);
    const [isOpen, setIsOpen] = useState(false);
    const [imgKepsek, setImgKepsek] = useState(null)
    const [imgBeranda, setImgBeranda] = useState(null)
    const [sambutan, setSambutan] = useState(beranda.sambutan)
    const [visi, setVisi] = useState(beranda.visi)

    

    const handleSimpan = () => {
        onEdit({imgKepsek, imgBeranda, sambutan, visi}); 
        togglePopup();
    };

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return(
        <>
            <a onClick={togglePopup}>Profile </a>
            {isOpen && (
                <div className="background-form">
                    <div className="form-profile">
                        <div className="profile-head">
                            <h3>PROFILE</h3>
                            <IoCloseOutline onClick={togglePopup}/>
                        </div>
                        <div className="profile-info">
                            <div className="info">
                                <h4>Nama</h4>
                                <p>rgerg</p>
                            </div>
                            <div className="info">
                                <h4>Username</h4>
                                <p>fvuy</p>
                            </div>
                        </div>
                        <div className="from-button">
                            <button className="button-blue">Ganti Password</button>
                            <button className="button-red">Hapus Akun</button>
                        </div>
                    </div>
                </div>
            )}
        </>

    )
}



export default Profile