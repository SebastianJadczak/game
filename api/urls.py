from django.urls import path, include
from .views import PostView, PostDetailView, QuestionView, FaqView, NewsListView, SponsoredListView, ContactsListView, UserViewSet
from rest_framework import routers

# router = routers.SimpleRouter()
# router.register('contacts', ContactsListView)


urlpatterns = [
    path('post', PostView.as_view()),
    path('post/<int:pk>', PostDetailView.as_view(), name='post_detail'),
    path('question/<int:pk>', QuestionView.as_view(), name='question'),
    path('faq', FaqView.as_view(), name='faq'),
    path('news', NewsListView.as_view(), name='news'),
    path('sponsored', SponsoredListView.as_view(), name='sponsored'),
    path('contacts/<int:pk>', ContactsListView.as_view(), name='contacts'),
    # path('network/', include(router.urls))
]
