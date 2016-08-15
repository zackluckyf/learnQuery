function ajaxReq (url, options) {
  var request = doRequest(url, options.method);
  var status = request.status;
  if (status === 200) {
    var data = JSON.parse(request.responseText);
    options.success.call(options.context, data, status, {});
  }else {
    options.failure.call(options.context, {}, status, 'page not found');
  }
  options.complete.call(options.context, {}, status);
}


function doRequest (url, method) {
  httpRequest = new XMLHttpRequest();

  if (!httpRequest) {
    console.log('Giving up :disappointed: Cannot create an XMLHTTP instance');
    return false;
  }
  httpRequest.onreadystatechange = alertContents;
  httpRequest.open(method, url);
  httpRequest.send();
  return httpRequest;
}

function alertContents () {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
    } else {
      console.log('There was a problem with the request.');
    }
  }
}
