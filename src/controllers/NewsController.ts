import { Request, Response } from 'express';
import axios from "axios";
import hhtps from "https";
import $ from "cheerio";
import { Article } from "../models/Article";
import { ArticlePreview } from "../models/ArticlePreview";


const httpsAgent = new hhtps.Agent({ rejectUnauthorized: false });
const BASE_URL = "https://www.boletin.buap.mx/";
const ALL_NEWS = "?q=boletines";
const DETAILS = "node/";

class NewsController {

    public async all(request: Request, response: Response) {
        try {
            const axiosResponse = await axios.get(BASE_URL + ALL_NEWS, { httpsAgent });
            const html = axiosResponse.data!!;
            const previews = $("div .views-row", html).map((_, element) => {
                try {
                    const itemHtml: string = $(element).html()!!;
                    return new ArticlePreview(
                        parseInt($("h4 a", itemHtml).attr("href")!!.replace("/node/", "")),
                        $("h4 a", itemHtml).text(),
                        $("div.field-content.col-xs-8", itemHtml).text()
                            .trim()
                            .replace("•\t", "")
                            .replace($(".date-display-single", itemHtml).text() + "\n", ""),
                        $(".date-display-single", itemHtml).text(),
                        $("div.field-content a", itemHtml).text() || null,
                        $("a img", itemHtml).attr("src")!!
                    );
                } catch (e) {
                    return null
                }
            }).get().filter(it => it !== null);
            response.json(previews);
        } catch (error) {
            response.status(500).json({ e: "Internal error" })
        }
    }

    public async getArticle(request: Request, response: Response) {
        try {
            const id = request.params.id;
            const axiosResponse = await axios.get(BASE_URL + DETAILS + id, { httpsAgent });
            const html = axiosResponse.data!!;
            const result = new Article(
                parseInt(id),
                $(".page-header", html).text(),
                $("div.field-item p", html).map((_, element) => {
                    return $(element).text().trimStart().trimEnd();
                }).get().filter(it => it.length > 0).join("\n"),
                $("span.date-display-single", html).text(),
                $('a[typeof="skos:Concept"]', html).text() || null,
                $("img.img-responsive", html).map((index, element) => {
                    if (index > 0) {
                        return $(element).attr("src")!!
                        .replace("styles/thumbnails_noticias/public/", "")
                    }
                }).get()
            );
            response.json(result);
        } catch (error) {
            console.log(error);
            response.status(500).json({ e: "Internal error" })
        }
    }
}

export const newsController = new NewsController();
