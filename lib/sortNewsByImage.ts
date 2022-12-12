export default function sortNewsByImage(news: NewsResponse) {
  const NewsWithImage = news.data.filter((item) => item.image !== null);
  const NewsWithoutImage = news.data.filter((item) => item.image === null);

  const sortedNewsResponse = {
    pagination: news.pagination,
    data: [...NewsWithImage, ...NewsWithoutImage],
  };
  return sortedNewsResponse;
}
