
document.getElementById('startTest').addEventListener('click', ()=>{

    const startTime = Date.now();
    
    fetch('/speedtest')
    .then(response => response.blob())
    .then(()=>{
        const endTime = Date.now();
        const duration = (endTime - startTime)/1000;
        const speed = (1/duration).toFixed(2);

        document.getElementById('results').textContent = `Download Speed : ${speed} MBps`;
    })
    .catch(error =>{
        console.log('error : ' ,error);
        document.getElementById('results').textContent = `An error occured. Please try again.`
    }

    )
})