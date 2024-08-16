export class Collection<T> {
    protected items: T[];
  
    constructor(items: T[] = []) {
      this.items = items;
    }
  
    // Método para acessar os itens
    getAll(): T[] {
      return this.items;
    }

    jsonSerialize(): Object[] {
        return this.items.map(item => (item as any).jsonSerialize?.());
      }
}
