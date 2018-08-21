from django.shortcuts import render
from django.http import HttpResponse

from .models import Log

#import requests
# Create your views here.

#def index(request):
#    r = requests.get('http://httpbin.org/status/418')
#    print(r.text)
#    return HttpResponse('<pre>' + r.text + '</pre>')

#import os
#def index(request):
#    times = int(os.environ.get('TIMES',3))
#    return HttpResponse('Hello! ' * times)

#https://github.com/librato/python-librato
api = librato.connect('app106360441@heroku.com', 'd03f7d3f498880655aa5174f34cd22e81372b2f232d2d08995b6d1056d23b1d2')

#import datetime
#datetime.datetime.now()
#datetime(2009, 1, 6, 15, 8, 24) #2018-07-29 09:17:13

def index(request):
    # return HttpResponse('Hello from Python!')
#   logFall = api.new_queue()
#    q.add('fall', datetime.datetime.now())
#    q.submit()
    return render(request, 'index.html')


def db(request):

    log = Log()
    log.save()

    logs = Log.objects.all()

    return render(request, 'db.html', {'greetings': log})

