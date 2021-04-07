from init import app
from flask import request, g
from model.user import User


@app.before_request
def before_request():
    print(request.path)
    if request.path=="/":
        return
    # app.logger.info("--------before_request--------")
    # user_info = check_login()
    # app.logger.info(user_info)
    # g.current_user = None
    # g.current_user = user_info
    # if not user_info:
    #     return "未登录"
    # return

    # 返回Index，因为没有登录，这里还没写


'''
判断用户是否登录
'''


def check_login():
    cookies = request.cookies
    cookie_name = app.config['AUTH_COOKIE_NAME']
    auth_cookie = cookies[cookie_name] if cookie_name in cookies else None
    if auth_cookie is None:
        return False

    # auth_info = auth_cookie.split("#")
    # if len( auth_cookie ) != 2:
    #     return False

    try:
        user_info = User.query.filter_by(id=auth_cookie).first()
    except Exception:
        return False

    if user_info is None:
        return False

    # if auth_info[0] != UserService.geneAuthCode( user_info ):
    #     return False

    return user_info
