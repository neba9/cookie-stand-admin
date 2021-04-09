import Head from 'next/head'
import { useState } from 'react'


export default function Home() {

  const [location, setLocation] = useState('locations')
  
  function locationInputHandler(event){
    event.preventDefault();
    // alert(event.target.location.value)
    setLocation(event.target.location.value)
  
  }

  const [minCustomer, setMinCustomer] = useState('minCustomers')

  function minCustomerHandler(event){
    event.preventDefault();
    setMinCustomer(event.target.minCustomer.value)
  }

  const [maxCustomer, setMaxCustomer] = useState('maxCustomers')

  function maxCustomerHandler(event){
    event.preventDefault();
    setMaxCustomer(event.target.maxCustomer.value)
    
  }

  const [avgCookies, setAvgCookies] = useState('avgCookiess')

  function avgCookiesHandler(event){
    event.preventDefault();
    setAvgCookies(event.target.avgCookies.value)
    
  }
  
  return (
    <div className="">
      <Head>
        <title>Cookie-stand-admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-green-500 text-gray-50">
        <h1 className = "text-3xl text-black "> Cookie Stand Admin</h1>
      </header>
  
        <main className="pt-7 ">

          <div className="my-3 bg-green-200 w-100 h-400">

              <h2 className="pt-3 font-bold text-center">Create Cooke Stand</h2>
              <br/>
        
            <form onSubmit={locationInputHandler} className="">
              <label>Location</label>
              <input  name="location" className="mx-1"></input>
              <button className="flex flex-row"></button>
            </form>
            <br/>
            <div className="flex flex-row ">
              <div>
                <form onSubmit={minCustomerHandler} className="">
                  <label>Minimum Customers per Hour</label>
                  <input name="minCustomer"className="pl-1"></input>
                  <button></button>
                </form>
              </div>

              <div>
              <form onSubmit={maxCustomerHandler}>
                  <label>Maximum Customers per Hour</label>
                  <input name="maxCustomer" className="pl-1"></input>
                  <button></button>
                </form>
              </div>

              <div>
              <form onSubmit={avgCookiesHandler}>
                  <label>Average Cookies per Sale</label> 
                  <input name="avgCookies" className="pl-1"></input>
                  <button></button>
              </form>
              </div>

              <div>
                <form>
                    <button className="px-20 m-2 bg-green-600 py3" >Create</button>
                </form>     
              </div>
            </div>
            <br/>
          </div>
            <p className= "pt-3 text-center">Report Table Coming Soon...</p>

          <div className="flex flex-row pt-6 px-44">
            <p className="px-5">"location":  "{location}", </p>
            <p className="px-5">"minCustomer": {minCustomer},</p>
            <p className="px-5">"MaxCustomer": {maxCustomer},</p>
            <p className="px-5">"avgCookies": {avgCookies},</p>
          </div>

        </main>
     
      <footer className="mt-8 bg-green-500 text-gray-50">
        <p className="text-black ">@2021</p>
      </footer>
    </div>
  )
}


