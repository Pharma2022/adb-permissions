

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
  name:'Allow System Window Alerts',
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
    ,SET_MEDIA_KEY_LISTENER
    ,SET_VOLUME_KEY_LONG_PRESS_LISTENER
  ]
},
{
  "name": "AutoInput",
  "packageName": "com.joaomgcd.autoinput",
  "permissions": [
    FORCE_STOP
    ,WRITE_SECURE_SETTINGS
    ,READ_LOGS
    ,DUMP
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