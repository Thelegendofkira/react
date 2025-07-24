from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from django.contrib import messages

def home(request):
    return render(request,'todoapp/todo.html',{})

def register(request):
    if request.method=='POST':
        username=request.POST['username']
        email=request.POST['email']
        password=request.POST['password']

        if len(password)<4 :
            messages.error(request,'password is too short')
            return redirect('register')
        
        username_get=User.objects.filter(username=username)
        if username_get:
            messages.error(request,'username already exists')
            return redirect('register')
        print(username)
        new_user=User.objects.create_user(username=username,email=email,password=password)
        new_user.save()
        messages.success(request,'user created successfully')
        return redirect('login')
    return render(request,'todoapp/register.html',{})

def loginpage(request):
    if request.method=='POST':
        username=request.POST['uname']
        password=request.POST['pass']
        validate_user=authenticate(username=username,password=password)
        if validate_user is not None:
            login(request,validate_user)
            return redirect('home-page')
        else:
            messages.error(request,'no such user exists wrong username or password')
            return redirect('login')
    return render(request,'todoapp/login.html',{})