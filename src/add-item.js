import { createGridItem } from './create-grid-item';

export default (href,list) => {
    const item = createGridItem(href);
    console.log(item);
    list.appendChild(item);
    return;
}