
export const getGif = async (category) => {

        const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&apiKey=KO1hiYGlLJM1kkCPK77kEaCaxFEKrwLH`

        const resp = await fetch(url);

        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized.url
            }
        })
        
        
        return gifs;

      
    }