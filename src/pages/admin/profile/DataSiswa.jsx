function DataSiswa (){
    return(
        <div className="admin-content">
            <h1>Data Siswa</h1>
            <div className="content">
                <div className="head-content">
                    <h2>Data Siswa</h2>
                    {/* <FormUser /> */}
                </div>
                <div className="table-admin">
                    <table>
                        <thead>
                            <tr>
                                <td>Nama</td>
                                <td>NIS</td>
                                <td>NISN</td>
                                <td>Kelas</td>
                                <td>Jenis Kelamin</td>
                                {/* <td>Tempat Tanggal Tahir</td>
                                <td>Nama Ayah</td>
                                <td>Nama Ibu</td>
                                <td>Alamat</td>
                                <td>Umur</td> */}
                                <td className="action">Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ahja</td>
                                <td>ahja</td>
                                <td>ahja</td>
                                <td>ahja</td>
                                <td>ahja</td>
                                {/* <td>ahja</td>
                                <td>ahja</td>
                                <td>ahja</td>
                                <td>ahja</td>
                                <td>ahja</td> */}
                                <td className="action">
                                    <button className="button-blue" >Edit</button>
                                    <button className="button-red" >Hapus</button>
                                </td>
                            </tr>
                            <tr>
                                <td>ahja</td>
                                <td>ahja</td>
                                <td>ahja</td>
                                <td>ahja</td>
                                <td>ahja</td>
                                {/* <td>ahja</td>
                                <td>ahja</td>
                                <td>ahja</td>
                                <td>ahja</td>
                                <td>ahja</td> */}
                                <td className="action">
                                    <button className="button-blue" >Edit</button>
                                    <button className="button-red" >Hapus</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DataSiswa