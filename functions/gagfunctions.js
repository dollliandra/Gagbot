const assignGag = (userID, gagtype = "ball") => {
    if (process.gags == undefined) { process.gags = {} }
    process.gags[userID] = gagtype
}

const getGag = (userID) => {
    if (process.gags == undefined) { process.gags = {} }
    return process.gags[userID]
}

const deleteGag = (userID) => {
    if (process.gags == undefined) { process.gags = {} }
    delete process.gags[userID]
}

exports.assignGag = assignGag;
exports.getGag = getGag;
exports.deleteGag = deleteGag;