import { View, Text, Pressable } from 'react-native';
import { socket } from './socket';

export default function App() {
  const CLIENT_ID = 1234567890;

  // - Event handlers
  useEffect(() => {
        socket.on('event1_success', ({ message }) => {
          alert(message);
        });

        socket.on('event2_success', ({ message }) => {
          alert(message);
        });

        socket.on('event3_success', ({ message }) => {
          alert(message);
        });

        // Clean up event listeners when unmounting
        return () => {
          socket.off('event1_success');
          socket.off('event2_success');
          socket.off('event3_success');
        };
    }, []);

    return (
      <View>
        <Pressable onPress={() => socket.emit('event1')}>
            <Text>Send event1</Text>
        </Pressable>
        <Pressable onPress={() => socket.emit('event2', CLIENT_ID)}>
            <Text>Send event2</Text>
        </Pressable>
        <Pressable onPress={() => socket.emit('event3', CLIENT_ID)}>
            <Text>Send event3</Text>
        </Pressable>
      </View>
    )
}