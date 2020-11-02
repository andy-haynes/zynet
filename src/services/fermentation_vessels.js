const _ = require('lodash');

const { fermentation_vessels } = require('../static_data/fermentation_vessels.json');

module.exports = {
  getVessel(vesselId) {
    return _.first(fermentation_vessels, { id: vesselId });
  },

  getVessels() {
    return fermentation_vessels;
  },

  getVesselsByIds(vesselIds) {
    return _.filter((fermentation_vessels), (vessel) => vesselIds.includes(vessel.id));
  },
};
