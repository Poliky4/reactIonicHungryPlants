import Measurement from "./Measurement";

export default interface Plant {
  id: string,
  name: string,
  breed: string,
  latest_measurement: Measurement
}