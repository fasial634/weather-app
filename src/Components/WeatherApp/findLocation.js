const findLocation = async () => {



    

    let url = "https://api.bigdatacloud.net/data/reverse-geocode-client?localityLanguage=en"; 

    let response = await fetch(url); 
    let data = await response.json(); 

    return data.city; 
}


export default findLocation; 
