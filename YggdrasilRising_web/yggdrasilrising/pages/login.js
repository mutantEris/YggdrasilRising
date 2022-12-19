import { signIn, useSession } from 'next-auth/client'

export default function Login() {
  const [session, loading] = useSession()

  return (
    <div>
      {!session && (
        <button onClick={signIn} disabled={loading}>
          Sign in
        </button>
      )}
      {session && <div>Signed in as {session.user.email}</div>}
    </div>
  )
}
