import os
import json
from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS

app = Flask(__name__, static_folder='.', static_url_path='')
CORS(app)

DB_FILE = 'data.json'

# Initial default state matching js/app.js mock schema
DEFAULT_STATE = {
    "transactions": [
        { "id": 1, "title": "Home Loan EMI", "amount": 5293, "category": "Housing (EMI)", "date": "2025-05-19" },
        { "id": 2, "title": "Swiggy Dinner", "amount": 1850, "category": "Food", "date": "2025-05-19" },
        { "id": 3, "title": "Grocery Run", "amount": 2000, "category": "Food", "date": "2025-05-18" },
        { "id": 4, "title": "Fuel Petrol", "amount": 2450, "category": "Transport", "date": "2025-05-17" },
        { "id": 5, "title": "Electricity Bill", "amount": 1800, "category": "Utilities", "date": "2025-05-16" },
        { "id": 6, "title": "Netflix & Spotify", "amount": 1250, "category": "Subscriptions", "date": "2025-05-15" },
        { "id": 7, "title": "Shopping & Others", "amount": 3757, "category": "Others", "date": "2025-05-14" }
    ],
    "expenses": [],
    "tasks": [
        { "id": 1, "name": "Power BI Practice", "category": "Projects", "tagClass": "tag-skill", "tagLabel": "Skill", "completed": False },
        { "id": 2, "name": "PGCET MBA Quant Practice", "category": "MBA Prep", "tagClass": "tag-mba", "tagLabel": "MBA Prep", "completed": False },
        { "id": 3, "name": "Update LinkedIn Profile", "category": "Personal", "tagClass": "tag-personal", "tagLabel": "Personal", "completed": False },
        { "id": 4, "name": "Workforce Analytics Report", "category": "Work", "tagClass": "tag-work", "tagLabel": "Work", "completed": False },
        { "id": 5, "name": "Read 20 Pages (Book)", "category": "Personal", "tagClass": "tag-personal", "tagLabel": "Personal", "completed": False }
    ],
    "reminders": [
        { "id": 1, "title": "EMI Payment", "sub": "Home Loan EMI", "date": "25 May", "hour": "10:00 AM", "icon": "📅", "iconBg": "#3b1a1a", "iconColor": "#ef4444" },
        { "id": 2, "title": "Gym Workout", "sub": "Push Day", "date": "Today", "hour": "7:00 PM", "icon": "💪", "iconBg": "rgba(0, 208, 132, 0.12)", "iconColor": "#00d084" },
        { "id": 3, "title": "CAT Preparation", "sub": "Quant Practice", "date": "Tomorrow", "hour": "8:00 AM", "icon": "📚", "iconBg": "rgba(139, 92, 246, 0.15)", "iconColor": "#8b5cf6" },
        { "id": 4, "title": "Power BI Practice", "sub": "Dashboard Building", "date": "Tomorrow", "hour": "6:00 PM", "icon": "📊", "iconBg": "rgba(59, 130, 246, 0.12)", "iconColor": "#3b82f6" }
    ],
    "bills": [
        { "id": 1, "name": "Home Loan EMI", "amt": "₹5,293", "status": "Due in 6 days", "statusClass": "status-late", "icon": "🏠", "iconBg": "rgba(239, 68, 68, 0.12)", "iconColor": "#ef4444" },
        { "id": 2, "name": "Car Loan EMI", "amt": "₹3,810", "status": "Paid", "statusClass": "status-paid", "icon": "🚗", "iconBg": "rgba(59, 130, 246, 0.12)", "iconColor": "#3b82f6" },
        { "id": 3, "name": "Credit Card Bill", "amt": "₹2,450", "status": "Due in 12 days", "statusClass": "status-due", "icon": "💳", "iconBg": "rgba(139, 92, 246, 0.15)", "iconColor": "#8b5cf6" }
    ],
    "goals": [
        { "id": 1, "name": "Analytics Transition", "pct": 60, "color": "var(--green)" },
        { "id": 2, "name": "MBA Admission", "pct": 40, "color": "var(--purple)" },
        { "id": 3, "name": "Financial Freedom", "pct": 25, "color": "var(--orange)" },
        { "id": 4, "name": "Fitness Goal", "pct": 55, "color": "var(--blue)" }
    ],
    "recentActivities": [
        { "id": 1, "text": "Added expense: Swiggy", "time": "1 hour ago" },
        { "id": 2, "text": "Completed task: Resume Parser Project", "time": "3 hours ago" },
        { "id": 3, "text": "Updated goal: Analytics Transition", "time": "5 hours ago" },
        { "id": 4, "text": "Added reminder: Gym Workout", "time": "6 hours ago" }
    ],
    "skills": [
        { "id": 1, "name": "Workforce Analytics", "category": "Work", "pct": 65, "hours": 42, "level": "Intermediate" },
        { "id": 2, "name": "Power BI Dashboarding", "category": "Tech", "pct": 85, "hours": 78, "level": "Expert" },
        { "id": 3, "name": "PGCET MBA Quant", "category": "MBA Prep", "pct": 40, "hours": 24, "level": "Beginner" },
        { "id": 4, "name": "Strategic HR Management", "category": "Work", "pct": 70, "hours": 55, "level": "Intermediate" }
    ],
    "notes": [
        { "id": 1, "title": "Workforce Planning Guidelines", "desc": "Core principles of modern HR analytics, supply vs demand models, gap analysis.", "content": "Workforce Planning Guidelines:\n\n1. Define Organizational Objectives\n2. Analyze Current Workforce Supply\n3. Forecast Future Demand Requirements\n4. Perform Gap Analysis (Shortages/Surpluses)\n5. Develop Action Plans (Recruit, Retrain, Retain)", "date": "2026-05-20T14:30:00Z" },
        { "id": 2, "title": "Quant Prep Syllabus (PGCET)", "desc": "Topics list: Arithmetic, Algebra, Geometry, Data Interpretation.", "content": "PGCET MBA Quant Preparation Plan:\n\n- Arithmetic: Percentages, Profit & Loss, Ratio & Proportion, Time & Work, Time Speed Distance.\n- Algebra: Linear/Quadratic Equations, Progressions, Logarithms.\n- Geometry: Mensuration, Coordinate Geometry.\n- Data Interpretation: Tables, Bar Charts, Pie Charts, Line Graphs.", "date": "2026-05-19T09:15:00Z" },
        { "id": 3, "title": "Weekly MBA Study Schedule", "desc": "Grid schedule for working days and weekends study block allocations.", "content": "Weekly Study Routine:\n\n- Weekdays (Mon-Fri):\n  * 6:00 AM - 7:30 AM: Study Session (Quant/DI)\n  * 8:00 PM - 9:00 PM: Revision & Practice Quizzes\n- Weekends (Sat-Sun):\n  * 8:00 AM - 12:00 PM: Dedicated Mock Tests & Review\n  * 3:00 PM - 5:00 PM: Skill Project Work (Power BI / Workforce)", "date": "2026-05-18T18:45:00Z" }
    ],
    "activeNoteId": 1
}

def load_db():
    if not os.path.exists(DB_FILE):
        save_db(DEFAULT_STATE)
        return DEFAULT_STATE
    try:
        with open(DB_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        print(f"Error loading JSON database, falling back to default state: {e}")
        return DEFAULT_STATE

def save_db(data):
    try:
        with open(DB_FILE, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        return True
    except Exception as e:
        print(f"Error saving JSON database: {e}")
        return False

# Route to serve the main frontend single-page file
@app.route('/')
def serve_index():
    return send_from_directory('.', 'index.html')

# API Endpoints
@app.route('/api/state', methods=['GET'])
def get_state():
    state_data = load_db()
    return jsonify(state_data)

@app.route('/api/state', methods=['POST'])
def save_state():
    incoming_data = request.get_json()
    if not incoming_data:
        return jsonify({"success": False, "error": "Invalid JSON state payload"}), 400
    
    success = save_db(incoming_data)
    if success:
        return jsonify({"success": True})
    else:
        return jsonify({"success": False, "error": "Failed to write state data"}), 500

if __name__ == '__main__':
    print("--------------------------------------------------")
    print("Varchas OS Full-Stack Python Backend Running")
    print("Development Server: http://127.0.0.1:5000/")
    print("--------------------------------------------------")
    app.run(debug=True, port=5000)
