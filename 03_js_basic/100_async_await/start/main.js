// 非同期処理（Promise）
init();
async function init() {
    try {
        const result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                a = 1;
                reject(a)
            }, 2000);
        })
        console.log(result);
    } catch(e){
        console.log('catchが実行', e);
    }

    //     return b;
    // })
    //     console.log(b);
    // }).catch((c) => {
    //     console.log('catchが実行', c)
    // })
}
