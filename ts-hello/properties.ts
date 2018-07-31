class Point {
    constructor(private _x?: number, private _y?: number) {
    }

    draw () {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }

    get x() {
        return this._x;
    }

    set x(value) {
        if (value <0)
            throw new Error('Cannot be less than 0');
        this._x = value;
    }
}

let point = new Point(5,3);
console.log(point.x);
point.x = 2;
point.draw();