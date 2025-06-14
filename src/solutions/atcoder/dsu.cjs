class UnionFind1 {
  /**
   * コンストラクタ
   * @param {number} n - 要素数（0〜n-1の整数で各要素を表す）
   */
  constructor(n) {
    // 親の配列。初期状態では全て自分自身が親
    this.parent = Array.from({ length: n }, (_, i) => i)
    // 各集合のサイズを保持。初期状態は全て1
    this.sizeArr = new Array(n).fill(1)
  }

  /**
   * find(x): xの属する集合（根）の番号を返す
   * 経路圧縮を実装しています。
   * @param {number} x
   * @returns {number}
   */
  find(x) {
    if (this.parent[x] !== x) {
      // 経路圧縮：再帰的に根を探し、途中のノードの親を直接根に変更する
      this.parent[x] = this.find(this.parent[x])
    }
    return this.parent[x]
  }

  /**
   * union(x, y): xとyの属する集合を併合する
   * サイズの小さい集合を大きい集合に併合することで木の高さを抑える
   * @param {number} x
   * @param {number} y
   * @returns {boolean} すでに同じ集合の場合はfalse、併合した場合はtrue
   */
  union(x, y) {
    const rootX = this.find(x)
    const rootY = this.find(y)
    if (rootX === rootY)
      return false // すでに同じ集合

    // サイズが小さい方を大きい方に併合する
    if (this.sizeArr[rootX] < this.sizeArr[rootY]) {
      this.parent[rootX] = rootY
      this.sizeArr[rootY] += this.sizeArr[rootX]
    }
    else {
      this.parent[rootY] = rootX
      this.sizeArr[rootX] += this.sizeArr[rootY]
    }
    return true
  }

  /**
   * isSame(x, y): xとyが同じ集合に属するか判定する
   * @param {number} x
   * @param {number} y
   * @returns {boolean}
   */
  isSame(x, y) {
    return this.find(x) === this.find(y)
  }

  /**
   * size(x): xが属する集合のサイズを返す
   * @param {number} x
   * @returns {number}
   */
  size(x) {
    return this.sizeArr[this.find(x)]
  }
}

class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i)
    this.sizeArr = Array.from({ length: n }, () => 1)
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x])
    }
    return this.parent[x]
  }

  union(x, y) {
    const rootX = this.find(x)
    const rootY = this.find(y)
    if (rootX === rootY) {
      return false
    }
    if (this.sizeArr[rootX] < this.sizeArr[rootY]) {
      this.parent[rootX] = rootY
      this.sizeArr[rootY] += this.sizeArr[rootX]
    }
    else {
      this.parent[rootY] = rootX
      this.sizeArr[rootX] += this.sizeArr[rootY]
    }
    return true
  }

  isSame(x, y) {
    return this.find(x) === this.find(y)
  }

  size(x) {
    return this.sizeArr[this.find(x)]
  }
}
