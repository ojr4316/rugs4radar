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
  risks: [ "Some of us are not caught up due to hardware problems"
  ],
  plans: ["Make sure everyone is caught up before going forward"],
  needs: [
  ],
};

//update this line with the most recent fourup as its data
export const currentFourUp = <FourUp data={week8} />;


/* Contains ALL resources made, four ups, and project updates */
export const news = (
  <>
  {/* Add news under here */}
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
  {
      "3": "6",
      "4": "8",
      "5": "2",
      "6": "3",
      "7": "9",
      "8": "7",
      "9": "",
      "10": "",
      "11": "",
      "12": "",
      "13": "",
      "14": "",
      "15": "",
      "Week": "Samantha"
  },
  {
      "3": "9",
      "4": "9",
      "5": "10",
      "6": "6",
      "7": "12",
      "8": "5",
      "9": "",
      "10": "",
      "11": "",
      "12": "",
      "13": "",
      "14": "",
      "15": "",
      "Week": "Owen"
  },
  {
      "3": "6",
      "4": "10",
      "5": "10",
      "6": "7",
      "7": "9",
      "8": "2",
      "9": "",
      "10": "",
      "11": "",
      "12": "",
      "13": "",
      "14": "",
      "15": "",
      "Week": "Ash"
  },
  {
      "3": "7",
      "4": "7",
      "5": "8",
      "6": "8",
      "7": "10",
      "8": "6",
      "9": "3",
      "10": "",
      "11": "",
      "12": "",
      "13": "",
      "14": "",
      "15": "",
      "Week": "Will"
  },
  {
      "3": "5",
      "4": "6",
      "5": "3.5",
      "6": "6",
      "7": "8",
      "8": "12",
      "9": "",
      "10": "",
      "11": "",
      "12": "",
      "13": "",
      "14": "",
      "15": "",
      "Week": "Zach"
  }
];