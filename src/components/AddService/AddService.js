import React, { useRef } from 'react';

const AddService = () => {
    const nameRef = useRef();
    const imageRef = useRef();
    const descriptionRef = useRef();


    const handleSubmit = e => {
        const name = nameRef.current.value;
        const image = imageRef.current.value;
        const description = descriptionRef.current.value;

        const products = { name, image, description };

        fetch('https://evening-beach-74609.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
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
        <div className='container'>
            <form className="w-50 m-auto" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" ref={nameRef} className="form-control" id="exampleFormControlInput1" placeholder="name" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Image Links</label>
                    <input type="text" ref={imageRef} className="form-control" id="exampleFormControlInput1" placeholder="image links" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                    <textarea ref={descriptionRef} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddService;