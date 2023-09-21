import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';
import axios from 'axios';

const inter = Inter({ subsets: ['latin'] })

export default function UserHome() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  const Axios = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: true,
    headers: {
      Accept: 'application/json'
    }
  });

  const login = () => {
    Axios.get('/sanctum/csrf-cookie').then((res) => {
      Axios.post('/login', {email, password}).then((res) => {
        console.log(res);
      })
    })
  }

  const logout = () => {
    Axios.post('/logout').then((res) => {
      console.log(res)
    })
  }
  const getUsers = () => {
    Axios.get('/api/users').then((res) => {
      setUsers(res.data);
    })
  }

  const reset = () => {setUsers([])}
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  return (
    <div className="App">
      <nav>
        <button onClick={login}>ログイン</button>
        <button onClick={logout}>ログアウト</button>
        <button onClick={getUsers}>User 一覧</button>
        <button onClick={reset}>リセット</button>
      </nav>
        <br />
      <div>
        <label>email</label>
        <input type="text" value={email} onChange={onChangeEmail}/>
        <label>password</label>
        <input type="password" value={password} onChange={onChangePassword}/>
      </div>
      <div>
        {
          users.map((user) => {
            return (
              <p key={user.email}>{user.name}</p>
            )
          })
        }
      </div>
    </div>
  );
}
