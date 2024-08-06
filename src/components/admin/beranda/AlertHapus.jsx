import { useState } from "react";
import PropTypes from 'prop-types';
import { CiCircleAlert } from "react-icons/ci";


function AlertHapus({dt, hapus}){
    const [isOpen, setIsOpen] = useState(false);

    const handleHapus = () => {
        hapus({id:dt.id})
        togglePopup();
    };

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return(
        <>
            <button className="button-red" onClick={togglePopup}>Hapus</button>
            {isOpen && (
                <div className="background-form">
                    <div className="alert">
                        <CiCircleAlert />
                        <h3>Apakah Anda Yakin?</h3>
                        <p>Data ini akan dihpus permanen</p>
                        <div className="from-button">
                            <button className="button-red" onClick={handleHapus}>Hapus</button>
                            <button className="button-blue" onClick={togglePopup}>Batal</button>
                            
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

AlertHapus.propTypes = {
    dt: PropTypes.object.isRequired,
    hapus: PropTypes.func.isRequired,
  };

export default AlertHapus