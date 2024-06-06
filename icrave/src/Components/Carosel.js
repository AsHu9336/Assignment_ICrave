import React from 'react'

export default function Carosel() {
    return (
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/700x200/?Interior Design,Home Decor" className="d-block w-100 z-0 position-relative" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/700x200/?Home Backgrounds,Indoor" className="d-block w-100 z-0 position-relative" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/700x200/?Couch, Cabin ,Kitchen" className="d-block w-100 z-0 position-relative" alt="..." />
                    </div>
                    <div className=" carousel-caption  " style={{ zIndex: "9" }}>
                        <form className=" d-flex justify-content-center">
                            <input className="form-control me-2 w-75 bg-white text-dark" type="search"  placeholder="Search..." aria-label="Search" />
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
