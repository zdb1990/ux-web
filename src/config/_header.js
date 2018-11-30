import token from './_get-token';
const Options = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': token || ''
    },
    timeout: 3000, //请求超时3秒,
}

export default Options;