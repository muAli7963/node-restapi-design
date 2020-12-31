const getOne = model => async (req, res) =>{
	const id = req.params.id;
	const userId = req.user_id;

	const doc = await model.findOne({_id: id, createdBy: uerId}).exec();

	if(!doc){
		return res.status(404).end()
	}

	res.status(200).json({data: doc})
}

const getMany = model => async (req, res) => {
    const doc = await model.find({createdBy: req.user._id}).exec();

    res.status(200).json({data: doc})
}

const createOne = model => async (req, res) => {
	const doc = await model.create({...req.body, createdBy: req.user._id}).exec()
	res.status(200).json({data: doc})
}

const updateOne = model => async (req, res) => {
      const doc = await model.findOneAndUpdate({_id: req.params.id, createdBy: req.user._id}, req.body, {new: true}).exec()

      if(!doc) {
      	return res.status(400).end();
      }

      res.status(200).json({data: doc})
}

const removeOne = model => async (req,res) => {
	const doc = await model.findOneAndRemove({_id: req.params.id, createdBy: req.user._id}).exec()

	if(!doc){
		return res.status(400).end()
	}

	res.status(200).json({data: doc})
}