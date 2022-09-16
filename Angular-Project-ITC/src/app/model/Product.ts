export class Product {
  public name: string;
  public description: string;
  public value: string;
  public year: string;
  public image: string;

  constructor(
    name: string,
    description: string,
    value: string,
    year: string,
    image: string
  ) {
    this.name = name;
    this.description = description;
    this.value = value;
    this.year = year;
    this.image = image;
  }
}
