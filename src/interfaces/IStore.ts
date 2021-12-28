export interface IStore {
  getValue(): Promise<number>
  setValue(value: number): Promise<void>
}
