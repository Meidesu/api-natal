export interface BaseRepository<T> {
  list(): Promise<T[]>;
  create(entity: T): Promise<T>;
}
