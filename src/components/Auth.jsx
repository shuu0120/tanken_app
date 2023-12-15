// ! かなり上流でclientコンポーネントを利用しているためSSRの恩恵がない
// ? Compositionという機能を使えばClient Compの中でServer Compを使えるらしい
// ? パフォーマンスで詰まったら要検討
// ? 参考：https://qiita.com/honey32/items/bc24d8c0ea3d096ff956
'use client'
import { useRouter } from 'next/navigation'
import { getAuth } from 'firebase/auth'

import '../lib/FirebaseConfig'

/**
 * サインイン済みか検証する
 * サインインしていなければサインインページに移動させる
 * （このコンポーネントを利用しているページはFirebaseの初期化が自動的に行われる）
 * */
export default function Auth({ children }) {
  const router = useRouter()
  const auth = getAuth()
  if (auth.currentUser === null) router.replace('/signin')
  return children
}
