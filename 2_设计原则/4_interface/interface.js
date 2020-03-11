// 接口要隔离，要独立
function greeting(obj) {
    console.log(obj.firstName + obj.lastName);
}
var p = { firstName: '席', lastName: '超' };
greeting(p);
