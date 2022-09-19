export class Product {
  public _id: string;
  public name: string;
  public description: string;
  public value: string;
  public year: string;
  public image: string;
  public imageFile: string;

  constructor(
    _id: string,
    name: string,
    description: string,
    value: string,
    year: string,
    image: string,
    imageFile: string
  ) {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.value = value;
    this.year = year;
    this.image = image;
    this.imageFile = imageFile;
  }
}
