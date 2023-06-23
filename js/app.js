if('serviceWorker' in navigator){
    navigator
    .serviceWorker
    .register('/service-worker.js')

}else{
    console.log('service workers are not supported')
}