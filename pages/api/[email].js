import { readFeedbacks } from "./feedback";

const handler = (req, res) => {
  const { email } = req.query;

  const feedbacks = readFeedbacks();

  const searcheedFeedback = feedbacks.find((el) => el.enteredEmail === email);

  res.status(200).json({
    message: "Dynamic buddy",
    searcheedFeedback,
  });
};

export default handler;
