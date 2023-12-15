'use client'

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import '../../lib/FirebaseConfig'

export default function Signin() {
  const doSignin = async () => {
    const auth = getAuth()

    try {
      await signInWithEmailAndPassword(auth, 'aa@aaa.aaa', 'password')
      alert('サインイン成功')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <main style={{ minHeight: '100vh' }}>
      <h1>login</h1>
      <button onClick={doSignin}>サインイン</button>
    </main>
  )
}
