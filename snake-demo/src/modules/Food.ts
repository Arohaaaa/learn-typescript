/**
 * 食物类
 */

class Food {
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('food')!
    }

    get X() {
        return this.element.offsetLeft
    }

    get Y() {
        return this.element.offsetTop
    }

    changePosition() {
        // 游戏区域大小为300*300
        // 因此限制食物随机范围在0到290之间的10的倍数
        const left = Math.round((Math.random() * 29)) * 10
        const top = Math.round((Math.random() * 29)) * 10
        this.element.style.left = left + 'px'
        this.element.style.top = top + 'px'
    }
}

export default Food