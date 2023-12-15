import { initializeApp, getApps } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'

// ? 参考：https://qiita.com/masakiwakabayashi/items/741998ed5b830d8f3707
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  appId: process.env.NEXT_PUBLIC_APP_ID,
}

// サーバーサイドでレンダリングする時にエラーが起きないようにするための記述
if (typeof window !== 'undefined' && !getApps().length) {
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  if (process.env.NODE_ENV === 'development') {
    connectAuthEmulator(auth, 'http://127.0.0.1:9099')
  }
}
