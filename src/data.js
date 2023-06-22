const BIND_ACCESSIBILITY_SERVICE={
  name:"Accessibility Service",
  permission:"android.permission.BIND_ACCESSIBILITY_SERVICE"
}
const ANSWER_PHONE_CALLS={
  name:'Answer Phone Calls', 
  permission:"android.permission.ANSWER_PHONE_CALLS" 
}

const CALL_PHONE={
  name: 'Call Phone', 
  permission:'android.permission.CALL_PHONE' 
}
const BIND_DEVICE_ADMIN= {
  name:"Lock screen + other administrative action", 
  permission:"BIND_DEVICE_ADMIN"
}
const CHANGE_CONFIGURATION={
  name:"Change system locale", 
  permission: "android.permission.CHANGE_CONFIGURATION"
}
const PACKAGE_USAGE_STATS={
  name:"Package usage stats",
  permission:"android.permission.PACKAGE_USAGE_STATS"
}
const PROJECT_MEDIA_ALLOW={
  name: "Remove screen recording warning",
  permission: "PROJECT_MEDIA allow",
  type:"appops set"
}
const WRITE_SECURE_SETTINGS={
  name:"Write Secure Settings",
  permission:"android.permission.WRITE_SECURE_SETTINGS"}
const READ_LOGS={
  name:"Read Logs",
  permission:"android.permission.READ_LOGS"}
const DUMP={
  name:'Dump',
  permission:"android.permission.DUMP"}
const SET_MEDIA_KEY_LISTENER={
  name:"Media Key Listener",
  permission:"android.permission.SET_MEDIA_KEY_LISTENER"}
const SET_VOLUME_KEY_LONG_PRESS_LISTENER={
  name:"Long Press Listener",
  permission:"android.permission.SET_VOLUME_KEY_LONG_PRESS_LISTENER"}
const FORCE_STOP={
  name:'Force stop',
  permission:"force-stop",
  'type': 'am'}
const SYSTEM_ALERT_WINDOW={
  name:'Draw over other apps for web screens',
  permission:"SYSTEM_ALERT_WINDOW allow",
  'type': 'appopps set'}

const permissionsArr=[
{ "name":"Join",
  "packageName":"com.joaomgcd.join",
  "permissions":[
  SYSTEM_ALERT_WINDOW,
    FORCE_STOP,
    WRITE_SECURE_SETTINGS,
    READ_LOGS
  ]

},
    {
  "name": "Tasker",
  "packageName": "net.dinglisch.android.taskerm",
  "permissions": [
    FORCE_STOP
    ,WRITE_SECURE_SETTINGS
    ,READ_LOGS
    ,DUMP
    ,CHANGE_CONFIGURATION,
    SYSTEM_ALERT_WINDOW,
    ,SET_MEDIA_KEY_LISTENER
    ,SET_VOLUME_KEY_LONG_PRESS_LISTENER,
    PACKAGE_USAGE_STATS
  ]
},
{
  "name": "AutoInput",
  "packageName": "com.joaomgcd.autoinput",
  "permissions": [
    FORCE_STOP
    ,WRITE_SECURE_SETTINGS
    ,READ_LOGS
    ,DUMP,
    PROJECT_MEDIA_ALLOW
  ]
},
{
  "name": "AutoTools",
  "packageName": "com.joamgcd.autotools",
  "permissions": [
    FORCE_STOP
    ,WRITE_SECURE_SETTINGS
    ,READ_LOGS
    ,DUMP
  ]
},
{
  "name": "AutoLaunch",
  "packageName": "com.joaomgcd.autoapps",
  "permissions": [
    FORCE_STOP
    ,WRITE_SECURE_SETTINGS
    ,READ_LOGS
    ,DUMP
  ]
},
{
  "name":"Autowear",
  "packageName":"joaomgcd.autowear",
  "permissions":[
    WRITE_SECURE_SETTINGS
  ]
},
{
  "name": "Naptime",
  "packageName": "com.franco.doze",
  "permissions": [
    FORCE_STOP
    ,WRITE_SECURE_SETTINGS
    ,READ_LOGS
    ,DUMP,
    SET_MEDIA_KEY_LISTENER,
    SET_VOLUME_KEY_LONG_PRESS_LISTENER
  
  ]
},
{
  "name": "Greenify",
  "packageName": "com.oasisfeng.greenify",
  "permissions": [
   FORCE_STOP,
   WRITE_SECURE_SETTINGS,
   READ_LOGS,
   DUMP,
   SET_MEDIA_KEY_LISTENER,
   SET_VOLUME_KEY_LONG_PRESS_LISTENER
  ]
}

]

export default permissionsArr