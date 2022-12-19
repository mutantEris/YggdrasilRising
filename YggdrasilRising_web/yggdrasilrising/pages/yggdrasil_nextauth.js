import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Login() {
  const [session, loading] = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !session) {
      signIn()
    }
    if (session) {
      router.push('/')
    }
  }, [session, loading])

  return <div>Authenticating...</div>
}

export async function getServerSideProps(context) {
  return {
    props: {
      session: await context.req.session,
    },
  }
}
