

async function nest(callback){
 console.log('before')
 await Promise.resolve().then(()=>{
    callback()
 }) 
 console.log('after')
}




nest(()=>{
//    Promise.resolve(11)
  console.log('业务逻辑')
})