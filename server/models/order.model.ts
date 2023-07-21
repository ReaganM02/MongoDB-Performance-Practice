import mongoose from 'mongoose'
import { Order } from '../../types'

const orderSchema = new mongoose.Schema<Order>({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    currency: {
        type: String,
        required: true
    }
})

orderSchema.index({ id: 1 })

export default mongoose.model<Order>('Order', orderSchema)