import { Article } from "../models/article.model";
import { data } from "./seed";

export class ArticleData {
    getData(): Article[] {
        let articles: Article[] = data.map(a => new Article(a.title, a.description, a.author, a.imageUrl));
        return articles;
    }
}