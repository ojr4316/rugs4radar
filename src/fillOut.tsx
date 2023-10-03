import FourUp from "./FourUp";
import Post from "./Post";

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

export const currentFourUp = <FourUp data={week4} />;

export function getRecentHours(hrs: any) {
  let currentWeek = 15;
  console.log(hrs[0][currentWeek]);
  while (!hrs[0][currentWeek]) {
    currentWeek--;
  }

  let hours: any = {};
  hrs.forEach((c: any) => {
    const name = c.Week;
    hours[name] = c[currentWeek.toString()];
  });
  return hours;
}

export function getTotalHours(hrs: any) {
  let hours: any = {};
  hrs.forEach((c: any) => {
    const name = c.Week;
    let total = 0;
    for (let week in c) {
      if (week !== "Week" && c[week]) {
        total += parseFloat(c[week]);
      }
    }
    hours[name] = total;
  });
  return hours;
}

export function buildHours(hours: any, label = "Recent Hours") {
  let tsx = [<p className="hours-label">{label}</p>];
  for (let h in hours) {
    if (hours[h] > 0) {
      tsx.push(
        <p className="hours-text">
          {h} - {hours[h]} hours
        </p>
      );
    } else {
      tsx.push(<p className="hours-text">{h} - None this week</p>);
    }
  }
  return tsx;
}

/* Contains ALL resources made, four ups, and project updates */
export const news = (
  <>
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
