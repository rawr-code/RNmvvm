import {View, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const TodoList = ({isLoading}: {isLoading: boolean}) => {
  return (
    <View className="flex-1 bg-white">
      <View className="px-10 pt-6 pb-8">
        <View className="my-6">
          <Text className="text-3xl text-black">
            <Text className="font-bold">
              {isLoading ? 'aklsdklasd' : 'Monday,'}
            </Text>{' '}
            3 Dec
          </Text>
        </View>
        <View className="flex-row justify-between">
          <View className="items-start">
            <Text className="font-bold text-lg text-black">06</Text>
            <Text className="text-lg text-gray-500">Created tasks</Text>
          </View>
          <View className="items-end">
            <Text className="font-bold text-lg text-black">03</Text>
            <Text className="text-lg text-gray-500">Completed tasks</Text>
          </View>
        </View>
      </View>
      <ScrollView className="flex-1 mb-2">
        {new Array(20).fill('a').map((i, index) => (
          <View key={index} className="px-5 my-2">
            <View className="flex-row items-center py-4 pl-5 border">
              <Text className="text-lg px-1 text-black font-bold flex-1">
                Pay apartment rent
              </Text>
              <View className="w-12 mx-4 items-center h-12 justify-center">
                <Icon name="trash-2" size={30} color="#000" />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default TodoList;
