import axios from 'axios'

export default class FakeYoutubeClient {

  async search() {
    return axios.get('/videos/search.json')
  }

  async videos() {
    return axios.get('/videos/popular.json')
  }

  async channels() {
    return axios.get('/videos/channel.json')
  }

  async video() {
    return axios.get('/videos/video.json')
  }

  async comment() {
    return axios.get('/videos/comment.json')
  }
}