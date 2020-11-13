export class Article {
    id: number;
    title: string;
    body: string;
    date: string;
    category: string | null;
    imageUrl: Array<string>;

    constructor(
        id: number,
        title: string,
        body: string,
        date: string,
        category: string | null,
        imageUrl: Array<string>
    ) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.date = date;
        this.category = category;
        this.imageUrl = imageUrl;
    }
}