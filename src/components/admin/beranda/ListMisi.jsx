import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import EditMisi from './EditMisi';
import AlertHapus from './AlertHapus';

function ListMisi({edit, hapus}){
    const misi = useSelector((states) => states.misi);

    return(
        <div className="content-misi">
            <div className="head-content">
                <h2>Data Misi</h2>
                {/* <FormUser /> */}
            </div>
            <div className="table-admin">
                <table>
                    <thead>
                        <tr>
                            <td>Misi</td>
                            <td className="action">Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {misi.map((dt) => (
                            <tr key={dt.id}>
                                <td>{dt.misi}</td>
                                <td className="action">
                                    <EditMisi dt={dt} edit={edit}/>
                                    <AlertHapus dt={dt} hapus={hapus}/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

ListMisi.propTypes = {
    edit: PropTypes.func.isRequired,
    hapus: PropTypes.func.isRequired,
  };

export default ListMisi