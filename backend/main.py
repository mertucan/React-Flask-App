from flask import request, jsonify
from config import app, db
from models import User, Doctors, Department, Appointment, Messages, Blogs, BlogTags, Categories, Newsletter

# GET methods

@app.route('/appointment', methods=['GET'])
def get_appointments():
    appointments = Appointment.query.all()
    json_appointments = list(map(lambda x: x.to_json(), appointments))
    return jsonify({"appointments": json_appointments})

@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    json_users = list(map(lambda x: x.to_json(), users))
    return jsonify({"users": json_users})

@app.route('/doctors', methods=['GET'])
def get_doctors():
    doctors = Doctors.query.all()
    json_doctors = list(map(lambda x: x.to_json(), doctors))
    return jsonify({"doctors": json_doctors})

@app.route('/messages', methods=['GET'])
def get_messages():
    messages = Messages.query.all()
    json_messages = list(map(lambda x: x.to_json(), messages))
    return jsonify({"messages": json_messages})

@app.route('/blogs', methods=['GET'])
def get_blogs():
    blogs = Blogs.query.all()
    json_blogs = list(map(lambda x: x.to_json(), blogs))
    return jsonify({"blogs": json_blogs})

@app.route('/departments', methods=['GET'])
def get_departments():
    departments = Department.query.all()
    json_departments = list(map(lambda x: x.to_json(), departments))
    return jsonify({"departments": json_departments})

@app.route('/newsletter', methods=['GET'])
def get_newsletter():
    newsletter = Newsletter.query.all()
    json_newsletter = list(map(lambda x: x.to_json(), newsletter))
    return jsonify({"newsletter": json_newsletter})

@app.route('/blog_tags', methods=['GET'])
def get_tags():
    blog_tags = BlogTags.query.all()
    json_blog_tags = list(map(lambda x: x.to_json(), blog_tags))
    return jsonify({"blog_tags": json_blog_tags})

@app.route('/categories', methods=['GET'])
def get_categories():
    categories = Categories.query.all()
    json_categories = list(map(lambda x: x.to_json(), categories))
    return jsonify({"categories": json_categories})

# POST methods

@app.route("/create_category", methods=["POST"])
def create_category():
    categories = request.json.get("categories")
    
    if not categories:
        return (
            jsonify({"message": "You must include a category name"}),
            400,
        )

    new_category = Categories(categories = categories)
    try:
        db.session.add(new_category)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "Category created!"}), 201

@app.route("/create_newsletter", methods=["POST"])
def create_newsletter():
    email = request.json.get("email")
    
    if not email:
        return (
            jsonify({"message": "You must include a email"}),
            400,
        )

    new_email = Newsletter(email = email)
    try:
        db.session.add(new_email)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "Newsletter created!"}), 201

@app.route("/create_department", methods=["POST"])
def create_department():
    department = request.json.get("department")
    
    if not department:
        return (
            jsonify({"message": "You must include a department name"}),
            400,
        )

    new_department = Department(department = department)
    try:
        db.session.add(new_department)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "Department created!"}), 201

@app.route("/create_doctor", methods=["POST"])
def create_doctor():
    username = request.json.get("username")
    
    if not username:
        return (
            jsonify({"message": "You must include a doctor username"}),
            400,
        )

    new_doctor = Doctors(username = username)
    try:
        db.session.add(new_doctor)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "Doctor created!"}), 201

@app.route("/create_tag", methods=["POST"])
def create_tag():
    tags = request.json.get("tags")
    
    if not tags:
        return (
            jsonify({"message": "You must include a tag name"}),
            400,
        )

    new_tags = BlogTags(tags = tags)
    try:
        db.session.add(new_tags)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "Tag created!"}), 201

@app.route("/create_message", methods=["POST"])
def create_message():
    email = request.json.get("email")
    message = request.json.get("message")
    name = request.json.get("name")
    phone = request.json.get("phone")
    subject = request.json.get("subject")
    
    if not email or not message or not name or not phone or not subject:
        return (
            jsonify({"message": "You must include all the fields"}),
            400,
        )

    new_message = Messages(email=email, message=message, name=name, phone=phone, subject=subject)
    try:
        db.session.add(new_message)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "Message created!"}), 201

@app.route("/create_appointment", methods=["POST"])
def create_appointment():
    date = request.json.get("date")
    doctor_name = request.json.get("doctor_name")
    email = request.json.get("email")
    message = request.json.get("message")
    name = request.json.get("name")
    phone = request.json.get("phone")
    
    if not date or not doctor_name or not email or not message or not name or not phone:
        return (
            jsonify({"message": "You must include all the fields"}),
            400,
        )

    new_appointment = Appointment(date=date, doctor_name=doctor_name, email=email, message=message, name=name, phone=phone)
    try:
        db.session.add(new_appointment)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "Appointment created!"}), 201

@app.route("/create_user", methods=["POST"])
def create_user():
    email = request.json.get("email")
    username = request.json.get("username")
    password_hash = request.json.get("password_hash")
    
    if not email or not username or not password_hash:
        return (
            jsonify({"message": "You must include all the fields"}),
            400,
        )

    new_user = User(email=email, username=username, password_hash=password_hash)
    try:
        db.session.add(new_user)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "User created!"}), 201

@app.route("/create_blog", methods=["POST"])
def create_blog():
    email = request.json.get("email")
    message = request.json.get("message")
    name = request.json.get("name")
    surname = request.json.get("surname")
    
    if not email or not message or not name or not surname:
        return (
            jsonify({"message": "You must include all the fields"}),
            400,
        )

    new_blog = Blogs(email=email, message=message, name=name, surname=surname)
    try:
        db.session.add(new_blog)
        db.session.commit()
    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "Blog created!"}), 201

# DELETE methods

@app.route('/delete_newsletter/<int:id>', methods=['DELETE'])
def delete_newsletter(id):
    print('Deleting newsletter with ID:', id)
    newsletter = Newsletter.query.get(id)
    if not newsletter:
        return jsonify({"message": "Newsletter not found"}), 404

    try:
        db.session.delete(newsletter)
        db.session.commit()
        return jsonify({"message": "Newsletter deleted"}), 200
    except Exception as e:
        return jsonify({"message": str(e)}), 500
    
@app.route('/delete_message/<int:id>', methods=['DELETE'])
def delete_message(id):
    print('Deleting newsletter with ID:', id)
    message = Messages.query.get(id)
    if not message:
        return jsonify({"message": "Message not found"}), 404

    try:
        db.session.delete(message)
        db.session.commit()
        return jsonify({"message": "Message deleted"}), 200
    except Exception as e:
        return jsonify({"message": str(e)}), 500
    
@app.route('/delete_appointment/<int:id>', methods=['DELETE'])
def delete_appointment(id):
    print('Deleting appointment with ID:', id)
    appointment = Appointment.query.get(id)
    if not appointment:
        return jsonify({"message": "Appointment not found"}), 404

    try:
        db.session.delete(appointment)
        db.session.commit()
        return jsonify({"message": "Appointment deleted"}), 200
    except Exception as e:
        return jsonify({"message": str(e)}), 500
    
@app.route('/delete_user/<int:id>', methods=['DELETE'])
def delete_user(id):
    print('Deleting user with ID:', id)
    user = User.query.get(id)
    if not user:
        return jsonify({"message": "User not found"}), 404

    try:
        db.session.delete(user)
        db.session.commit()
        return jsonify({"message": "User deleted"}), 200
    except Exception as e:
        return jsonify({"message": str(e)}), 500
    
@app.route('/delete_department/<int:id>', methods=['DELETE'])
def delete_department(id):
    print('Deleting department with ID:', id)
    department = Department.query.get(id)
    if not department:
        return jsonify({"message": "Department not found"}), 404

    try:
        db.session.delete(department)
        db.session.commit()
        return jsonify({"message": "Department deleted"}), 200
    except Exception as e:
        return jsonify({"message": str(e)}), 500
    
@app.route('/delete_doctor/<int:id>', methods=['DELETE'])
def delete_doctor(id):
    print('Deleting doctor with ID:', id)
    doctor = Doctors.query.get(id)
    if not doctor:
        return jsonify({"message": "Doctor not found"}), 404

    try:
        db.session.delete(doctor)
        db.session.commit()
        return jsonify({"message": "Doctor deleted"}), 200
    except Exception as e:
        return jsonify({"message": str(e)}), 500
    
@app.route('/delete_blog/<int:id>', methods=['DELETE'])
def delete_blog(id):
    print('Deleting blog with ID:', id)
    blog = Blogs.query.get(id)
    if not blog:
        return jsonify({"message": "Blog not found"}), 404

    try:
        db.session.delete(blog)
        db.session.commit()
        return jsonify({"message": "Blog deleted"}), 200
    except Exception as e:
        return jsonify({"message": str(e)}), 500
    
@app.route('/delete_tag/<int:id>', methods=['DELETE'])
def delete_tag(id):
    print('Deleting tag with ID:', id)
    tag = BlogTags.query.get(id)
    if not tag:
        return jsonify({"message": "Tag not found"}), 404

    try:
        db.session.delete(tag)
        db.session.commit()
        return jsonify({"message": "Tag deleted"}), 200
    except Exception as e:
        return jsonify({"message": str(e)}), 500
    
@app.route('/delete_category/<int:id>', methods=['DELETE'])
def delete_category(id):
    print('Deleting category with ID:', id)
    category = Categories.query.get(id)
    if not category:
        return jsonify({"message": "Category not found"}), 404

    try:
        db.session.delete(category)
        db.session.commit()
        return jsonify({"message": "Category deleted"}), 200
    except Exception as e:
        return jsonify({"message": str(e)}), 500
    
# PATCH methods

@app.route("/update_newsletter/<int:id>", methods=["PATCH"])
def update_newsletter(id):
    newsletter = Newsletter.query.get(id)

    if not newsletter:
        return jsonify({"message": "Newsletter not found"}), 404

    data = request.json
    newsletter.first_name = data.get("email", newsletter.email)

    db.session.commit()

    return jsonify({"message": "Newsletter updated."}), 200

if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)
