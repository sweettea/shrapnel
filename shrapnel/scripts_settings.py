# sample database settings for running on Scripts using sql.mit.edu

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'esp+shrapnel',
        'OPTIONS': {
            'read_default_file': '/mit/esp/.my.cnf',
        },
        'PORT': '',
    }
}

