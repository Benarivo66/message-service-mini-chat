const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res) => {
    const authHeader = req.headers.authorization;

    const token = authHeader.split(' ')[1];

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!decodedToken) {
        return res.status(401).send({ message: 'Unauthorized' });
      };

    return decodedToken;  
}