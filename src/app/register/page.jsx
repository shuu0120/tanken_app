'use client'

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

import '../../lib/FirebaseConfig'

export default function Auth() {
  const doRegister = async () => {
    const auth = getAuth()

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        'aaa@aaa.aaa',
        'password',
      )
      alert('登録完了！')
    } catch (e) {
      console.error(error)
    }
  }

  return (
    <main style={{ minHeight: '100vh' }}>
      <h1>register</h1>
      <button onClick={doRegister}>登録</button>
    </main>
  )
}
