import json
from rest_framework.decorators import api_view

from django.http import HttpResponse
from datas.models import favorites


@api_view(['POST'])
def add_wine(request):
    print(request.method)
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)
    print(body)
    print(body['name'])
    # favorites.save()
    # print(request.body['vintage'])
    # favorites.save()
    return HttpResponse('favorites')

    # print(request.method)
    # print(request.post)
    # return HttpResponse(favorites)


@api_view(['GET'])
def read_wine(request):
    print('yo hoh ohhohohoh')
    return HttpResponse('reading sueehajca')


@api_view(['GET'])
def all_wines(request):
    return HttpResponse(favorites.objects.all())
