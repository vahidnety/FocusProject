import React from "react";
import { View, StyleSheet } from "react-native";
import { RoundedButton } from "../../components/RoundedButton";

export const Timing = ({onChangeTime}) => {
  return (
    <>
      <View style={styles.timingViewButton}>
      <RoundedButton size={75} title="10"  style={styles.timingButton} onPress={()=> onChangeTime(10)}/>
      <RoundedButton size={75} title="15"  style={styles.timingButton} onPress={()=> onChangeTime(15)}/>
      <RoundedButton size={75} title="20"  style={styles.timingButton} onPress={()=> onChangeTime(20)}/>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingViewButton: {
    flex: 1.0,
    alignItems: "center",
    flexDirection: "row",//???
    // margin:40,
  },
  timingButton: {
    margin:10,
  },
});
