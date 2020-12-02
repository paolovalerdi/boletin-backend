export class ArticlePreview {
    id: number;
    title: string;
    summary: string;
    date: string;
    category: string | null;
    image: string;

    constructor(
        id: number,
        title: string,
        summary: string,
        date: string,
        category: string | null,
        image: string
    ) {
        this.id = id;
        this.title = title;
        this.summary = summary;
        this.date = date;
        this.category = category;
        this.image = image;
    }
}