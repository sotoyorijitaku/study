// クラスと継承

// チェスのゲームを表します
class Game {
  // private pieces = Game.

  private static makePieces() {
    return [
      // キング
      new King("White", "E", 1),
      new King("Black", "E", 1),

      // クイーン
    ];
  }
}

// チェスのコマ
abstract class Piece {
  protected position: Position;

  constructor(private readonly color: Color, column: Column, row: Row) {
    this.position = new Position(column, row);
  }

  moveTo(position: Position) {
    this.position = position;
  }

  abstract canMoveTo(position: Position): boolean;
}

// 駒の位置(座標)
class Position {
  constructor(private column: Column, private row: Row) {}

  distanceFrom(position: Position) {
    return {
      row: Math.abs(position.row - this.row),
      column: Math.abs(
        position.column.charCodeAt(0) - this.column.charCodeAt(0)
      ),
    };
  }
}

class King extends Piece {
  canMoveTo(position: Position) {
    let distance = this.position.distanceFrom(position);
    return distance.row < 2 && distance.column < 2;
  }
}
// class Queen extends Piece {
// }
// class Bishop extends Piece {}
// class Knight extends Piece {}
// class Rook extends Piece {}
// class Pawn extends Piece {}

type Color = "Black" | "White";
type Column = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
type Row = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
