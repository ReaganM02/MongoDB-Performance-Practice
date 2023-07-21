import mongoose from 'mongoose'

export default async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(useRuntimeConfig().MONGO_URL)
        console.log('Successfully connected to DB.')
    } catch (error: unknown) {
        return createError({
            statusCode: 500,
            statusMessage: 'Something went wrong.'
        })
    }
}