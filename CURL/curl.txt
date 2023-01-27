THE CURL COMMANDS

MAKE A GET REQUEST TO FETCH USERS
curl http://localhost:8000/users


MAKE A POST REQUEST WITH DATA IN THE "BODY"
1. curl --data ="&email=tibesigwadankan@gmail.com &password=mypassword" http://localhost:8000/login
2. curl http://localhost:8000/login --data ="&email=tibesigwadankan@gmail.com &password=mypassword" --request "POST"

MAKE A POST REQUEST HAVING SEARCH QUERY
1. curl http://localhost:8000/login?owner="dankan" --data ="&email=tibesigwadankan@gmail.com &password=mypassword" --request "POST"

MAKE A REQUEST WITH  "HEADER HAVING AUTH TOKEN"
1. curl http://localhost:8000/login -H "Accept: application/json" -H "Authorization: Bearer this-is-my-token" --data ="&email=tibesigwadankan@gmail.com &password=mypassword" --request "POST"

MAKE A REQUEST WITH " A PARAMETER"
1. curl -X DELETE http://localhost:8000/delete-user/1

MAKE A "PUT/PATCH" REQUEST 
curl -X PUT http://localhost:8000/update-profile/3 -d "&email=tibesigwadankan@gmail.com &password=mypassword"
