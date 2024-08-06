import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoChevronDown } from "react-icons/io5";
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Profile from '../../pages/admin/Profile';

const Dropdown = ({signOut}) => {
  const [isOpen, setIsOpen] = useState(false);
  const authUser = useSelector((states) => states.authUser);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }; 

  const handleSelect = (param) => {
    navigate(`/${param}`);
    setIsOpen(false);
  };

  return(
    <>{
      authUser ?
        <div className="dropdown-admin">
          <div className="dropdown-toggle-admin" onClick={toggleDropdown}>
            <p>Hi, {authUser[0].nama}</p>
            <IoChevronDown />
          </div>
          {isOpen && (
            <div className="dropdown-menu-admin">
              <div className="dropdown-item" ><Profile/></div>
              <div className="dropdown-item" onClick={signOut}>Logout</div>
            </div>
          )}
        </div>
      :
      <div className="dropdown">
      <div className="dropdown-toggle" onClick={toggleDropdown}>
        <a>PROFILE </a>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
         <div className="dropdown-item" onClick={() => handleSelect('guru')}>Guru</div>
         <div className="dropdown-item" onClick={() => handleSelect('murid')}>Murid</div>
         <div className="dropdown-item" onClick={() => handleSelect('sekolah')}>Sekolah</div>
        </div>
      )}
    </div>
    }</>
  )
};

Dropdown.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default Dropdown;