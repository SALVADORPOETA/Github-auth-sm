import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  console.log(session)
  if (session) {
    return (
      <>
        <div className='container'>
          <p>Welcome, {session.user.name}</p>
          <img src={session.user.image} style={{width: '75px', borderRadius: '50px'}} ></img>
          Signed in as {session.user.email} <br />
          <button className="back" onClick={() => signOut()}>Sign out</button>
        </div>
      </>
    )
  }
  return (
    <>
      <div className='container'>
          <p>You are not signed in.</p>
          <button className="login" onClick={()=> signIn()} >Sign in</button>
          <a href="/"><button className="back">Back Home</button></a>    
      </div>
    </>
  )
}