// 检查状态码
function checkStatus(response){
    if(response.code >= 200 && response.code < 300){
        return response;
    } else {
        throw new Error('响应状态码不正确')
    }
}
// 检查响应代码
function checkCode(data){
    if(data.code == 0){
        return data;
    } else {
        throw new Error('响应代码不正确');
    }
}
// 把响应体转成json
function parseJSON(response){
    return response.json();
}
// {code:0,data,error}
function request(url,options){
    /**
     * 1、判断响应的状态码是不是2XX，如果不是的话也认为是错误
     * 2、把响应体转成JSON对象
     */
    fetch(url,oprions)
        .then(checkStatus)
        .then(parseJSON)
        .then(checkCode)
}

/**
 * 1、对修改关闭，对扩展开放
 * 2、单一职责
 */