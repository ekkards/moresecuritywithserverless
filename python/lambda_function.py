def lambda_handler(event, context):
    import sys
    import json

    print("makefile test version2")

    print(sys.version)
    
    for e in event:
        print(e)
        
    items = get_files_recursiv("/")
    
    # for i in items:
    #     print(i)

    return json.dumps(items)

def get_files_recursiv(folder_path):
    import glob
    import os

    files = []

    absolute_path = os.path.abspath(folder_path)

    if not absolute_path.endswith("/"):
        absolute_path = absolute_path + "/"

    items = glob.glob("{}*".format(absolute_path))

    for item in items:
        if item in ["/usr", "/var", "/proc"]:
            continue

        print("item: {}".format(item))
        if os.path.isdir(item):
            f = get_files_recursiv(item)
            files.append(f)
        else:
            files.append(item)

    return files