import { useState } from "react";
import PropTypes from 'prop-types';

function EditMisi({dt, edit}){
    const [isOpen, setIsOpen] = useState(false);
    const [misi, onMisiChange] = useState('');

    const handleSimpan = () => {
        edit({id:dt.id, misi})
        togglePopup();
    };

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return(
        <>
            <button className="button-blue" onClick={togglePopup}>Edit</button>
            {isOpen && (
                <div className="background-form">
                    <div className="form">
                        <h3>Edit Misi</h3>
                        <div className="input-textarea">
                            <label >Misi</label>
                            <textarea defaultValue={dt.misi} name="sambutan"  id="visi" onChange={e =>onMisiChange(e.target.value)}></textarea>
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

EditMisi.propTypes = {
    dt: PropTypes.object.isRequired,
    edit: PropTypes.func.isRequired,
  };

export default EditMisi