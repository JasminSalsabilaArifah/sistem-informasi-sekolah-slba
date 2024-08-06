import { useState } from "react";

function FormUser(){
    const [isOpen, setIsOpen] = useState(false);
    const [name, onNameChange] = useState('');
    const [username, onUsernameChange] = useState('');
    const [password, onPasswordChange] = useState('');

    const handleSimpan = () => {
        togglePopup();
    };

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return(
        <>
            <button className="button-edit" onClick={togglePopup}>TAMBAH</button>
            {isOpen && (
                <div className="background-form">
                    <div className="form">
                        <h3>Form User</h3>
                        <div className="input-text">
                            <label>Nama</label>
                            <input type="text" value={name} onChange={e => onNameChange(e.target.value)} placeholder="Name..." />
                        </div>
                        <div className="input-text">
                            <label >Username</label>
                            <input type="text" value={username} onChange={e => onUsernameChange(e.target.value)} placeholder="Username..." />
                        </div>
                        <div className="input-text">
                            <label>Password</label>
                            <input type="text" value={password} onChange={e => onPasswordChange(e.target.value)} placeholder="Pasword..." />
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



export default FormUser