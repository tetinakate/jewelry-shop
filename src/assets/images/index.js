import bgc from "./bgc.png";
import brands from "./Rectangle2.png";
import bracelets from "./bracelets.svg";
import cufflinks from "./cufflinks.svg";
import earrings from "./earrings.svg";
import pendant from "./pendant.svg";
import rings from "./rings.svg";
import watch from "./watch.svg";
import salonsBcg from "./salons-bcg.svg";
import articleWatch from "./article-watch.svg";
import articleCufflinks from "./article-cufflinks.svg";
import articleRings from "./article-rings.svg";

export const categoriesImg = [
    {src: rings, alt: 'Кольца'},
    {src: earrings, alt: 'Серьги'},
    {src: pendant, alt: 'Подвески'},
    {src: cufflinks, alt: 'Запонки'},
    {src: bracelets, alt: 'Браслеты'},
    {src: watch, alt: 'Часы'},
];

export const articleBlockImg = [
    {src: articleWatch, alt: 'Как выбрать часы для своей будущей жены'},
    {src: articleCufflinks, alt: 'Запонки для мужа: 7 ключевых правил покупки аксессуара'},
    {src: articleRings, alt: 'Как выбрать обручальные кольца молодоженам'},
];

export default { bgc, brands, salonsBcg };