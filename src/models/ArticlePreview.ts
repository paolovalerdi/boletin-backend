export class ArticlePreview {
    id: number;
    title: string;
    summary: string;
    date: string;
    category: string | null;
    thumbnail: string;

    constructor(
        id: number,
        title: string,
        summary: string,
        date: string,
        category: string | null,
        thumbnail: string
    ) {
        this.id = id;
        this.title = title;
        this.summary = summary;
        this.date = date;
        this.category = category;
        this.thumbnail = thumbnail;
    }
}