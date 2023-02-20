import React from 'react'
import style from './Carousal.module.css'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { TrendingCoins } from '../../config/api'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
function Carousel() {
    let [Trending,setTrending]=useState([])
    const getTrendingcoin = async() => {
        let { data } =await axios.get(TrendingCoins())
        setTrending(data)
    }

    let responsive= {
        0: {
            items: 2,
        },
        512: {
            items: 4,
            itemsFit: 'contain',
        }
      }
    useEffect(() => {
        getTrendingcoin()
    }, [])
    
    let item = Trending.map((coin) => {
        return (
            <div className={style.carouselItem} role="presentation" >
                <img src={coin?.image} height='50' style={{ marginBottom: 10 }} alt="" srcset="" />
                <span style={{ color: 'white' }} >{coin?.name}</span>
                <span style={{color:'white'}} >₹ {coin?.current_price}</span>
            </div>
        )
    })
  return (
      <div>
      
          <div className={style.cover}>
              <div className={style.caption}>
              <h1>The most trusted cryptocurrency platform</h1>
              </div>
              <div className={style.carousel}>
              <AliceCarousel mouseTracking responsive={responsive}   animationDuration={1500} infinite autoPlayInterval={1000} disableDotsControls disableButtonsControls autoPlay items={item} />
              </div>
          </div>
      </div>
  )
}

export default Carousel