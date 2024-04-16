from flask_socketio import SocketIO, emit
from flask_cors import CORS

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
CORS(app, resources={r"/*": {"origins": "*"}})
socketio = SocketIO(app, cors_allowed_origins="*")

# - Event handlers
# 1) Simple event
@socketio.on('event1')
def request_event1():
  emit(
       'event1_success', 
       {'message': 'Successfully handled event1'}
       )

# 2) Event with parameters in request
@socketio.on('event2')
def request_event2(client_id: str)):
  emit(
       'event2_success', 
       {'message': f'Successfully handled event2 sent by {client_id}'}
       )

# 3) Event that broadcasts response
@socketio.on('event3')
def request_event3(client_id: str)):
  emit(
       'event3_success', 
       {'message': f'User {client_id} has joined by requesting event3'},
       broadcast=True
       )