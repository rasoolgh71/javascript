from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request,'task/home.html')

def login(request):
    return render(request,'task/login.html')

def calculate(request):
    return render(request,'task/calculate.html')

def api(request):
    return render(request,'task/api.html')

def snake(request):
    return render(request,'task/snake.html')