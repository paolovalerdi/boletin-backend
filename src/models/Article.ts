export class Article {

    constructor(
        readonly id: number,
        readonly title: string,
        readonly body: string,
        readonly date: string,
        readonly category: string | null,
        readonly images: Array<string>
    ) { }
}