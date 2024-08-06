import FormUser from "../../../components/admin/user/FormUser"

function DataAdmin(){
    return(
        <div className="admin-content">
            <h1>Data Admin</h1>
            <div className="content">
                <div className="head-content">
                    <h2>Data Admin</h2>
                    <FormUser />
                </div>
                <div className="table-admin">
                    <table>
                        <thead>
                            <tr>
                                <td>Nama</td>
                                <td>Username</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ahja</td>
                                <td>kndk</td>
                            </tr>
                            <tr>
                                <td>ahja</td>
                                <td>kndk</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DataAdmin