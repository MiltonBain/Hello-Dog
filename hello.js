const http = require('http');
http.createServer(function(req, res) {
  res.writeHead(200,  {'Content-type':'text/html'});
  let html = "<html>"
            + "<head>"
            + "<style>"
            + "body {"
            + "font-family: Georgia, serif;"
            + "font-size: 1.25em;"
            + "background-color: #FDF3E7;"
            +  "}"
            + "h1 {"
            + "text-align: center;"
            + "border-width: 1px;"
            + "border-style: solid;"
            + "border-radius: 10px;"
            + "background-color: lightblue;"
            + "}"
            + ".indent {"
            + "text-indent: 2em;"
            + "}"
            + ".center {"
            + "text-align: center;"
            + "margin: 25px;"
            + "font-weight: bold;"
            + "}"
            + "ul li {"
            + "padding: .25em;"
            + "margin:10px 0;"
            + "}"
            + "</style>"
            + "<title> Hello from Dog</title>"
            + "</head>"
            + "<body>"
            + "<h1>Can Dogs Speak?</h1>"
            + "<p></p>"
            + "<p class=\"center\"> Hello, this is your dog.</p>"
            + "</body>"
            + "</html>";
  res.write(html);
  res.end();
}).listen(8080, (err) => {
  if(err){
     console.log(err);
  }
  
  console.log("Server is running on port 8080");
});