#!/usr/bin/env python
import sys, os, time, threading, django.utils.autoreload
# note: this following line assumes this file is symlinked into web_scripts
# if you're copying this file, set path = '/mit/locker_name/Scripts/django/shrapnel'
path = os.path.join(os.path.dirname(os.path.realpath(__file__)), os.path.pardir)
sys.path.insert(0, path)
os.chdir(path)
os.environ['DJANGO_SETTINGS_MODULE'] = "shrapnel.settings"

def reloader_thread():
  while True:
    if django.utils.autoreload.code_changed():
      os._exit(3)
    time.sleep(1)
t = threading.Thread(target=reloader_thread)
t.daemon = True
t.start()

from django.core.servers.fastcgi import runfastcgi
runfastcgi(method="threaded", daemonize="false")
