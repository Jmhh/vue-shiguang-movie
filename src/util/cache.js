
import storage from 'good-storage'

const CAR_KEY = '_car_'

//[1,2,3].findIndex(x => x == 2) // 1

function insertCar(arr, val, compare) {
    const index = arr.findIndex(compare)
    if (index === 0) {
      return
    }
    if (index > 0) {
       arr.splice(index, 1) //splice方法用于插入、删除或替换数组的元素。
    }
    arr.unshift(val) //unshift将新项添加到数组起始位置:
}

export default{

     setCar(res){
          let carList = storage.get(CAR_KEY,[]);
          insertCar(carList,res,(item) => {
            return item === res
          })
          storage.set(CAR_KEY,carList)
          return carList
     },

     getCar(){
        return storage.get(CAR_KEY, [])
     }

}