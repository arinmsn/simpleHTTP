// Instantiate simpleHTTP
const http = new simpleHTTP;

// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// });

// POST request
// Create a Post

const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// Update (PUT) post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// Delete Request
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
    if(err) {
        console.log(err);
    } else {
        console.log(response);
    }
});

/*
    ES6 - Promises  --BEGIN--


const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

// Promises approach
function createPost(post) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            posts.push(post);
            resolve();
        }, 2000);
    });
}

// Callback version
// function createPost(post, callback) {
//     setTimeout(function() {
//         posts.push(post);
//         callback();
//     }, 2000);
// }

function getPosts() {
    setTimeout(function() {
        let outpout = '';
        posts.forEach(function(post) {
            outpout += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = outpout;
    }, 1000);
}

// createPost({title: 'Post Three', body: 'This is post three'}, getPosts);

// Promises approach
createPost({title: 'Post Three', body: 'This is post three'}).then(getPosts);


    ES6 - Promises  --END--
*/
