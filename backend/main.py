from flask import request, jsonify
from config import app, db
from models import User, Doctors, Department, Appointment, Messages, Blogs, BlogTags, Categories, Newsletter

# GET

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

if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)
