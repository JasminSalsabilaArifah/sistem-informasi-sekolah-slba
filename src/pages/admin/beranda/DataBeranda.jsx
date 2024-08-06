import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { asyncPreloadProcess } from '../../../states/isPreload/action';
import { asyncEditBeranda } from '../../../states/beranda/action';
import { asyncEditMisi } from '../../../states/misi/action';
import { asyncDeleteMisi } from '../../../states/misi/action';
import EditBeranda from "../../../components/admin/beranda/editBeranda"
import ListMisi from '../../../components/admin/beranda/ListMisi';

function DataBeranda(){
    const beranda = useSelector((states) => states.beranda);
    const dispatch = useDispatch(); 

    const onEditBeranda = ({visi, sambutan, imgKepsek, imgBeranda}) => {
        dispatch(asyncEditBeranda({visi, sambutan, imgKepsek, imgBeranda}));
    }

    const onEditMisi = ({id, misi}) => {
        dispatch(asyncEditMisi({id, misi}));
    }

    const onDeleteMisi = ({id}) => {
        dispatch(asyncDeleteMisi({id}));
    }

    useEffect(() => {
        dispatch(asyncPreloadProcess());
      }, [dispatch]);

    return(
        <div className="admin-content">
            <h1>Data Beranda</h1>
            <div className="content">
                <div className="head-content">
                    <h2>Data Beranda</h2>
                    <EditBeranda onEdit={onEditBeranda}/>
                </div>
                <div className="main-beranda">
                    <div className="beranda-konten">
                        <h3>Data Sambutan</h3>
                        <div className='sambutan-section'>
                            <div className='sambutan-konten'>
                                {beranda.imgKepsek && <img src={beranda.imgKepsek} alt="Kepala Sekolah" />} 
                            </div>
                             <div className='sambutan-konten'>
                                <p>{beranda.sambutan}</p>
                            </div>
                        </div>
                    </div>
                    <div className='beranda-konten'>
                        <h3>Gambar Beranda</h3>
                        <div className='imgBeranda'>
                            {beranda.imgBeranda && <img src={beranda.imgBeranda} alt="Kepala Sekolah" />} 
                        </div>
                    </div>
                    <div className='beranda-konten-visi'>
                        <h3>Visi</h3>
                        <div className='isi-visi'>
                            <p>{beranda.visi}</p>
                        </div>
                    </div>
                    <ListMisi edit={onEditMisi} hapus={onDeleteMisi}/>
                </div>
            </div>
        </div>
    )
}

export default DataBeranda