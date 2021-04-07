from www import app
from common.DataHelper import getCurrentTime
import os


class UrlManager(object):
    @staticmethod
    def buildUrl(path):
        config_domain = app.config['DOMAIN']
        return "%s%s" % (config_domain['www'], path)

    @staticmethod
    def buildStaticUrl(path):
        path = "templates/static" + path + "?ver=" + UrlManager.getReleaseVersion()
        return UrlManager.buildUrl(path)

    @staticmethod
    def getReleaseVersion():
        """
        版本管理 使用时间作为版本号
        :return:
        """
        ver = "%s" % (getCurrentTime("%Y%m%d%H%M%S%f"))
        release_path = app.config.get('RELEASE_PATH')
        if release_path and os.path.exists(release_path):
            with open(release_path, 'r') as f:
                ver = f.readline()
        return ver
