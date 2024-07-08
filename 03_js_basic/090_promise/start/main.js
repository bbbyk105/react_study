// 非同期処理　（promise)
let a = 0;

new Promise((resolve, reject) =>{
    setTimeout(() => {
        a = 1;
        resolve(a);
    }, 2000);
}).then((b) =>{
    console.log(b);
    return b;
}).catch((c)=> {
    console.log("catchが実行",c)
})