import React from 'react'
import './Orders.css'
import { useState } from 'react'
import axios from "axios"
import {toast} from "react-toastify"
import { useEffect } from 'react'
import { assets } from '../../assets/assets'

const Orders = ({url}) => {

  const [orders,setOrders] = useState([])

  const fetchAllOrders = async () => {
      const response = await axios.get(url+"/api/order/list")
      if(response.data.success){
          const sortedOrders = response.data.data.sort((a, b) => new Date(b.date) - new Date(a.date));
          setOrders(sortedOrders);
          console.log(response.data.data);
      }
      else{
        toast.error(error)
      }
  }

  const statusHandler = async (event,orderId) => {
      const response = await axios.post(url+"/api/order/status",{
        orderId,
        status:event.target.value
      })
      if(response.data.success){
        await fetchAllOrders();
      }
  }

  const markAsPaid = async (orderId) => {
    try {
        const response = await axios.post(url + "/api/order/mark-as-paid", { orderId });
        if (response.data.success) {
            toast.success("Order marked as paid!");
            await fetchAllOrders();
        } else {
            toast.error(response.data.message);
        }
    } catch (error) {
        toast.error(error.message);
    }
  };



  useEffect(()=>{
    fetchAllOrders()
  },[])

  return (
    <div className='order'>
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order,index)=>{
          return (
            <div key={index} className='order-item'>
              <img src={assets.parcel_icon} alt="" />
              <div>
                <p className='order-item-food'>
                  {order.items.map((item,index)=>{
                    if(index === order.items.length-1){
                      return item.name+" x "+item.quantity
                    }else{
                      return item.name+" x "+item.quantity+", "
                    }
                  })}
                </p>
                <p className='order-item-name'>
                  {order.address.firstName+" "+order.address.lastName}
                </p>
                <div className="order-item-address">
                  <p>{order.address.street+","}</p>
                  <p>{order.address.city+", "+order.address.state+", "+order.address.country+", "+order.address.zipcode}</p>
                </div>
                <p className='order-item-phone'>{order.address.phone}</p>
              </div>
              {
                order.items.length > 1
                ? <p>Items: {order.items.length}</p>     // this logic I created myself
                : <p>Item: 1</p>
              }
              <p>${order.amount}</p>
              <p><b>Payment Method:</b> {order.paymentMethod}</p>
              <select onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
                <option value="Food Processing">Food Processing</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
              {order.paymentMethod === "cod" && !order.payment && (
                  <button onClick={() => markAsPaid(order._id)}>Mark as Paid (COD)</button>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Orders