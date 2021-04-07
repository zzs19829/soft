from flask_sqlalchemy import SQLAlchemy
from init import *
from system.view import welcome
from flask_debugtoolbar import DebugToolbarExtension
from interceptor.errorHandler import *
from common.urlmanager import UrlManager
# toolbar = DebugToolbarExtension(app)

# from interceptor.Auth import *

# 蓝图注册

app.register_blueprint(welcome)
app.add_template_global( UrlManager.buildStaticUrl, 'buildStaticUrl' )
app.add_template_global( UrlManager.buildUrl, 'buildUrl' )