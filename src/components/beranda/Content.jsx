import PropTypes from 'prop-types';

function Content({berandas}){
    console.log(berandas)
    const {imgKepsek, sambutan, imgBeranda, visi, misi} = berandas
    return(
        <>
            <div id='container'>
                <div id="head">
                    <div id="container-head-konten">
                        <h1>Sekolah Luar Biasa Autis Labolatorium Universitas Negeri Malang</h1>
                        <div id="container-head-konten-sambutan">
                            {imgKepsek && <img src={imgKepsek} alt="Kepala Sekolah" />}   
                            <p>{sambutan}</p>
                        </div>
                    </div>
                    <div id="container-head-gambar">
                        {imgBeranda && <img src={imgBeranda} alt="Profile Beranda" />}             
                    </div>
                </div>
            </div>
            <div id='container' >
                <div id="visimisi">
                    <h1>Visi & Misi</h1>
                    <div id="content-visimisi">
                        <div id="container-visi">
                            <h2>Visi</h2>
                            <p>&ldquo;{visi}&ldquo;</p>
                        </div>
                    <div id="container-misi">
                        <h2>Misi</h2>
                        {/* <ol>{
                            misi.map((ms) => (
                                <li key={ms.id}>{ms.misi}</li>
                            ))
                        }</ol> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Content.propTypes = {
    berandas: PropTypes.object.isRequired
  }

export default Content