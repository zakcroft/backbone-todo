#!/bin/bash
# tests

#linux
java -jar lib/JsTestDriver-1.3.4.b.jar --port 4224 --browser /opt/google/chrome/google-chrome --tests all 

# win
#java -jar lib/JsTestDriver-1.3.4.b.jar --port 4224 --browser C:\/Users\/zak\/AppData\/Local\/Google\/Chrome\/Application\/chrome.exe --tests all

# --start server-- # java -jar test/lib/JsTestDriver-1.3.4.b.jar --port 4224
# --test all after browser capture-- # java -jar test/lib/JsTestDriver-1.3.4.b.jar --tests all

