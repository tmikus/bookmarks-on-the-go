export interface Action<T extends string = string> {
  type: T;
}
