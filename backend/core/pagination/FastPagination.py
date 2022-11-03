from rest_framework import status
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response


class FastPagination(PageNumberPagination):
    def get_paginated_response(self, data):
        return Response(
            {
                'count': self.page.paginator.count,
                'links': {
                    'next': self.get_next_link(),
                    'prev': self.get_previous_link()
                },
                'results': data
            }, status=status.HTTP_200_OK)
