const asyncHandler= require('express-async-handler')

const Order=require("../models/OrderModel")

const addOrederItem = asyncHandler(async(req,res)=>{
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
      } = req.body;
      if(orderItems && orderItems.length === 0) {
        res.status(400);
        throw new Error("No Order Found");
        return
      } else {
        const order = new Order({
          orderItems,
          // User: req.User.id,
          shippingAddress,
          paymentMethod,
          itemsPrice,
          taxPrice,
          shippingPrice,
          totalPrice,
        });
        const createOrder = await order.save();
    res.status(201).json(createOrder);
    }
})
// const getMyOrders = asyncHandler(async (req, res) => {
//     const orders = await Order.find({ user: req.user._id });
//     res.json(orders);
//   });
module.exports={
    addOrederItem,
    // getMyOrders
}