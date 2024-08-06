import { useState } from "react";
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function EditBeranda({onEdit}){
    const beranda = useSelector((states) => states.beranda);
    const [isOpen, setIsOpen] = useState(false);
    const [imgKepsek, setImgKepsek] = useState(null)
    const [imgBeranda, setImgBeranda] = useState(null)
    const [sambutan, setSambutan] = useState('')
    const [visi, setVisi] = useState('')

    

    const handleSimpan = () => {
        onEdit({imgKepsek, imgBeranda, sambutan, visi}); 
        togglePopup();
    };

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return(
        <>
            <button className="button-edit" onClick={togglePopup}>EDIT</button>
            {isOpen && (
                <div className="background-form">
                    <div className="form">
                        <h3>Edit Beranda</h3>
                        <div className="input-file">
                            <label >Foto Kepala Sekolah</label>
                            <input type="file" accept="image/jpeg" onChange={e =>setImgKepsek(e.target.files[0])}/>
                        </div>
                        <div className="input-file">
                            <label >Foto Beranda</label>
                            <input type="file" accept="image/jpeg" onChange={e =>setImgBeranda(e.target.files[0])}/>
                        </div>
                        <div className="input-textarea">
                            <label>Sambutan Kepala Sekolah</label>
                            <textarea defaultValue={beranda.sambutan} name="sambutan" id="sambutan" onChange={e =>setSambutan(e.target.value)}></textarea>
                        </div>
                        <div className="input-textarea">
                            <label >Visi</label>
                            <textarea defaultValue={beranda.visi} name="sambutan"  id="visi" onChange={e =>setVisi(e.target.value)}></textarea>
                        </div>
                        <div className="from-button">
                            <button className="button-blue" onClick={handleSimpan} >Simpan</button>
                            <button className="button-red" onClick={togglePopup}>Batal</button>
                        </div>
                    </div>
                </div>
            )}
        </>

    )
}

EditBeranda.propTypes = {
    onEdit: PropTypes.func.isRequired,
  };

export default EditBeranda