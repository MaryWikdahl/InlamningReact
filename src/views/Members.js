import React from 'react';
import { useState, useEffect } from 'react';
import Customer from '../components/Customer';

function Members() {
      const [customers, setCustomers]= useState([ ])
      useEffect(()=> {
        async function fetchData(){
        const res = await fetch ("https://ecexam-webapi.azurewebsites.net/api/customers")
        const json = await res.json();
        setCustomers(json)
        }
        fetchData()
      }, []);
    
        return(
            <div className="container mt-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
        {
            customers.map( customer=>(
            <div key={customer.id} className="col">
                <Customer item={customer}/>
                </div>
            ))
            
        }
    </div>
   </div>
    )
}

export default Members