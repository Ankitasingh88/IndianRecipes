import { articles } from "../data/data";

export const getImageUrl = image => {
    return new URL(`../assets/${image}`,import.meta.url).href;
}

