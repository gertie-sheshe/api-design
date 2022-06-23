import { User } from "./user.model.js";

export const fetchUser = (req, res) => {
  res.status(200).json({ data: req.user });
};

export const createUser = async (req, res) => {
  if (!(req.body.email && req.body.password)) {
    return res.status(400).send({ message: "Provide email and password" });
  }

  try {
    const user = await User.create(req.body);
    return res.status(200).json({ data: user });
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await returnUpdatedUser(userId, req.body);
    res.status(200).json({ data: user });
  } catch (err) {
    console.error(err);
    res.status(400).end();
  }
};

// Sub Functions
const returnUpdatedUser = async (id, requestBody) => {
  const user = await User.findByIdAndUpdate(id, requestBody, {
    new: true,
  })
    .lean()
    .exec();

  return user;
};
