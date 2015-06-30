export ANDROID_HOME=/home/alisson/Android/Sdk
export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
ionic build android
adb install -r platforms/android/build/outputs/apk/android-debug.apk

# http://developer.android.com/tools/debugging/debugging-log.html
#adb logcat

# https://gist.github.com/edasque/bd8aa4087c843e31e38d
#adb logcat CordovaActivity:V CordovaWebView:V CordovaWebViewClient:V IceCreamCordovaWebViewClient:V CordovaLog:V *:S

adb logcat | grep "Web Console"

# ionic run android