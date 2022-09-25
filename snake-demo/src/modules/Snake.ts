/**
 * 蛇
 */

class Snake {
    // 蛇容器
    element: HTMLElement;
    // 蛇头
    head: HTMLElement;
    // 蛇身（包括蛇头）
    bodies: HTMLCollection;

    constructor() {
        this.element = document.getElementById('snake')!
        this.head = this.element.firstChild as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div')
    }

    get X() {
        return this.head.offsetLeft
    }

    get Y() {
        return this.head.offsetTop
    }

    set X(value) {
        if (this.X === value) return
        this.setPosition(value, this.Y)
    }

    set Y(value) {
        if (this.Y === value) return
        this.setPosition(this.X, value)
    }

    setPosition(X: number, Y: number) {
        // 判断是否超出边界
        const isBeyondBoundry = X < 0 || X > 290 || Y < 0 || Y > 290
        if (isBeyondBoundry) throw new Error('蛇撞墙了')
        if (this.bodies[1]) {
            // 判断是否发生掉头: 将要设置的头部的新坐标与连着后一节身体相同时即为掉头
            const nextEleX = (this.bodies[1] as HTMLElement).offsetLeft;
            const nextEleY = (this.bodies[1] as HTMLElement).offsetTop;
            if (nextEleX === X && nextEleY === Y) {
                // 此时发生了掉头,需要禁止掉头并让蛇继续沿着之前的方向走
                if (X < this.X) {
                    X = this.X + 10
                } else if (X > this.X) {
                    X = this.X - 10
                } else if (Y < this.Y) {
                    Y = this.Y + 10
                } else if (Y > this.Y) {
                    Y = this.Y - 10
                }
            }
        }
        
        // 移动身体
        this.moveBody()
        // 移动头部
        this.head.style.left = X + 'px'
        this.head.style.top = Y + 'px'
        // 检查头部和身体是否相撞
        this.checkHeadBody()
    }

    // 增加蛇的身体
    addBody() {
        this.element.insertAdjacentHTML('beforeend', '<div></div>')
    }

    // 移动身体
    moveBody() {
        // 循环除去头部以外的身体部分，每个后面一节身体的位置要移动到前一节位置
        for (let i = this.bodies.length - 1; i > 0; i--) {
            // 获取前一节身体的X和Y坐标
            const X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            const Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            // 给后一节身体赋值
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }

    // 检查头部是否和身体相撞
    checkHeadBody() {
        for (let i = 1; i < this.bodies.length; i++) {
            const ele = this.bodies[i] as HTMLElement
            if (this.X === ele.offsetLeft && this.Y === ele.offsetTop) {
                throw new Error('撞到自己了')
            }
        }
    }
}

export default Snake