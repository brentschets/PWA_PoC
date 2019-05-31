export class Notitie {
  private _id: number;
  //private _rating: number;

  constructor(
    private _title: string,
    private _owner: string,
    private _content: string,
    private _created = new Date()
  ) {}
  

  static fromJSON(json: any): Notitie {
    const not = new Notitie(
      json.title,
      json.owner,
      json.content,
      json.created
    );
    not._id = json.id;
    return not;
  }
  
  toJSON(): any {
    return {
      id: this._id,
      title: this._title,
      owner: this._owner,
      content: this._content,
      created: this._created
    };
  }

  get id(): number {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get owner(): string {
    return this._owner;
  }

  set owner(owner: string) {
    this._owner = owner;
  }

  get created(): Date {
    return this._created;
  }

  get content(): string {
    return this._content;
  }
}
