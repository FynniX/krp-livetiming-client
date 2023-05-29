import {io, Socket} from "socket.io-client";
import {EventT} from "./types/EventT";
import {EntryT} from "./types/EntryT";
import {EntryRemoveT} from "./types/EntryRemoveT";
import {SessionT} from "./types/SessionT";
import {SessionStatusT} from "./types/SessionStatusT";
import {WeatherT} from "./types/WeatherT";
import {SessionEntryT} from "./types/SessionEntryT";
import {DriverStatusT} from "./types/DriverStatusT";
import {BestLapT} from "./types/BestLapT";
import {LastLapT} from "./types/LastLapT";
import {PenaltyT} from "./types/PenaltyT";
import {LapT} from "./types/LapT";
import {SplitT} from "./types/SplitT";
import {SpeedT} from "./types/SpeedT";
import {ClassificationT} from "./types/ClassificationT";
import {ChallengeDataT} from "./types/ChallengeDataT";
import {TrackDataT} from "./types/TrackDataT";
import {TrackSegmentT} from "./types/TrackSegmentT";
import {TrackPositionT} from "./types/TrackPositionT";
import {ContactT} from "./types/ContactT";

export type UpdateDataT =
  EventT
  | EntryT
  | EntryRemoveT
  | SessionT
  | SessionStatusT
  | WeatherT
  | SessionEntryT
  | DriverStatusT
  | BestLapT
  | LastLapT
  | PenaltyT
  | LapT
  | SplitT
  | SpeedT
  | ClassificationT
  | ChallengeDataT
  | TrackDataT
  | TrackSegmentT
  | TrackPositionT
  | ContactT

class Client {
  private readonly socket: Socket;

  constructor(url: string) {
    this.socket = io(url);
  }

  handleConnect(cb: () => void) {
    this.socket.on('connect', cb);
  }

  handleDisconnect(cb: () => void) {
    this.socket.on('disconnect', cb);
  }

  handleUpdate(cb: (type: string, data: UpdateDataT) => void) {
    this.socket.on('update', cb);
  }
}

export default Client;