const geniusLyricsApi = require("genius-lyrics-api");

exports.handler = async (event) => {
    const lyrics = await geniusLyricsApi.getLyrics(event.arguments.url);
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        body: lyrics
    };
};
