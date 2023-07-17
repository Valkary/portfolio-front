type Vec2 = {
    x: number,
    y: number,
}

type Directions = "UP" | "RIGHT" | "DOWN" | "LEFT";
type State = "ALIVE" | "DEAD";

class Snake {
    squareD: number;
    size: number;
    segments: Vec2[];
    direction: Directions = "LEFT";
    state: State = "ALIVE";
    map_size: number;
    food: Vec2 = { x: -1, y: -1 };
    map: boolean[][];

    constructor() {
        this.squareD = 10;
        this.size = 3;
        this.segments = Array(this.size);
        this.map_size = 10;
        this.map = Array.from({ length: this.map_size }, () => new Array(this.map_size).fill(false));

        for (let i = 0; i < this.size; i++) {
            this.segments[i].x = i * this.squareD;
            this.segments[i].y = 3 * this.squareD;
            this.map[3][i] = true;
        }

        this.food.x = Math.floor(Math.random() * this.map_size);
        this.food.y = Math.floor(Math.random() * this.map_size);
    }

    collisions() {
        const head = this.segments[0];

        // With it's own body
        for (let i = 1; i < this.size; i++) {
            if (head.x === this.segments[i].x && head.y === this.segments[i].y) {
                this.state = "DEAD";
            }
        }

        if (head.x <= 0 || head.x / this.squareD > this.map_size || head.y <= 0 || head.y / this.squareD > this.map_size) {
            this.state = "DEAD";
        }
    }

    update(new_dir: Directions) {
        let new_x, new_y;

        this.direction = (
                (new_dir === "DOWN" && this.direction !== "UP") ||
                (new_dir === "UP" && this.direction !== "DOWN") ||
                (new_dir === "RIGHT" && this.direction !== "LEFT") ||
                (new_dir === "LEFT" && this.direction !== "RIGHT")
            ) ?
            new_dir : this.direction;

        switch (this.direction) {
            case "UP":
                new_y = this.segments[0].y - this.squareD;
                new_x = this.segments[0].x;
                break;
            case "RIGHT":
                new_x = this.segments[0].x - this.squareD;
                new_y = this.segments[0].y;
                break;
            case "DOWN":
                new_y = this.segments[0].y - this.squareD;
                new_x = this.segments[0].x;
                break;
            case "LEFT":
                new_x = this.segments[0].x + this.squareD;
                new_y = this.segments[0].y;
                break;
        }

        if (new_x === this.food.x && new_y === this.food.y) {
            this.size += 1;
            this.food.x = Math.floor(Math.random() * this.map_size);
            this.food.y = Math.floor(Math.random() * this.map_size);
        }

        for (let i = this.size - 1; i > 0; i--) {
            this.segments[i].x = this.segments[i - 1].x;
            this.segments[i].y = this.segments[i - 1].y;
        }

        this.segments[0].x = new_x;
        this.segments[0].y = new_y;

        this.collisions();
    }
}