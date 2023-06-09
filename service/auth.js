const sessionMap = new Map();

function setUser(id, user) {
    sessionMap.set(id, user)
}

function getUser(id) {
    return sessionMap.get(id)
}

module.exports = { setUser, getUser };