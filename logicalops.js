let isverified=true
let isloggedin=false     
let hastoken=true
let isguest=true
if(isverified && isloggedin && hastoken)
{
    console.log('welcome to the online portal')
    console.log('u have been granted an acess to the course')
}
else if(isverified||isguest)
{
    console.log('allow the free preview')
}
else
{
    console.log('please contact the admin')
}