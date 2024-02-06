import FourUp from "./FourUp";
import Post from "./Post";

// Types of "posts" on website, either a text/image post, or a Fourup
export type PostType = {
  date: Date;
  description: string;
  image?: string;
};

export type fourUp = {
  for: Date;
  progress: string[];
  risks: string[];
  plans: string[];
  needs: string[];
};

export const week20: fourUp = {
  for: new Date("2/6/24"),
  progress: [
    "Got most of the process down in writing"
  ],
  risks: [
    "We need to avoid all working on the same task this semester",
    "Metrics still not sure what to measure"
  ],
  plans: ["Ticket Generation", "Fix Website", "Get Metrics"],
  needs: [
    "There was talk about more SD cards",
    "Getting a second box would be good"
  ],
};

//make new 4up object each week
export const week3: fourUp = {
  for: new Date("9/12/23"),
  progress: ["Had first meeting with sponsor, went over project overview."],
  risks: [
    "Lack of experience",
    "Still unclear about technical challenges (relating to OS)",
  ],
  plans: [
    "Acquire Swipe Access",
    "Review SDK documentation",
    "Create Time Sheet",
  ],
  needs: ["TI EVM", "R3 RVP"],
};

export const week4: fourUp = {
  for: new Date("9/26/23"),
  progress: [
    "Domain model and other project artifacts ready for review",
    "Acquired hardware",
    "Finished establishing roles",
    "Established sprint plan on Jira",
  ],
  risks: [
    "Lack of experience",
    "Still unclear about technical challenge (relating to OS)",
    "Unable to get Intel wireless card functional",
  ],
  plans: ["Initial hardware tests", "Final planning"],
  needs: [
    "SD Cards",
    "More Intel Wifi Cards",
    "Input devices - camera and radar",
  ],
};

export const week8: fourUp = {
  for: new Date("10/23/23"),
  progress: [
    "Built Image",
    "Wrote instructions on how to build Image"
  ],
  risks: [
    "Lack of experience"
  ],
  plans: ["Create a fully functional build", "Get all teammates to build an image"],
  needs: [
    "N/A"
  ],
};

export const week9: fourUp = {
  for: new Date("10/31/23"),
  progress: [
    "2 team members were able to create a semi-working build",
    "Revised build instructions"
  ],
  risks: [
    "Lack of experience with OS building",
    "Member-specific errors and build problems"
  ],
  plans: ["Create a fully functional build", "Catch up teammates on image building steps"],
  needs: [
    "N/A"
  ],
};

export const week10: fourUp = {
  for: new Date("11/07/23"),
  progress: [
    "discovered how things are renamed in Rules.make", "Anoother member built image"
  ],
  risks: [
    "found that the boot file was missing platform suffixes"
  ],
  plans: ["Midterm evaluation", "Continue trying to build terminal"],
  needs: [
    "N/A"
  ],
};

export const week11: fourUp = {
  for: new Date("11/14/23"),
  progress: [],
  risks: [
    "The preloaded SD failed", "We do not have space to do the yocto build"
  ],
  plans: ["Create a fully functional build", "Catch up teammates on image building steps"],
  needs: [
    "Terabyte Storage devices (Preferably USB)",
    "Board support"
  ],
};

export const week16: fourUp = {
  for: new Date("1/23/24"),
  progress: [
    "Brainstormed process methodology changes",
    "Made E2E forum post to help plan next actions"
  ],
  risks: [
    "Lack of replies to E2E post",
    "Forgetting process",
    "Lack of knowledge for research methodologies"
  ],
  plans: ["Migrate to Trello", "Incorporate documenting approaches to methodology"],
  needs: ["D3 RVP pin spreadsheet"
  ],
};

export const week17: fourUp = {
  for: new Date("1/30/24"),
  progress: [
    "Recieved and tested forum response",
    "Created a working build with demos with a custom built Linux kernel",
    "Modified the linux kernel to print a message on boot"
  ],
  risks: [
    "Unsure of what to change/how to change it, could damage board",
    "Not being able to change/verify changes to device tree files",
  ],
  plans: ["Continue testing with working SDK build process"],
  needs: ["Meeting times with Stuart", "D3 Office availability for meetings"
  ],
};

//update this line with the most recent fourup as its data
<<<<<<< HEAD
export const currentFourUp = <FourUp data={week20} />;
=======
export const currentFourUp = <FourUp data={week17} />;
>>>>>>> 08ac3add73c7d7ac5c0b6146e938e76509ba9589


/* Contains ALL resources made, four ups, and project updates */
export const news = (
  <>
  {/* Add news under here */}
  <FourUp data={week17} />
  <Post
      data={{
        date: new Date("1/29/24"),
        image: require("./images/TIBoardPrint.png"),
        description:
          "Our first verifiably modified build, shown through a print message on boot read through screen.",
      }}
    />
  <FourUp data={week16} />
  <FourUp data={week11} />
  <FourUp data={week10} />
  <FourUp data={week9} />
  <FourUp data={week8} />
  <Post
      data={{
        date: new Date("10/18/23"),
        image: require("./images/TIBoardImage.png"),
        description:
          "Built TI Image",
      }}
    />
  <Post
      data={{
        date: new Date("9/24/23"),
        image: require("./images/domain.png"),
        description:
          "Our first attempt at creating a domain model for the project. ",
      }}
    />
    <FourUp data={week4} />
    <Post
      data={{
        date: new Date("9/16/23"),
        image: require("./images/hardware.png"),
        description:
          "Our first attempt at creating a diagram describing the hardware/OS setup of our project. ",
      }}
    />
    <FourUp data={week3} />
  </>
);

//go to the current week, hit update hours, inspect, console, copy the object and paste it here
export const cacheHours: any = [
<<<<<<< HEAD
  {3: '6', 4: '8', 5: '5', 6: '6', 7: '9', 8: '7', 9: '9', 10: '6', 11: '8', 12: '6', 13: '0', 14: '7', 15: '8', 16: '0', 17: '4', 18: '5', 19: '', 20: '', 21: '', 22: '', 23: '', 24: '', 25: '', 26: '', 27: '', 28: '', 29: '', Week: 'Samantha'},
  {3: '9', 4: '9', 5: '10', 6: '6', 7: '12', 8: '8', 9: '6', 10: '8', 11: '12', 12: '6', 13: '0', 14: '6', 15: '8', 16: '3', 17: '3', 18: '', 19: '', 20: '', 21: '', 22: '', 23: '', 24: '', 25: '', 26: '', 27: '', 28: '', 29: '', Week: 'Owen'},
  {3: '6', 4: '10', 5: '10', 6: '7', 7: '9', 8: '5', 9: '11', 10: '6', 11: '8', 12: '6', 13: '0', 14: '6', 15: '8', 16: '2', 17: '3', 18: '6', 19: '', 20: '', 21: '', 22: '', 23: '', 24: '', 25: '', 26: '', 27: '', 28: '', 29: '', Week: 'Ash'},
  {3: '7', 4: '7', 5: '8', 6: '8', 7: '10', 8: '6', 9: '21', 10: '12', 11: '8', 12: '6', 13: '0', 14: '7', 15: '8', 16: '4', 17: '8', 18: '6', 19: '', 20: '', 21: '', 22: '', 23: '', 24: '', 25: '', 26: '', 27: '', 28: '', 29: '', Week: 'Will'},
  {3: '5', 4: '6', 5: '3.5', 6: '6', 7: '8', 8: '12', 9: '6', 10: '6', 11: '8', 12: '5', 13: '0', 14: '6', 15: '8', 16: '2', 17: '6', 18: '2', 19: '', 20: '', 21: '', 22: '', 23: '', 24: '', 25: '', 26: '', 27: '', 28: '', 29: '', Week: 'Zach'}
=======
  {
    "3": "6",
    "4": "8",
    "5": "5",
    "6": "6",
    "7": "9",
    "8": "7",
    "9": "9",
    "10": "6",
    "11": "8",
    "12": "6",
    "13": "0",
    "14": "7",
    "17": "0",
    "18": "",
    "19": "",
    "20": "",
    "21": "",
    "22": "",
    "23": "",
    "24": "",
    "25": "",
    "26": "",
    "27": "",
    "28": "",
    "29": "",
    "30": "",
    "1516": "8",
    "Week": "Samantha"
  },
  {
    "3": "9",
    "4": "9",
    "5": "10",
    "6": "6",
    "7": "12",
    "8": "8",
    "9": "6",
    "10": "8",
    "11": "12",
    "12": "6",
    "13": "0",
    "14": "6",
    "17": "3",
    "18": "3",
    "19": "",
    "20": "",
    "21": "",
    "22": "",
    "23": "",
    "24": "",
    "25": "",
    "26": "",
    "27": "",
    "28": "",
    "29": "",
    "30": "",
    "1516": "8",
    "Week": "Owen"
  },
  {
    "3": "6",
    "4": "10",
    "5": "10",
    "6": "7",
    "7": "9",
    "8": "5",
    "9": "11",
    "10": "6",
    "11": "8",
    "12": "6",
    "13": "0",
    "14": "6",
    "17": "",
    "18": "",
    "19": "",
    "20": "",
    "21": "",
    "22": "",
    "23": "",
    "24": "",
    "25": "",
    "26": "",
    "27": "",
    "28": "",
    "29": "",
    "30": "",
    "1516": "8",
    "Week": "Ash"
  },
  {
    "3": "7",
    "4": "7",
    "5": "8",
    "6": "8",
    "7": "10",
    "8": "6",
    "9": "21",
    "10": "12",
    "11": "8",
    "12": "6",
    "13": "0",
    "14": "7",
    "17": "",
    "18": "",
    "19": "",
    "20": "",
    "21": "",
    "22": "",
    "23": "",
    "24": "",
    "25": "",
    "26": "",
    "27": "",
    "28": "",
    "29": "",
    "30": "",
    "1516": "8",
    "Week": "Will"
  },
  {
    "3": "5",
    "4": "6",
    "5": "3.5",
    "6": "6",
    "7": "8",
    "8": "12",
    "9": "6",
    "10": "6",
    "11": "8",
    "12": "5",
    "13": "0",
    "14": "6",
    "17": "",
    "18": "",
    "19": "",
    "20": "",
    "21": "",
    "22": "",
    "23": "",
    "24": "",
    "25": "",
    "26": "",
    "27": "",
    "28": "",
    "29": "",
    "30": "",
    "1516": "8",
    "Week": "Zach"
  }
>>>>>>> 08ac3add73c7d7ac5c0b6146e938e76509ba9589
];