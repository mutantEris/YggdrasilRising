import { signOut } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <button onClick={signOut}>Sign out</button>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
