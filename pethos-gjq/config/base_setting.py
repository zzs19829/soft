# 公用配置文件
# 当debug为True，可以用app.logger.info("xxx")进行日志打印调试
DEBUG = True
SQLALCHEMY_ECHO = True
SQLALCHEMY_TRACK_MODIFICATIONS = True
SQLALCHEMY_ENCODING = "utf8mb4"
SECRET_KEY = "123456"
SQLALCHEMY_DATABASE_URI = "mysql://root:root@127.0.0.1/coursedb"

DOMAIN = {"www":"http://127.0.0.1:5000"}
