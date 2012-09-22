#!/bin/bash
# tests

java -jar lib/JsTestDriver-1.3.4.b.jar --port 4224 --browser /opt/google/chrome/google-chrome --tests all

# --start server-- # java -jar JsTestDriver.jar --port 4224
# --test all after browser capture-- # java -jar JsTestDriver.jar --tests all

