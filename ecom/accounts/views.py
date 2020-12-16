from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
# Create your views here.
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def get_loged_in(request):

    if request.POST:

        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username= username, password= password)
        if user is not None:

            login(request, user)
            context = {
            "username":username,
            "password":password
            }
            print(username, password)

            return  redirect('http://localhost:8000/Home')


    context = {

    }
    return render(request, 'login.html', context)

def log_out(request):
    logout(request)

    return redirect('http://localhost:8000/Home')

def get_current_user(request):
    
    user = request.user
    if user.username == '':
        return JsonResponse({"user":"AnonymousUser"}, safe= False)
    return JsonResponse({"user":user.username}, safe= False)




