export default async function handler(req, res) {
  try {
    const { q = "india", language = "hi", page = 1 } = req.query;

    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${encodeURIComponent(
        q
      )}&sortBy=publishedAt&language=${language}&page=${page}&pageSize=24&apiKey=${process.env.NEWS_API_KEY}`
    );

    const data = await response.json();

    return res.status(response.status).json(data);
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}
