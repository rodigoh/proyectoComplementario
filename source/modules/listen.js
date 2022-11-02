const port = process.env.PORT || 3030;
module.exports = {
    port,
    callback: function(){
        console.log('Server is running on', 'http://localhost:' + port)
    }
}