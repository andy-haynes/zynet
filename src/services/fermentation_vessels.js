const _ = require('lodash');

const { fermentation_vessels } = require('../static_data/fermentation_vessels.json');

module.exports = {
  getVessel(vesselId) {
    return _.find(fermentation_vessels, { id: vesselId });
  },

  listVessels() {
    return fermentation_vessels;
  },

  listVesselsByIds(vesselIds) {
    return _.filter((fermentation_vessels), (vessel) => vesselIds.includes(vessel.id));
  },
};
