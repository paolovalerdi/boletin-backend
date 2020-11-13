export class ArticlePreview {
    id: number;
    title: string;
    summary: string;
    date: string;
    category: string | null;
    imageUrl: string;

    constructor(
        id: number,
        title: string,
        summary: string,
        date: string,
        category: string | null,
        imageUrl: string
    ) {
        this.id = id;
        this.title = title;
        this.summary = summary;
        this.date = date;
        this.category = category;
        this.imageUrl = imageUrl;
    }
}