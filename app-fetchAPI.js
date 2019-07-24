document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getJson').addEventListener('click', getJson);
document.getElementById('getApi').addEventListener('click', getApi);

// Get local .txt file
function getText() {
    fetch('test.txt')
    //     .then(function(res) {
    //         console.log(res.text());
    //  })
        .then(res => res.text())
    //  .then(function(data) {
        .then( data => {
        console.log(data);
        document.getElementById('outpout').innerHTML = data;
     })
    //  .catch(function() {
    //      console.log(err);
    //  });
     .catch(err => console.log(err));
}

// Get JSON file
function getJson() {
    fetch('posts.json')
    //    .then(function(res) {
    //        return res.json();
    // })
        .then(res => res.json())
    // .then(function(data) {
        .then(data => {
       console.log(data);
       let output = '';
       data.forEach(function(post) {
            output += `<li>${post.title}</li>`;
       });
       document.getElementById('output').innerHTML = output;
    })
    // .catch(function() {
    //     console.log(err);
    // });
        .catch(err => console.log(err));
}


// Get External API
function getApi() {
    fetch('https://api.github.com/users')
    //    .then(function(res) {
    //        return res.json();
    // })
        .then(res => res.json())
        // .then(function(data) {
        .then(data => {
       console.log(data);
       let output = '';
       data.forEach(function(user) {
            output += `<li>${user.login}</li>`;
       });
       document.getElementById('output').innerHTML = output;
    })
    // .catch(function() {
    //     console.log(err);
    // });
    .catch(err => console.log(err))
}