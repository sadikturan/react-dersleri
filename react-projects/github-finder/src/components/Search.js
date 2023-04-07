import React, { useState,useContext } from 'react'
import { AlertContext } from '../context/alertContext';
import { UsersContext } from '../context/usersContext';

const Search = () => {

    const [keyword, setKeyword] = useState('');
    const { searchUsers, users,clearUsers  } = useContext(UsersContext);
    const { displayAlert } = useContext(AlertContext);

    const onChange = (e) => {
        setKeyword(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(keyword === '') {
            displayAlert('Anahtar Kelime Giriniz', 'warning');
        } else {
            searchUsers(keyword);
            setKeyword('');
        }
    }

    return (
        <div className="container my-3">
            <form onSubmit={onSubmit}>
                <div className="input-group">
                    <input type="text" value={keyword} onChange={onChange} className='form-control' placeholder='Anahtar Kelime' />
                    <button className="btn btn-primary" type='submit'>Ara</button>
                </div>
            </form>
            {
                users.length > 0 && <button onClick={clearUsers} className="btn btn-outline-danger mt-2 btn-block">Sonuçları Temizle</button>
            }        

        </div>
    )
}

export default Search