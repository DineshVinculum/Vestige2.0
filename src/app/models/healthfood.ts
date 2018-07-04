export class HealthFood {
  id: string;
  name: string;
  P1: string;
  P2: string;
  P1src: string;
  P2src: string;
  price: number;

  public updateFrom(src: HealthFood): void {
    this.id = src.id;
    this.name = src.name;
    this.P1 = src.P1;
    this.P2 = src.P2;
    this.P1src = src.P1src; 
    this.P2src = src.P2src;
    this.price = src.price;
  }
}