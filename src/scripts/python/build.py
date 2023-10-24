import argparse
class TIboard:
    dir = ""

    def __init__(self, mode, partition):
        """"""
        
        if 's' in mode:
            """"""
            self.setup()
        if 'b' in mode:
            """"""
            self.build()
        if 'f' in mode:
            """"""
            self.flash(partition)

    def setup(self):
        """setup.sh"""
    def build(self):
        """create root and boot directories"""
        """make u-boot"""
        """make linux"""
        """make u-boot_install"""
        """make linux_install"""
    def flash(self, partition):
        """"""

def parse_args():
    parser=argparse.ArgumentParser(description="setting up environment and or building image")

    
    # parser.add_argument('-bf', '--bin_file', type=str, required=False)
def main():
    # inputs=parse_args()
    # print(inputs)
    TIboard()

if __name__ == '__main__':
    main()