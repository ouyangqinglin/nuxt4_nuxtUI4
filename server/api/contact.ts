export default defineEventHandler(async (event) => {
    const body = await readBody(event) // 接收前端请求体
    // 转发到真实外部接口（由服务端发出，不会触发浏览器 CORS）
    const config = useRuntimeConfig()
    console.log('config api', config)
    const res = await $fetch(`${config.public.apiBase}/api/v1/common/contact-form`, {
        method: 'POST',
        body,
        headers: {
            'content-type': event.node.req.headers['content-type'] || 'application/json'
        }
    })
    return res
})