import Link from 'next/link'

export default function CookieStandHeader({ username, onLogout }) {
    return (
        <div className="mt-8 bg-green-500">
        <header className="">
            
            <h1 className="text-2xl font-extrabold text-left text-black font">
                Cookie Stand Admin
                </h1>
           

            <div className="flex flex-row text-right">
                <div>
                <p >{username}</p>
                </div>

                <div>
                <Link href="/">
                    <a onClick={onLogout} >Sign Out</a>
                </Link>
                </div>
                
                <div>
                <nav>
                    <Link href="/overview"><a>Overview</a></Link>
                </nav>
                </div>
            </div>
        </header>
        </div>
    )
}