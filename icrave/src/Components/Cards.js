import React from 'react'
import { Link } from 'react-router-dom'

export default function Cards() {
    return (
        <>
            <h1 className='text-center m-2 p-4 bg-danger-subtle rounded'>Interior Design Services</h1>
            <div className='container d-flex flex-row flex-wrap'>

                <div className='col m-4'>
                    <img src='https://source.unsplash.com/random/300x300/?Interior Design,Home Decor' />

                </div>
                <div className='col m-4 '>
                    <img src='https://source.unsplash.com/random/300x300/?Exterior Design,Home Decor' />

                </div>
                <div className='col m-4'>
                    <img src='https://source.unsplash.com/random/300x300/?Kitchen Design,Home Decor' />

                </div>
                <div className='col m-4'>
                    <img src='https://source.unsplash.com/random/300x300/?Couch,Home Decor' />

                </div>
                <div className='col m-4'>
                    <img src='https://source.unsplash.com/random/300x300/?Walls ,Home Decor' />

                </div>
                <div className='col m-4'>
                    <img src='https://source.unsplash.com/random/300x300/?Office Decor,Home Decor' />

                </div>



            </div>
        </>
    )
}
