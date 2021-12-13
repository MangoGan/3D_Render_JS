import * as utils from 'utils'

// canvas的起点是左上角，水平X，且XY为像素位置(整数)
// 此处只能采用填充矩形来模拟点
const drawPoint = (ctx, x, y, color) => {
    ctx.fillStyle = utils.hex2Rgba(color)
    ctx.fillRect(x, y, 1, 1)
}

// Bresenham快速画直线算法：https://zh.wikipedia.org/zh-cn/%E5%B8%83%E9%9B%B7%E6%A3%AE%E6%BC%A2%E5%A7%86%E7%9B%B4%E7%B7%9A%E6%BC%94%E7%AE%97%E6%B3%95 https://www.cnblogs.com/pheye/archive/2010/08/14/1799803.html
// canvas里应该是可以采用LineTo的闭合曲线然后再fillStyle完成直线的模拟的，但是这里目标是学习，所以采用更原始的方式实现吧
const drawLine = (ctx, x, y, color) => {

}

const drawTriangle = (ctx, vertexs, color) => {
    ctx.fillStyle = utils.hex2Rgba(color)
    ctx.beginPath()
    ctx.moveTo(vertexs[0][0], vertexs[0][1])
    ctx.LineTo(vertexs[1][0], vertexs[1][1])
    ctx.LineTo(vertexs[2][0], vertexs[2][1])
    ctx.fill()
}
