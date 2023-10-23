import argparse

def build(dir, partion ):


def parse_args():
    parser=argparse.ArgumentParser(description="setting up environment and or building image")

    
    parser.add_argument('-dir', '--directory', type=str, help="to the base folder in which all files live")
    parser.add_argument('-bf', '--bin_file', type=str, required=False)
def main():
    inputs=parse_args()
    print(inputs)

if __name__ == '__main__':
    main()