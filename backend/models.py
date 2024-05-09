from config import db
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    password_hash = db.Column(db.String(128), nullable = False)
    
    def set_password(self, password):
        self.password_hash = generate_password_hash(password)
        
    def check_password(self, password):
        return check_password_hash(self.password_hash, password)
    
    def to_json(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "password_hash": self.password_hash,
        }
    
class Doctors(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    
    def to_json(self):
        return {
            "id": self.id,
            "username": self.username,
        }
    
class Department(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    department = db.Column(db.String(64), index=True)
    
    def to_json(self):
        return {
            "id": self.id,
            "department": self.department,
        }
    
class Appointment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), index=True)
    email = db.Column(db.String(120), index=True, unique=True)
    phone = db.Column(db.String(15), index=True)
    doctor_name = db.Column(db.String(64), index=True)
    date = db.Column(db.String(64), index=True)
    message = db.Column(db.String(256), index=True)
    
    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "phone": self.phone,
            "doctor_name": self.doctor_name,
            "date": self.date,
            "message": self.message,
        }
    
class Messages(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), index=True)
    email = db.Column(db.String(120), index=True, unique=True)
    phone = db.Column(db.String(15), index=True)
    subject = db.Column(db.String(64), index=True)
    message = db.Column(db.String(512), index = True)
    
    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "phone": self.phone,
            "subject": self.subject,
            "message": self.message,
        }
    
class Blogs(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), index=True)
    surname = db.Column(db.String(64), index=True)
    email = db.Column(db.String(120), index=True, unique=True)
    message = db.Column(db.String(512), index = True)
    
    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "surname": self.surname,
            "email": self.email,
            "message": self.message,
        }
    
class BlogTags(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    tags = db.Column(db.String(64), index=True)
    
    def to_json(self):
        return {
            "id": self.id,
            "tags": self.tags,
        }
    
class Categories(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    categories = db.Column(db.String(64), index=True)
    
    def to_json(self):
        return {
            "id": self.id,
            "categories": self.categories,
        }
    
class Newsletter(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), index=True)
    
    def to_json(self):
        return {
            "id": self.id,
            "email": self.email,
        }