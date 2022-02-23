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
    print(body['description'])
    fav_wine = Favorites.objects.create(
        name=body['name'], vintage=body['vintage'], description=body['description'], url=body['url'])

    # fav_wine.
    # fav_wine.save()
    return HttpResponse('favorites')

    # print(request.method)
    # print(request.post)
    # return HttpResponse(favorites)


@api_view(['GET'])
def read_wine(request):
    return HttpResponse('reading sueehajca')


@api_view(['GET'])
def all_wines(request):
    serializer = serialize(
        'json', Favorites.objects.all())

    return HttpResponse(serializer)


@api_view(['DELETE'])
def wine(request):
    deleteItem = request.body.decode('utf-8')
    item = Favorites.objects.get(id=deleteItem)
    item.delete()
    return HttpResponse('delete page')


@api_view(['PUT'])
def new_img(request):

    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)
    item = Favorites.objects.get(id=body['id'])
    print(item.name)
    print(item.vintage)

    item.url = body['url']
    print(item.url)
    item.save()

    return HttpResponse('updating page')
