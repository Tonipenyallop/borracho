from copyreg import constructor
import json
from rest_framework.decorators import api_view

from django.http import HttpResponse
from datas.models import Favorites


@api_view(['POST'])
def add_wine(request):
    print(request.method)
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)
    print(body)
    print(body['name'])
    fav_wine = Favorites.objects.create(
        name=body['name'], vintage=body['vintage'])
    # fav_wine.
    # fav_wine.save()
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

    return HttpResponse(Favorites.objects.all())
