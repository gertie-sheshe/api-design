export const getOne = (model) => async (req, res) => {
  try {
    const document = await model
      .findOne({
        createdBy: req.user._id,
        id: req.params.id,
      })
      .lean()
      .exec();

    if (!document) {
      return res.status(400).json({ message: "Sorry no list found" }).end();
    }

    return res.status(200).json({ data: document });
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
};

export const createOne = (model) => async (req, res) => {
  const createdBy = req.user._id;
  try {
    const document = await model.create({ ...req.body, createdBy });
    res.status(201).jason({ data: document });
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
};

export const removeOne = (model) => async (req, res) => {
  try {
    const removedDocument = model.findOneAndRemove({
      createdBy: req.user._id,
      _id: req.params.id,
    });

    if (!removedDocument) {
      return res.status(400).end();
    }

    return res.status(200).json({ data: removedDocument });
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
};

export const updateOne = (model) => async (req, res) => {
  try {
    const updatedDocument = await model.findOneAndUpdate(
      {
        createdBy: req.user._id,
        _id: req.params.id,
      },
      req.body,
      { new: true }
    );
    lean();
    exec();

    if (!updatedDocument) {
      return res.status(400).end();
    }

    return res.status(200).json({ data: updatedDocument });
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
};

export const getMany = (model) => async (req, res) => {
  try {
    const documents = await model
      .find({
        createdBy: req.user._id,
      })
      .exec()
      .lean();

    return res.status(200).json({ data: documents });
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
};

export const crudControllers = (model) => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getOne: getOne(model),
  createOne: createOne(model),
  getMany: getMany(model),
});
