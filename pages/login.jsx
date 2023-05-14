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
          <div className="buttons" >
            <div className="button1">
              <button className="login" onClick={()=> signIn()} >Sign in</button>
            </div>
            <div className="button2">
              <a href="/"><button className="back">Back</button></a>    
            </div>
          </div>
      </div>
    </>
  )
}