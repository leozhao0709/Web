const timer = {
  Timer: null as any,
  start: (callback, interval) => {
    if (!timer.Timer) {
      timer.Timer = setInterval(callback, interval);
    } else {
      throw 'a timer already start! if you want to start a new timer, stop timer first and call this function or call startNewTimer()!';
    }
  },
  stop: () => {
    clearInterval(timer.Timer);
    timer.Timer = null;
  },
  startNewTimer: (callback, interval) => {
    if (timer.Timer) {
      timer.stop();
    }
    timer.start(callback, interval);
  },
};

export default timer;
