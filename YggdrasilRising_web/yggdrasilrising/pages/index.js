import { useSession } from 'next-auth/client'

export default function Home() {
  const [session] = useSession()

  return (
    <div>
      {session ? (
        <div>Welcome, {session.user.email}!</div>
      ) : (
        <div>Please sign in</div>
      )}
    </div>
  )
}
