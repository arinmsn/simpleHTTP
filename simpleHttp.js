/*
    Library will be utilitzed using ES5 - Prototypes
*/

function simpleHTTP() {
    this.http = new XMLHttpRequest();
}

// simpleHTTP.prototype.get = function(url, callback) {
//     this.http.open('GET', url, true);
//     let self = this;
//     this.http.onload = function() {
//         // this.http.status won't work
//         // TypeError: Cannot read property 'status' of undefined
//         // We can use 'self' or => instead of function() as well
//         if(self.http.status === 200) {
//             // null is the error parameter
//             callback(null, self.http.responseText);
//         } else {
//             callback(`Error:  ${self.http.status}`);
//         }
//     }

//     this.http.send();
// }

// simpleHTTP.prototype.post = function(url, data, callback) {
//     this.http.open('POST', url, true);
//     this.http.setRequestHeader('Content-type', 'application/json');

//     let self = this;
//     this.http.onload = function() {
//         callback(null, self.http.responseText);
//     }

//     this.http.send(JSON.stringify(data));
// }


// simpleHTTP.prototype.put = function(url, data, callback) {
//     this.http.open('PUT', url, true);
//     this.http.setRequestHeader('Content-type', 'application/json');

//     let self = this;
//     this.http.onload = function() {
//         callback(null, self.http.responseText);
//     }

//     this.http.send(JSON.stringify(data));
// }

simpleHTTP.prototype.delete = function(url, callback) {
    this.http.open('DELETE', url, true);
    let self = this;
    this.http.onload = function() {
        // this.http.status won't work
        // TypeError: Cannot read property 'status' of undefined
        // We can use 'self' or => instead of function() as well
        if(self.http.status === 200) {
            // null is the error parameter
            callback(null, 'Post deleted');
        } else {
            callback(`Error:  ${self.http.status}`);
        }
    }

    this.http.send();
}