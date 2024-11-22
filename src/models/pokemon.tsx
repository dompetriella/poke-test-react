export class Pokemon {
  id: number;
  paddedId: string;
  imageUrl: string;
  name: string;

  constructor(id: number, paddedId: string, imageUrl: string, name: string) {
    this.id = id;
    this.paddedId = paddedId;
    this.imageUrl = imageUrl;
    this.name = name;
  }
}
