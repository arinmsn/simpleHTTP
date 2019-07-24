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