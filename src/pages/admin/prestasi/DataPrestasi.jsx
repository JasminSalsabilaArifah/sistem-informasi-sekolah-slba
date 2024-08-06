function DataPrestasi (){
    return(
        <div className="admin-content">
            <h1>Data Prestasi</h1>
            <div className="content">
                <div className="head-content">
                    <h2>Data Prestasi</h2>
                    {/* <FormUser /> */}
                </div>
                <div className="table-admin">
                    <table>
                        <thead>
                            <tr>
                                <td>Judul</td>
                                <td>Keterangan</td>
                                <td className="action">Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>ahja</td>
                                <td>ahja</td>
                                <td className="action">
                                    <button className="button-blue" >Edit</button>
                                    <button className="button-red" >Hapus</button>
                                </td>
                            </tr>
                            <tr>
                                <td>ahja</td>
                                <td>ahja</td>
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

export default DataPrestasi