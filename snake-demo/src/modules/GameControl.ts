/**
 * 游戏控制类
 */
import Food from './Food'
import ScorePanel from './ScorePanel'
import Snake from './Snake'

class GameControl {
    food: Food;
    scorePanel: ScorePanel;
    snake: Snake;

    // 蛇移动方向
    direction = 'Right'
    // 是否存活
    isLive = true
    // 定时器标识
    timeId = -1

    constructor() {
        this.food = new Food()
        this.scorePanel = new ScorePanel(10,2)
        this.snake = new Snake()

        this.init()
    }

    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.run()
    }

    keydownHandler(event: KeyboardEvent) {
        this.direction = event.key
    }

    run() {
        let X = this.snake.X
        let Y = this.snake.Y
        switch(this.direction) {
            case 'ArrowUp':
            case 'Up':
                Y = Y - 10
                break
            case 'ArrowDown':
            case 'Down':
                Y = Y + 10
                break
            case 'ArrowLeft':
            case 'Left':
                X = X - 10
                break
            case 'ArrowRight':
            case 'Right':
                X = X + 10
                break
        }

        this.handleEat(X, Y)
        
        try {
            this.snake.X = X
            this.snake.Y = Y
        } catch (e: any) {
            alert(e.message)
            this.isLive = false
        }

        // 清除上一次执行设置的定时器
        if (this.timeId) clearTimeout(this.timeId)
        if (this.isLive) {
            this.timeId = window.setTimeout(this.run.bind(this), 500 - (this.scorePanel.level - 1) * 30)
        }
    }

    /**
     * 处理吃食物逻辑
     * 1、吃的食物后修改食物未知
     * 2、加分
     * 3、增加蛇的身体
     * @param X 
     * @param Y 
     */
    handleEat(X:number, Y: number) {
        if (X === this.food.X && Y === this.food.Y) {
            this.food.changePosition()
            this.scorePanel.addScore()
            this.snake.addBody()
        }
    }
}

export default GameControl