
//handles submit from index.html
function handleSubmit(event) {
    event.preventDefault();
    var url = document.getElementById('name').value;
    let formText = {'url': url};
// validates URL
    if(Client.validateURL(url)){
      console.log("Valid URL")
      console.log("BUILDING REQUEST");
      // sends input data to server.js
      const postData = async (url = '', formData)=>{
        const res = await fetch(url, {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        try {
          // gets response from server and updates UI
          const apiData = await res.json();
          console.log(apiData);
          var results = document.getElementById('results');
          results.innerHTML =
          `<h4>Polarity:</h4><div class="rslt">${apiData.polarity}</div>
          <h4>Subjectivity:</h4><div class="rslt">${apiData.subjectivity}</div>
          <h4>Polarity Confidence:</h4><div class="rslt">${apiData.polarity_confidence}</div>
          <h4>Subjectivity Confidence:</h4><div class="rslt">${apiData.subjectivity_confidence}</div>
          <h4>Text:</h4><div class="rslt">${apiData.text}</div>`;
        }catch(error) {
          console.log('error', error);
        }
      }
      postData('http://localhost:8000/api', formText);
    }else{
      alert("invalid url, All URLs must start with 'http://www.'")
    }
}

export { handleSubmit }
