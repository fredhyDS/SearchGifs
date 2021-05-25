
export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=csqisEtXRcLk0xjgr50ujcNP74NJYDRz`;
    const resp = await fetch( url );
    const { data } = await resp.json();    
    const gifs = data.map(img => {        
        return {
            id: img.id,
            title: img.title,
            share: img.embed_url,
            url: img.images?.preview_gif.url
        }
    })
    return gifs;        
}