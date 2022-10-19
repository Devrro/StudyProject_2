from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny
from .models import UserRoles
from .serializers import RoleSerializer


# Create your views here.

class RoleListView(ListAPIView):

    queryset = UserRoles.objects.all()
    serializer_class = RoleSerializer
    permission_classes = (AllowAny,)