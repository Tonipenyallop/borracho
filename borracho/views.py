from .settings import STRIPE_SECRET_KEY, SITE_URL
import stripe
from copyreg import constructor
import json
from math import fabs
from rest_framework.decorators import api_view
from django.http import HttpResponse, JsonResponse
from datas.models import Favorites
from .serializer import BorrachoSerializer
from django.core.serializers import serialize
from django.shortcuts import redirect


@api_view(['POST'])
def add_wine(request):
    print(request.method)
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)
    print(body)
    print(body['description'])
    fav_wine = Favorites.objects.create(
        name=body['name'], vintage=body['vintage'], description=body['description'], url=body['url'])

    return HttpResponse('favorites')


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

    item.url = body['url']
    item.save()

    return HttpResponse('updating page')


stripe.api_key = STRIPE_SECRET_KEY


@api_view(['POST'])
def create_checkout_session(request):
    try:
        decodedItem = request.body.decode('utf-8')
        item = decodedItem.split('=')[1]
        checkout_session = stripe.checkout.Session.create(
            line_items=[
                {
                    'price': 'price_1KVRVqJv2BSK7V9Oovy9WnfF',
                    'quantity': int(item),
                },
            ],
            mode='payment',
            success_url=SITE_URL + '?success=true',
            cancel_url=SITE_URL + '?canceled=true',
        )
        return redirect(checkout_session.url)
    except Exception as e:
        return str(e)
