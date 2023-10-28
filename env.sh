#!/bin/bash

echo "If you are not sure what each environmental variable means, please refer to the link below!"
echo -e 'GitHub MD : \e]8;;https://github.com/AgainIoT/Open-Set-Go/blob/main/EnvironmentVariable.md\aEnvironmentVariable.md\e]8;;\a'
echo -e 'Documentations : \e]8;;https://docs.open-set-go.com\aDocumentation(Open-Set-Go.io)\e]8;;\a'
echo

read -p "Enter your GitHub OAuth App's Client ID : " clientId
read -p "Enter your GitHub OAuth App's Client Secret : " clientSecret
read -p "Enter your MongoDB(or atlas) URI(ex.[mongodb:// or mongodb+srv://]) : " mongodbURI
read -p "Enter your any JWT_SECRET you want : " jwtToken
read -p "Enter your mail address : " mailUser
read -p "Enter your mail app password : " mailPass

cat <<EOF >./client/.env
REACT_APP_CLIENT_ID=$clientId
REACT_APP_REDIRECT_URL=http://localhost:3000/login
REACT_APP_SERVER_URL=http://localhost:8080
RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED=false
EOF

cat <<EOF >./server/.env
MONGODB_URI=$mongodbURI
CLIENT_ID=$clientId
CLIENT_SECRET=$clientSecret
JWT_SECRET=$jwtToken
MAIL_USER=$mailUser
MAIL_PASS=$mailPass
ORIGIN=http://localhost:3000
EOF
