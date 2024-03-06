import axios from "axios";
import fs from "node:fs";
import path from "node:path";

const Feedbacks = ({ feedbacks }) => {
  return (
    <>
      <ul>
        {feedbacks.map((el) => (
          <li key={el.enteredEmail}>{el.enteredFeedback}</li>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps = async () => {
  // let feedbacks;
  // const res = await axios({
  //   method: "GET",
  //   url: "http://localhost:3000/api/feedback",
  // }).then(
  //   (data) => {
  //     feedbacks = data.data.data;
  //   },
  //   (err) => {
  //     console.log("ERROR FETCHING DATA");
  //   }
  // );

  const filePath = path.join(process.cwd(), "data", "feedbacks.json");
  const fileData = fs.readFileSync(filePath);
  const feedbacks = JSON.parse(fileData);

  return { props: { feedbacks } };
};

export default Feedbacks;
