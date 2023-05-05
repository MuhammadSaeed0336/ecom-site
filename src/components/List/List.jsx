import React from 'react'
import "./List.scss"
import Card from '../Card/Card';

const List = () => {
    const data = [
        {
          id: 1,
          img: "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=600",
          img2: "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=600",
          title: "Long djfnj djfnj sdjnf ",
          isNew: true,
          oldPrice: 20,
          price: 15,
        },
        {
          id: 2,
          img: "https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&cs=tinysrgb&w=600",
          title: "Coat",
          isNew: true,
          oldPrice: 20,
          price: 15,
        },
        {
          id: 3,
          img: "https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&cs=tinysrgb&w=600",
          title: "Skirt",
          isNew: false,
          oldPrice: 20,
          price: 15,
        },
        {
          id: 4,
          img: "https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&cs=tinysrgb&w=600",
          title: "Hat",
          isNew: false,
          oldPrice: 20,
          price: 15,
        },
      ];
    
  return (
    <div className='list'>
        {data?.map(item=>(
            <Card item={item} key={item.id} />
        ))}
    </div>
  )
}

export default List
