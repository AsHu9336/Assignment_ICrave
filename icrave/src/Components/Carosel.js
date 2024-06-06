import React from 'react'

export default function Carosel() {
    return (
        <>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://source.unsplash.com/random/700x200/?burger,cheeseburger" class="d-block w-100 z-0 position-relative" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://source.unsplash.com/random/700x200/?pizza,pannerpizza" class="d-block w-100 z-0 position-relative" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://source.unsplash.com/random/700x200/?biryani,chicken" class="d-block w-100 z-0 position-relative" alt="..." />
                    </div>
                    <div class=" carousel-caption  " style={{ zIndex: "9" }}>
                        <form className=" d-flex justify-content-center">  {/* justify-content-center, copy this <form> from navbar for search box */}
                            <input className="form-control me-2 w-75 bg-white text-dark" type="search" onChange={handlechange} value={searchTerm} placeholder="Search..." aria-label="Search" />

                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
