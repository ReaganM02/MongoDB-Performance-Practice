
export default defineEventHandler(async (event) => {
    try {
        const config = useRuntimeConfig()
        const order = await $fetch(`${config.public.OLAH_URL}/wp-json/wc/v3/orders/8035`, {
            method: 'GET',
            headers: {
                Authorization: 'Basic ' + useRuntimeConfig().OLAH_API
            }
        })
        return order
    } catch (error) {
        return createError({ statusCode: 500, statusMessage: 'Something went wrong.' })
    }
})
