const fs = require('fs')
const getPath =       require('../utils/getPath')
const res =           require('../utils/res')
const shellSync = require('../utils/shell')

// CALL DOCUMENTATION:
// > result = {}

function createRemovePackage(params,
  // default option passed to allow testing
  docker) {

  return async function removePackage(req) {

    const PACKAGE_NAME = req[0]
    const DELETE_VOLUMES = req[1] || false
    const DOCKERCOMPOSE_PATH = getPath.DOCKERCOMPOSE(PACKAGE_NAME, params)
    const PACKAGE_REPO_DIR_PATH = getPath.PACKAGE_REPO_DIR(PACKAGE_NAME, params)

    if (!fs.existsSync(DOCKERCOMPOSE_PATH)) {
      throw Error('No docker-compose found with at: ' + DOCKERCOMPOSE_PATH)
    }

    // Remove container (and) volumes
    await docker.compose.down(DOCKERCOMPOSE_PATH, {volumes: Boolean(DELETE_VOLUMES)})
    // Remove DNP folder and files
    await shellSync('rm -r ' + PACKAGE_REPO_DIR_PATH)

    return res.success('Removed package: ' + PACKAGE_NAME)

  }
}


module.exports = createRemovePackage
