import * as types from '../types'
import Util  from '../../util/cache'

const state = {
     detailData : '',//电影详情页数据
     carList:'',
     count:'',
}

const mutations = {
     [types.SET_DETAIL](state,res){
         state.detailData = res
     },
     [types.ADD_CAR](state,res){
        state.carList = res
     },
     [types.CAR_COUNT](state){
        state.count =  Util.getCar().length
     },
     [types.RESET_CARLIST](state){
        state.carList = Util.getCar()
     }
}

const actions = {
     setData({commit},res){
        commit(types.SET_DETAIL,res)
     },
     addCarlist({commit},res){
        commit(types.ADD_CAR,Util.setCar(res))
     }
}

const getters = {  
    detailData: state => {  
      return state.detailData;  
    },
    carListData:state => {
        return state.carList;   
    }
  }

export default {
    state,
    getters,
    actions ,
    mutations,
}