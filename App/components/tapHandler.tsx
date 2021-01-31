/* eslint-disable prettier/prettier */
import React, {ReactNode} from 'react';
import Animated, { Easing } from 'react-native-reanimated';
import {TapGestureHandler, State} from 'react-native-gesture-handler';

interface TapHandlerProps {
  children: ReactNode;
  onPress: () => void;
  animation: Animated.Value<number>;
}

const {Value, useCode, block, cond, eq, call, onChange, or, set, Clock} = Animated;

export default ({ animation, onPress, children}: TapHandlerProps) => {
  // const clock = new Clock();
  const state = new Value(State.UNDETERMINED);
  // const shouldScale = new Value(-1);
  const gestureHandler = onGestureEvent({state});
  // useCode(
  //   block([
  //     cond(eq(state, State.BEGAN), set(shouldScale, 1)),
  //     cond(
  //       or(eq(state, State.FAILED), eq(state, State.CANCELLED),
  //       set(shouldScale, 0)
  //     ),
  //     onChange(state, cond(eq(state, State.END), call([], onPress))),
  //     cond(
  //       eq(shouldScale, 1),
  //       set(
  //         animation,
  //         runTiming(clock, 0, {
  //           toValue: 1,
  //           duration: 250,
  //           easing: Easing.linear
  //         })
  //       )
  //     ),
  //     cond(
  //       eq(shouldScale, 0),
  //       set(

  //       )
  //     )
  //   ]),
  //   []
  // );
  return (
    <TapGestureHandler {...gestureHandler}>
      <Animated.View>{children}</Animated.View>
    </TapGestureHandler>
  );
};
