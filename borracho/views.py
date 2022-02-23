from copyreg import constructor
import json
from math import fabs
from rest_framework.decorators import api_view
from django.http import HttpResponse, JsonResponse
from datas.models import Favorites
from .serializer import BorrachoSerializer
from django.core.serializers import serialize


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
    serializer = serialize(
        'json', Favorites.objects.all())

    return HttpResponse(serializer)


@api_view(['DELETE'])
def wine(request):
    # It is working from here
    # serializer = serialize(
    #     'json', Favorites.objects.get(name='Toni'))
    deleteItem = request.body.decode('utf-8')
    item = Favorites.objects.get(id=deleteItem)
    item.delete()
    # deleteItem.delete()
    # item = request.
    # body_unicode = request.body.decode('utf-8')
    # print(type(body_unicode))
    # body = json.loads(body_unicode)
    # Favorites.delete()
    # print(body)
    return HttpResponse('delete page')
