from flask import Blueprint, request, make_response, render_template, jsonify, redirect, url_for
from flask_cors import CORS
from sqlalchemy import text
import json
from init import db, app
from model.room import Room
from common.Response import ops_renderErrJSON, ops_renderJSON

# created by lzy
CORS(app, supports_credentials=True)
# 蓝图对象，前端页面
map = Blueprint('map', __name__)

@map.route('/',method = ["GET"])
def map():
    roomId = request.args.get("roomId")
    # 数据库查询语句
    room = Room.query.filter_by(roomId = roomId).first()
    if not room:
        return ops_renderErrJSON(msg="不存在该科室，请重试")
    data = { "roomId":room.roomId,"intro":room.intro,"employee":employee,"medicine":medicine }
    return ops_renderJSON(data = data)


    


