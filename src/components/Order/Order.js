import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Order = () => {
    const { id } = useParams();
    const [info, setInfo] = useState({});
    const { user } = useAuth();

    const addressRef = useRef();


    useEffect(() => {
        fetch(`https://evening-beach-74609.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setInfo(data))
    }, [])


    const confirmOrder = e => {
        const address = addressRef.current.value;

        const add = { address }
        fetch('https://evening-beach-74609.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(add)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Products has been successfully added .');
                    e.target.reset();
                }
            })


        e.preventDefault();
    }


    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={info.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{info.name}</h5>
                                <p className="card-text">{info.description}</p>
                                <h5 className='text-center'>Price: ${info.price}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <form onSubmit={confirmOrder}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder={user?.displayName} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Price</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder={user?.email} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="text" ref={addressRef} className="form-control" id="exampleFormControlInput1" placeholder="address" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Price</label>
                                <input type="number" className="form-control" id="exampleFormControlInput1" placeholder={info.price} />
                            </div>
                            <button type="submit" className="btn btn-primary">Confirm Order</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;