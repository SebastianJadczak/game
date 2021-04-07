from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from rest_framework import routers
from api.views import UserViewSet
from rest_framework.authtoken.views import obtain_auth_token

router = routers.SimpleRouter()
router.register('', UserViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('users', include(router.urls)),
    path('auth/', obtain_auth_token),
    path("", include('frontend.urls'))
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
