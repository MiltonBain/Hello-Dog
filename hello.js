http.createServer(function(request, response) {
 response.writeHead(200);
 let html = "<html>"
            + "<head>"
            + "</head>"
            + "<body>"
            + "<p>hello this is your dog.</p>"
            + "</body>"
            + "</html>";
    response.write(html);
    response.end();
<<<<<<< HEAD
}).listen(8080);
=======
}).listen(8080);
>>>>>>> 54ccf04fd6b6387f09e20d382710648b97616394
