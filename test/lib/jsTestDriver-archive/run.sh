#!/bin/bash








#//////////////  jstestDriver archived for now until able to use require with this test driver ////////////////
# tests

#linux

java -jar lib/JsTestDriver-1.3.1-no-path-bug.jar  --browser /opt/google/chrome/google-chrome  --tests all

# win
#java -jar lib\/JsTestDriver-1.3.1-no-path-bug.jar --port 4224 --browser C:\/Users\/zak\/AppData\/Local\/Google\/Chrome\/Application\/chrome.exe --tests all 

#--start server-- # 
#java -jar lib/JsTestDriver-1.3.1-no-path-bug.jar --port 4224
# --test all after browser capture-- # 
#java -jar lib/JsTestDriver-1.3.1-no-path-bug.jar  --tests all

