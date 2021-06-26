module.exports = {
    create(req, res) {

        let roomId = 123213;

        res.redirect(`/room/${roomId}`);

    }
}