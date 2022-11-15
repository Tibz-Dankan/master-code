# HTTP Status Codes

**HTTP status codes** are a set of standard responses sent by a web server to a client (such as a web browser) indicating whether a specific HTTP request was completed successfully or not.

## There are 5 categories under which these responses are classified:

**1xx Informational** - The request was received but is still processing.
**2xx Success**- The request was received, accepted and processed successfully.
**3xx Redirection** - The client needs to take additional action to complete the request.
**4xx Client Error** - An error occurred on the client side.
**5xx Server Error** - An error occurred on the server side.

## 200 OK

This status code indicates that the request made was successful

## 301 Moved permanently

A 301 status code is sent to the client when the requested resource has been moved permanently to a new location. This location can be found in the response headers.

## 302 Found

This status code is also used for redirection, but the HTTP 1.1 spec states that it should only be used for temporary redirects. This means that the resource is only temporarily moved and the client should continue using the original URL for future requests. In addition, search engines will not update indexed links to the entity.

## 304 Not Modified

The 304 Not Modified response is essentially a caching mechanism implemented to prevent unnecessary server requests and improve performance. When the browser stores something in its cache, it also stores a Last-Modified or ETag header gotten from the server.

## 400 Bad request

This status code indicates that the request made by the client is invalid and should not be made again without modification. This error is usually thrown in API requests where the query parameters are absent or have invalid values.

## 401 Unauthorized

A 401 Unauthorized response indicates that a request was rejected because the client lacks the necessary authorization credentials to access that resource.

## 403 Forbidden

A 403 error can occur if the server refuses to honor your request even if it is understood. This can happen if your credentials, while valid, is not sufficient to access the requested resource. In this case, repeating the request will make no difference until you get sufficient permissions to access the requested entity.

## 404 Not Found

404 Not Found is probably the most popular browser error on the Internet. It is triggered when the server cannot find the requested resource at a specified URL. This can happen if the page or resource that is requested never existed on the server or was moved to a new location without a 301 or 302 redirect.

## 410 Gone

A 410 Gone response is sometimes returned instead of a 404 error when the requested resource is not present anymore at the specified location, but it used to be there in the past.

## 500 Internal Server Error

The HTTP 500 Internal Server Error is a generic error response code that is used when no specific message is suitable. It is a server error and cannot be fixed from the client side. Unless you control your server environment, you cannot do anything about this error.

The above information was got from the article found on [freshman.tech](https://freshman.tech/http-status-codes)
