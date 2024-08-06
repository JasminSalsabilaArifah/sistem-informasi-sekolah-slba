import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { asyncBeranda } from '../../states/shared/action';
import Carousel from '../../components/beranda/Carousel';
import Content from '../../components/beranda/Content';
import Kegiatan from '../../components/beranda/Kegiatan';

function Beranda(){
    const carousel = useSelector((states) => states.carousel);
    const beranda = useSelector((states) => states.beranda);
    const dispatch = useDispatch();  

    useEffect(() => {
        dispatch(asyncBeranda());
      }, [dispatch]);

    return(
        <>
            <Carousel carousels={carousel}/>
            <Content berandas={beranda}/>
            <Kegiatan/>
         </>
    )
}

export default Beranda