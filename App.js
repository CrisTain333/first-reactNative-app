import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <View className="bg-gray-900 rounded-md h-screen">
        <View className="bg-white mx-3  rounded-md h-auto mt-5">
          <View className="flex flex-row justify-start items-center w-full my-10 p-5 h-24 ">
            <Image
              className=" rounded-full w-32 h-32 mt-5"
              source={require("./assets/github-octocat-logo-png-transparent.png")}
            />
            <View className="ml-5">
              <Text className="font-bold text-2xl">The Octocat</Text>
              <Text className="text-sky-600 font-medium text-lg">@Octocat</Text>
              <Text className="text-gray-400 font-medium text-lg">Joined 25 Jan 2011</Text>
            </View>
          </View>

          <Text className=" mx-5  text-lg text-gray-400 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quos dolorum
            aliquid voluptatibus eveniet cumque facilis molestiae pariatur iusto ratione consectetur
            labore ab dolor ut? Maiores sit amet quis alias.
          </Text>

          <View className="mt-5 p-5 bg-rose-600 flex flex-row justify-between items-center mb-5  mx-10 rounded-md">
            <View className="flex items-center">
              <Text className="mb-3 text-white text-base">Repos</Text>
              <Text className="font-bold text-lg text-white">8</Text>
            </View>
            <View>
              <Text className="mb-3 text-white text-base">Followers</Text>
              <Text className="font-bold text-lg text-white">1222</Text>
            </View>
            <View>
              <Text className="mb-3 text-white text-base">Following</Text>
              <Text className="font-bold text-lg text-white">3003</Text>
            </View>
          </View>
          {/* Last section */}
          <View className="mt-5">
            <Text className=" mx-5  text-lg text-gray-400 text-justify my-2">
              {" "}
              📍 Chattogram, Bangladesh
            </Text>

            <Text className=" mx-5  text-lg text-gray-400 text-justify my-2">
              {" "}
              🔗 https://github.com/cristain333
            </Text>

            <Text className=" mx-5  text-lg text-gray-400 text-justify my-2">
              {" "}
              🐦 https://twitter.com/ig_cristain
            </Text>

            <Text className="mx-5  text-lg text-gray-400 text-justify my-2">
              {" "}
              🏢 @drifting_desk
            </Text>
          </View>
        </View>

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
