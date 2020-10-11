function echo<T>(arg: T): T {
  return arg;
}

const result1 = echo(true);
function swap<T, U>(tuple: [T, U]) :　[U, T] {
  return [tuple[1], tuple[0]]
}

const result2 = swap(['string', 123]);