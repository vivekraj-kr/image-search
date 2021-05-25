const serialize = function(obj) {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
}
  

const apiClient = async (path, data={}) => {
    let url="https://api.unsplash.com"+path+"?"+serialize(data);

    const response = await fetch(url, {
      headers: {
        'Authorization': 'Client-ID UqK0f_D2LcrDgFwkNwBzm3KzU_FTc1ffoRha6r7LWpM'
      }
    });

    return response.json();
}

export default apiClient;