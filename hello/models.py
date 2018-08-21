from django.db import models

class Log(models.Model):
#    data = "\n o " + new Date().toLocaleString() + " - Fall Detected \n"
    when = models.DateTimeField('date created', auto_now_add=True)