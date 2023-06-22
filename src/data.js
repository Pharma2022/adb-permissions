

const WRITE_SECURE_SETTINGS="android.permission.WRITE_SECURE_SETTINGS"
const READ_LOGS= 'android.permission.READ_LOGS'
const DUMP="android.permission.DUMP"
const SET_MEDIA_KEY_LISTENER="android.permission.SET_MEDIA_KEY_LISTENER"
const SET_VOLUME_KEY_LONG_PRESS_LISTENER= "android.permission.SET_VOLUME_KEY_LONG_PRESS_LISTENER"
const FORCE_STOP= 'force-stop'
const SYSTEM_ALERT_WINDOW='SYSTEM_ALERT_WINDOW allow'

const permissionsArr=[
{ "name":"Join",
  "packageName":"com.joaomgcd.join",
  "permissions":[
    { "name": "Allow System Window Alerts",
    "permission": SYSTEM_ALERT_WINDOW,
    'type': 'appopps set'

    },
    {
      "name": "Force Stop",
      "permission": FORCE_STOP,
      'type': 'am'
    },
    {
      "name": "Write Secure Settings",
      "permission": WRITE_SECURE_SETTINGS
    },
    {
      "name": "Read Logs",
      "permission": READ_LOGS
    },
  ]

},
    {
  "name": "Tasker",
  "packageName": "net.dinglisch.android.taskerm",
  "permissions": [
    {
      "name": "Force Stop",
      "permission": FORCE_STOP,
      'type': 'am'
    },
    {
      "name": "Write Secure Settings",
      "permission": WRITE_SECURE_SETTINGS
    },
    {
      "name": "Read Logs",
      "permission": READ_LOGS
    },
    {
      "name": "Dump",
      "permission": DUMP
    },
    {
      "name": "Set Media Key Listener",
      "permission": SET_MEDIA_KEY_LISTENER
    },
    {
      "name": "Long Press Listener",
      "permission": SET_VOLUME_KEY_LONG_PRESS_LISTENER
    }
  ]
},
{
  "name": "AutoInput",
  "packageName": "com.joaomgcd.autoinput",
  "permissions": [
    {
      "name": "Force Stop",
      "permission": FORCE_STOP,
      'type': 'am'
    },
    {
      "name": "Write Secure Settings",
      "permission": WRITE_SECURE_SETTINGS
    },
    {
      "name": "Read Logs",
      "permission": READ_LOGS
    },
    {
      "name": "Dump",
      "permission": DUMP
    }
  ]
},
{
  "name": "AutoTools",
  "packageName": "com.joamgcd.autotools",
  "permissions": [
    {
      "name": "Force Stop",
      "permission": FORCE_STOP,
      'type': 'am'
    },
    {
      "name": "Write Secure Settings",
      "permission": WRITE_SECURE_SETTINGS
    },
    {
      "name": "Read Logs",
      "permission": READ_LOGS
    },
    {
      "name": "Dump",
      "permission": DUMP
    }
  ]
},
{
  "name": "AutoLaunch",
  "packageName": "com.joaomgcd.autoapps",
  "permissions": [
    {
      "name": "Force Stop",
      "permission": FORCE_STOP,
      'type': 'am'
    },
    {
      "name": "Write Secure Settings",
      "permission": WRITE_SECURE_SETTINGS
    },
    {
      "name": "Read Logs",
      "permission": READ_LOGS
    },
    {
      "name": "Dump",
      "permission": DUMP
    }
  ]
},
{
  "name": "Naptime",
  "packageName": "com.franco.doze",
  "permissions": [
    {
      "name": "Force Stop",
      "permission": FORCE_STOP,
      'type': 'am'
    },
    {
      "name": "Write Secure Settings",
      "permission": WRITE_SECURE_SETTINGS
    },
    {
      "name": "Read Logs",
      "permission": READ_LOGS
    },
    {
      "name": "Dump",
      "permission": DUMP
    },
    {
      "name": "Set Media Key Listener",
      "permission": SET_MEDIA_KEY_LISTENER
    },
    {
      "name": "Long Press Listener",
      "permission": SET_VOLUME_KEY_LONG_PRESS_LISTENER
    }
  ]
},
{
  "name": "Greenify",
  "packageName": "com.oasisfeng.greenify",
  "permissions": [
    {
      "name": "Force Stop",
      "permission": FORCE_STOP,
      'type': 'am'
    },
    {
      "name": "Write Secure Settings",
      "permission": WRITE_SECURE_SETTINGS
    },
    {
      "name": "Read Logs",
      "permission": READ_LOGS
    },
    {
      "name": "Dump",
      "permission": DUMP
    },
    {
      "name": "Set Media Key Listener",
      "permission": SET_MEDIA_KEY_LISTENER
    },
    {
      "name": "Long Press Listener",
      "permission": SET_VOLUME_KEY_LONG_PRESS_LISTENER
    }
  ]
}

]

export default permissionsArr