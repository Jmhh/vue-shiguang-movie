import axios from 'axios';

//获取正在售票数据
export function getShouPiao() {
    const url = '/api/PageSubArea/HotPlayMovies.api?locationId=290';
    return axios.get(url)
      .then((res) => {
        return res.data;
    }).catch((err) => {
      console.log(err);
    });
  }

//获取正在热映数据
export function getHotList() {
  const url = '/api/Showtime/LocationMovies.api?locationId=290';
  return axios.get(url)
    .then((res) => {
      return res.data;
  }).catch((err) => {
    console.log(err);
  });
}

//获取即将上映数据
export function getComingList() {
  const url = '/api/Movie/MovieComingNew.api?locationId=290';
  return axios.get(url)
    .then((res) => {
      return res.data;
  }).catch((err) => {
    console.log(err);
  });
}

//获取电影详情数据
export function getDetail(id) {
  const url = '/getDetai/movie/detail.api?locationId=290&movieId='+id;
  return axios.get(url)
    .then((res) => {
      return res.data;
  }).catch((err) => {
    console.log(err);
  });
}

//获取电影评论数据
export function getComment(id) {
  const url = '/api/Showtime/HotMovieComments.api?pageIndex=1&movieId='+id;
  return axios.get(url)
    .then((res) => {
      return res.data;
  }).catch((err) => {
    console.log(err);
  });
}