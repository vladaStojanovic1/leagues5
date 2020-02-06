import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import myData from '../../data/data.json';
import { IoIosArrowDropdown } from 'react-icons/io';



export const MyCarousel = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };


    return (
        <div className='my-carousel'>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h3>Check out champions from last season in TOP leauges</h3>
                {/* <img src={ball} alt="" style={{ width: '185px' }} /> */}
                <IoIosArrowDropdown color={'black'} />

            </div>
            <Carousel
                arrows={false}
                swipeable={false}
                draggable={true}
                showDots={true}
                responsive={responsive}
                infinite={true}
                // autoPlay={true}  
                autoPlaySpeed={3000}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >

                {myData.map((team, index) => {
                    return (
                        <div className='carousel-div' key={index}>

                            <div className='carousel-content' >

                                <div className='carousel-image-spans'>
                                    <img src={team.teamImg} alt="team-image" />

                                    {team.won ?
                                        <div className='w-d-l'>
                                            <span className='carousel-won'>{team.won}</span>
                                            <span className='carousel-draw'>{team.draw}</span>
                                            <span className='carousel-lost'>{team.lost}</span>
                                        </div>
                                        : null}
                                </div>

                                <div className='carousel-season-image'>
                                    <img src={team.leagueImg} alt="league-image" />
                                    <p>{team.season}</p>
                                </div>

                            </div>
                        </div>
                    )
                })}

            </Carousel>
        </div>
    )
}
