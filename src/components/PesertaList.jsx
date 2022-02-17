import React, { useState, useEffect } from 'react'
import axios from 'axios';
import hapus from '../assets/icon/hapus.svg';
import edit from '../assets/icon/edit.svg';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const PesertaList = () => {

    const [peserta, setPeserta] = useState([]);

    useEffect(() => {
        getPeserta();
    }, []);

    // membuat fungsi fatch data dari api
    const getPeserta = async () => {
        const response = await axios.get('http://localhost:5000/peserta');
        console.log(peserta.data);
        setPeserta(response.data);
    }

    const deletePeserta = async (id) => {
        await axios.delete(`http://localhost:5000/peserta/${id}`);
        Swal.fire({
            title: 'Berhasil',
            text: `Success Menghapus data`,
            icon: 'error',
            confirmButtonText: 'Oke'
        })
        getPeserta();
    }

    return (
        <div>
            <h2 className='text-center'>Peserta Peka-22</h2>
            <br />
            <Link to='/add' className='btn btn-primary'>Add Peserta</Link>
            <br />
            <table className='table'>
                <thead className='table-light'>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Alamat</th>
                        <th>Jurusan</th>
                        <th>Nomer Hp</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {peserta.map((mahasiswa, index) => (
                        <tr key={mahasiswa.id}>
                            <td>{index + 1}</td>
                            <td>{mahasiswa.nama}</td>
                            <td>{mahasiswa.alamat}</td>
                            <td>{mahasiswa.jurusan}</td>
                            <td>0{mahasiswa.no_hp}</td>
                            <td>{mahasiswa.email}</td>
                            <td>
                                <Link to={`/edit/${mahasiswa.id}`} className="btn btn-primary me-2"><img src={edit} /></Link>
                                <button onClick={() => deletePeserta(mahasiswa.id)} className="btn btn-danger"><img src={hapus} /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PesertaList;