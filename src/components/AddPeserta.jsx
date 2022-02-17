import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddPeserta = () => {
    const [nama, setNama] = useState('');
    const [alamat, setAlamat] = useState('');
    const [jurusan, setJurusan] = useState('');
    const [noHp, setNoHp] = useState('');
    const [email, setEmail] = useState('');

    const history = useHistory();

    const savePeserta = async (e) => {
        // agar saat submit tidak reload
        e.preventDefault();

        await axios.post('http://localhost:5000/peserta', {
            nama: nama,
            alamat: alamat,
            jurusan: jurusan,
            no_hp: noHp,
            email: email,
        });
        Swal.fire({
            title: 'Berhasil',
            text: `Success Menambahkan peserta ${nama}`,
            icon: 'success',
            confirmButtonText: 'Oke'
        })
        history.push('/');
    }


    return (
        <div>
            <form onSubmit={savePeserta}>
                <div className="mb-3 mt-5">
                    <h2 className='text-center'>Form Pendaftaran Peka 22</h2>
                    <label className="form-label">Nama Lengkap</label>
                    <input
                        type="text"
                        className='form-control'
                        placeholder='Masukkan Nama Lengkap'
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Alamat</label>
                    <input
                        type="text"
                        className='form-control'
                        placeholder='Masukkan Alamat '
                        value={alamat}
                        onChange={(e) => setAlamat(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Jurusan</label>
                    <input
                        type="text"
                        className='form-control'
                        placeholder='Masukkan Jurusan '
                        value={jurusan}
                        onChange={(e) => setJurusan(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Nomer Hp</label>
                    <input
                        type="number"
                        className='form-control'
                        placeholder='Masukkan Nomor hp '
                        value={noHp}
                        onChange={(e) => setNoHp(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className='form-control'
                        aria-describedby='emailHelp'
                        placeholder='Masukkan Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Tambah</button>
            </form>
        </div>
    )
}

export default AddPeserta;