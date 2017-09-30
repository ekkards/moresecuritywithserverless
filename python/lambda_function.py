RUNTIME_LIST = []

def lambda_handler(event, context):
    import sys
    import json
    import os
    import datetime

    # global RUNTIME_LIST

    # system_infos = {}

    # print("makefile test version2")

    # print(sys.version)
    
    # iuid = os.getuid()

    # print("Event Data")
    # system_infos["event_data"] = event
    # # for e in event:
    # #     print(e)

    # print("UID: {}".format(iuid))

    # system_infos["environ"] = []
    # print("Environment variables")
    # for ev in os.environ:
    #     print("Name: '{evn}', Value: '{evv}'".format(evn=ev, evv=os.environ[ev]))
    #     system_infos["environ"].append("Name: '{evn}', Value: '{evv}'".format(evn=ev, evv=os.environ[ev]))
        
    # # system_infos["files"] = []
    # # items = get_files_recursiv("/")
    # # for i in items:
    # #     system_infos["files"].append(i)

    # system_infos["pwd"] = []
    # with open("/etc/passwd", "r") as passwd_file:
    #     for l in passwd_file.readlines():
    #         system_infos["pwd"].append(l)

    # runtime_string = "UID: '{uid}'; Datetime: '{dt}'".format(uid=iuid, dt=str(datetime.datetime.now()))

    # RUNTIME_LIST.append(runtime_string)

    # for i in RUNTIME_LIST:
    #     print(i)

    #with open("/etc")    

    #return json.dumps(system_infos, indent=4, separators=(',', ': '))

    import urllib.request
    urllib.request.urlretrieve("https://raw.githubusercontent.com/Miserlou/Mackenzie/master/README.md", "/tmp/test.txt")

    import glob
    items = glob.glob("/tmp/*")

    for i in items:
        print(i)

    with open("/tmp/test.txt", "r") as f:
        for c in f.readlines():
            print(c)

    return "hey"

def get_files_recursiv(folder_path):
    import glob
    import os

    files = []

    absolute_path = os.path.abspath(folder_path)

    if not absolute_path.endswith("/"):
        absolute_path = absolute_path + "/"

    items = glob.glob("{}*".format(absolute_path))

    for item in items:
        if item.startswith(("/usr", "/var", "/proc", "/dev")):
            continue

        if os.path.isdir(item):
            f = get_files_recursiv(item)
            files.append(f)
        else:
            files.append(item)

    return files