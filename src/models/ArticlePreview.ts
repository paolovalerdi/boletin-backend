export class ArticlePreview {

    constructor(
        readonly id: number,
        readonly title: string,
        readonly summary: string,
        readonly date: string,
        readonly category: string | null,
        readonly thumbnail: string
    ) { }
}