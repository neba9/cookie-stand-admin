import link from 'next/link'

export default function Overview(){
  return(
    <div>
      <h2> Overview page </h2>
      <Link href="/">
       <a>Back To Home</a>
      </Link>
    </div>
  )
}