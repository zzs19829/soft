# coding: utf-8
from init import db
# 科室简介表
# created by lzy
class Room(db.Model):
    __tablename__ = 'room'

    roomId = db.Column(db.Integer, primary_key=True, )
    intro = db.Column(db.String(500))
    employee = db.Column(db.String(20))
    medicine = db.Column(db.String(500))
