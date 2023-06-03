import {io, Socket} from "socket.io-client";
import {EventT} from "krp-node-wrapper/dist/types/EventT";
import {EntryT} from "krp-node-wrapper/dist/types/EntryT";
import {EntryRemoveT} from "krp-node-wrapper/dist/types/EntryRemoveT";
import {SessionT} from "krp-node-wrapper/dist/types/SessionT";
import {SessionStatusT} from "krp-node-wrapper/dist/types/SessionStatusT";
import {WeatherT} from "krp-node-wrapper/dist/types/WeatherT";
import {SessionEntryT} from "krp-node-wrapper/dist/types/SessionEntryT";
import {DriverStatusT} from "krp-node-wrapper/dist/types/DriverStatusT";
import {BestLapT} from "krp-node-wrapper/dist/types/BestLapT";
import {LastLapT} from "krp-node-wrapper/dist/types/LastLapT";
import {PenaltyT} from "krp-node-wrapper/dist/types/PenaltyT";
import {LapT} from "krp-node-wrapper/dist/types/LapT";
import {SplitT} from "krp-node-wrapper/dist/types/SplitT";
import {SpeedT} from "krp-node-wrapper/dist/types/SpeedT";
import {ClassificationT} from "krp-node-wrapper/dist/types/ClassificationT";
import {ChallengeDataT} from "krp-node-wrapper/dist/types/ChallengeDataT";
import {TrackDataT} from "krp-node-wrapper/dist/types/TrackDataT";
import {TrackSegmentT} from "krp-node-wrapper/dist/types/TrackSegmentT";
import {TrackPositionT} from "krp-node-wrapper/dist/types/TrackPositionT";
import {ContactT} from "krp-node-wrapper/dist/types/ContactT";

export type ServerUpdateDataT =
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

export class ServerClient {
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

  handleUpdate(cb: (type: string, data: ServerClientDataT) => void) {
    this.socket.on('update', cb);
  }
}