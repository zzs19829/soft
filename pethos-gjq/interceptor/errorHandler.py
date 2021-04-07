from init import app


@app.errorhandler( 404 )
def error_404( e ):
    app.logger.info(e)
    return "您访问的页面不存在"