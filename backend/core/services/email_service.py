from core.enums.template_enum import TemplateEnum

from django.core.mail import EmailMultiAlternatives
from django.template.loader import get_template


class EmailService:

    @staticmethod
    def _send_mail(to: str, template_name: str, context: dict, subject: str = '') -> None:
        template = get_template(template_name)
        html_content = template.render(context)
        msg = EmailMultiAlternatives('Register', from_email='', to=[to])
        msg.attach_alternative(html_content, "text/html")
        msg.send()

    @classmethod
    def register_mail(cls, user):
        cls._send_mail(user.mail, TemplateEnum.REGISTER.value, {'name': user.profile.name})
