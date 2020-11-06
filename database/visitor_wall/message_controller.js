const Message = require('./message_model');

create = (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({success: false, error: `You must provide a complete Message`});
    }

    const message = new Message(body);
    if (!message) {
        return res.status(400).json({success: false, error: err});
    }

    message.save()
        .then(() => {
            return res.status(201).json({
                succes: true,
                id: message._id,
                message: 'Message added!',
            })
        })
        .catch(error => {
            return res.status(400).json({error, message: 'Failed to add message.'})
        });
}

read = async (req, res) => {
    await Message.find({}, (err, messages) => {
        if (err) {
            return res.status(400).json({success: false, error: err});
        }

        if (!messages.length) {
            return res.status(404).json({success: false, error: 'Message not found.'});
        }

        res.set('Access-Control-Allow-Origin', '*');
        return res.status(200).json({success: true, data: messages});
    }).catch(err => console.log(err));
}

read_id = async (req, res) => {
    await Message.findOne({_id: req.params.id}, (err, message) => {
        if (err) {
            return res.status(400).json({success: false, error: err});
        }

        res.set('Access-Control-Allow-Origin', '*');
        return res.status(200).json({sucess: true, data: message});
    }).catch(err => console.log(err));
}

module.exports = {
    create,
    read,
    read_id,
};