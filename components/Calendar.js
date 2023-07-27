import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import moment from "moment";
import Date from "./Date";

const Calendar = ({ selected, onSelectDate }) => {
  const [dates, setDates] = useState([]);
  const getDates = () => {
    const myDates = [];
    for (let i = 0; i < 5; i++) {
      const date = moment().add(i, "days");
      myDates.push(date);
    }
    setDates(myDates);
  };
  useEffect(() => {
    getDates();
  }, []);
//   console.log(dates);
  return (
    <View>
      <ScrollView horizontal >
        {dates.map((date, index) => (
          <Date
            date={date}
            key={index}
            selected={selected}
            onSelectDate={onSelectDate}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({});
