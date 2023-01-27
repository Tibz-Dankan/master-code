# CURL COMMANDS FOR TESTING API END POINTS

### MAKE A GET REQUEST TO `FETCH/GET` DATA FROM THE SERVER

```.sb
curl http://localhost:8000/users
```

### MAKE A `POST` REQUEST WITH DATA IN THE `BODY`

```.sh
curl --data ="&email=youremail@gmail.com &password=yourpassword" http://localhost:8000/login
```

or

```.sh
curl http://localhost:8000/login --data ="&email=youremail@gmail.com&password=yourpassword" --request "POST"
```

### MAKE A REQUEST WITH `HEADER HAVING AUTH TOKEN`

```.sh
curl http://localhost:8000/login -H "Accept: application/json" -H "Authorization: Bearer this-is-my-token" --data ="&email=youremail@gmail.com &password=yourpassword" --request "POST"
```

### MAKE A `DELETE` REQUEST WITH `A PARAMETER`

```.sh
curl -X DELETE http://localhost:8000/delete-user/1
```

### MAKE A `PUT/PATCH` REQUEST

```.sh
curl -X PUT http://localhost:8000/update-profile/3 -d "&email=tibesigwadankan@gmail.com &password=mypassword"
```

> All request can have **parameters** `/param`, **headers** `-H` `"<header_ content>"` AND **data** `-d "<data_content>"`
> Data content is captured object on the server(backend)
