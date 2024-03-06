import fs from "node:fs";
import path from "node:path";

const loc = path.join(process.cwd(), "data", "feedbacks.json");

export const readFeedbacks = () => {
  const fileReader = fs.readFileSync(loc);
  const feedbacks = JSON.parse(fileReader);

  return feedbacks;
};

const handler = (req, res) => {
  if (req.method === "POST") {
    const feedbacks = readFeedbacks();
    feedbacks.push(req.body);

    fs.writeFileSync(loc, JSON.stringify(feedbacks));

    res.status(200).json({
      message: 'Welcome to api route "/api/feedback"',
    });
  } else if (req.method === "GET") {
    const feedbacks = readFeedbacks();

    res.status(200).json({
      count: feedbacks.length,
      data: feedbacks,
    });
  }
};

export default handler;
