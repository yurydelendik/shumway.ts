interface Point {
	x: i32;
	y: i32;
}

function offset(p: Point, x: i32, y: i32): Point {
	p.x += x;
	p.y += y;
	return p;
}