import Head from 'next/head'
import Link from 'next/link'

import { hours } from '../data'
import { useState } from 'react'


export default function Home() {

  const hourlySales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
  const [cookieData, setcookieData] = useState([])

  // const [location, setLocation] = useState('locations')
  // const [minCustomer, setMinCustomer] = useState('minCustomers')
  // const [maxCustomer, setMaxCustomer] = useState('maxCustomers')
  // const [avgCookies, setAvgCookies] = useState('avgCookiess')
  
  function formHandler(event){
    event.preventDefault();
    const newCookieData = {

       setLocation: event.target.location.value,
       setMinCustomer: event.target.minCustomer.value,
       setMaxCustomer: event.target.maxCustomer.value,
       setAvgCookies: event.target.avgCookies.value,
       hourlySales: hourlySales,
       length: cookieData.length
    }
    setcookieData([...cookieData, newCookieData])

  }

  
  return (
    <div className="min-h-screen py-5 bg-green-50">
      <Head>
        <title>Cookie-stand-admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Header /> 
        <SubTitle />
        <Form/>
        <br/>

        <br className=""></br>
        <div className="pt-4 bg-green-200">
      
        <Table data={cookieData}/>
        </div>
        <Footer />
        
      </main>
    </div>
  )

  function Header(props){
    return(
      <header className="pt-4 text-black bg-green-500 border">
        <h1 className="text-4xl">Cookie Stand Admin</h1>
        
        <button className="float-right px-2 py-1 bg-gray-200 rounded -m-9" >
          <Link href="/overview">
          <a className="">Overview</a>
          </Link>
        </button>
      </header>
    )
  }


  function SubTitle(props){
    return(
      <div className="my-3 bg-green-200 w-100 h-400">
        <h2 className="pt-3 font-bold text-center">Create Cooke Stand</h2>
      </div>
    )
  }

  function Form(props){
    return(
      <form onSubmit={formHandler} className="w-9/12 p-4 m-auto my-4 bg-green-300 rounded">
        <div className="flex flex-row">
        
        <div>
        <label className="mb-4 text-2xl text-center">Location</label>
        </div>
        
        <div>
        <input name="location" className="flex-1 text-black"></input>
        <button className="flex flex-row"></button>
        </div>
        <br/>
        

        <div flex items-end gap-x-3 pt-8>
        <label>Minimum Customers per Hour</label>
        <input name="minCustomer"className="pl-1"></input>
        </div>
        
        <div>
        <label>Maximum Customers per Hour</label>
        <input name="maxCustomer" className="pl-1"></input>
        </div>

        <div>
        <label>Average Cookies per Sale</label>
        <input name="avgCookies" className="pl-1"></input>
        </div>
        <br/>

        <div className="my-4 ">
        <button type="submit" className="mt-8 bg-green-500 text-gray-50" >Create</button>
        </div > 

        </div>
      </form>
    )
  }
  
  function Table(props){

    return(
      <div className="mb-10 text-center">
      <table className="w-9/12 m-auto">
      <thead>
        <tr>
          <th>location </th>{hours.map(hour =>(<th>{hour}</th>))}
          <th>Total</th>
        </tr>
      </thead>

      <tbody className="">
        {props.data.map(cookieData =>(
          <tr className="odd:bg-green-400">
            <td className="border border-gray-400">{cookieData.location}</td>

            {cookieData.hourlySales.map(total =>(<td>{total}
            </td>))}
            <td>{cookieData.hourlySales.reduce((a, b)=> a + b, 0)}</td>
          </tr>
        ))}

      </tbody>

      <tfoot>
        <tr>
          <th>Total</th>
        </tr>
      </tfoot>
    </table>
    </div>
  )
}

function Footer(props){
  return(
    <footer className="mt-8 bg-green-500 text-gray-50">
    <p className="text-black ">&copy; 2021 {cookieData.length}Locations World Wide</p>
  </footer>
  )        
  }
}



