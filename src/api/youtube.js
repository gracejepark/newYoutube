export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async channelDetail(id) {
    return this.apiClient
      .channels({params: {
        part: 'snippet,statistics',
        id
      }})
      .then(res => res.data.items[0])
  }

  async videoDetail(id) {
    return this.apiClient
      .video({params: {
        part: 'snippet,statistics',
        id
      }})
      .then(res => res.data.items[0])
  }

  async commentThread(id) {
    return this.apiClient
      .comment({params: {
        part: 'snippet,replies',
        videoId: id
      }})
  }

  async relatedVideos(id) {
    return this.apiClient
      .related({params: {
        part: 'snippet',
        relatedToVideoId: id,
        type: 'video',
        maxResults: 20,
        regionCode: 'KR'
      }})
      .then((res) => res.data.items)
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({ params:{
          part: 'snippet',
          maxResults: 40,
          type: 'video',
          q: keyword
      }})
      .then((res) => res.data.items)
      .then(items => items.map(item => ({...item, id: item.id.videoId})));
  }

  async #mostPopular() {
    return this.apiClient
      .videos({ params:{
          part: 'snippet,statistics',
          maxResults: 40,
          chart: 'mostPopular',
          regionCode: 'KR'
      }})
      .then((res) => res.data.items)
  }
}