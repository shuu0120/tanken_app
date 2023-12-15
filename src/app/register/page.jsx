'use client'

import {
  getAuth,
  createUserWithEmailAndPassword,
  AuthErrorCodes,
} from 'firebase/auth'
import { useState } from 'react'

import '../../lib/FirebaseConfig'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const doRegister = async () => {
    const auth = getAuth()

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      alert('登録完了！')
    } catch (error) {
      // ? エラーコードはここを参照：https://firebase.google.com/docs/reference/js/auth?hl=ja#autherrorcodes
      switch (error.code) {
        case AuthErrorCodes.INVALID_EMAIL:
          setError('メールアドレスが無効です')
          break
        case AuthErrorCodes.WEAK_PASSWORD:
          setError('パスワードが弱いです')
          break
        default:
          setError(`エラーが発生しました\nエラーコード:${error.code}`)
      }
    }
  }

  return (
    <main style={{ minHeight: '100vh' }}>
      <h1>register</h1>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <button
        onClick={doRegister}
        disabled={email.length === 0 || password.length === 0}
      >
        登録
      </button>
      <p style={{ color: 'red' }}>{error}</p>
    </main>
  )
}
