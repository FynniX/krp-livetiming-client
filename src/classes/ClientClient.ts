import {ClientWrapper} from "krp-node-wrapper";
import {KartDataT} from "krp-node-wrapper/dist/types/KartDataT";
import {KartEventT} from "krp-node-wrapper/dist/types/KartEventT";
import {KartLapT} from "krp-node-wrapper/dist/types/KartLapT";
import {KartSessionT} from "krp-node-wrapper/dist/types/KartSessionT";
import {KartSplitT} from "krp-node-wrapper/dist/types/KartSplitT";

export type ClientUpdateDataT =
  KartDataT
  | KartEventT
  | KartLapT
  | KartSessionT
  | KartSplitT

export class ClientClient {
  private readonly wrapper: ClientWrapper;

  constructor(port: number, logging: boolean) {
    this.wrapper = new ClientWrapper(port, logging);
  }

  handleUpdate(cb: (type: string, data: ClientUpdateDataT) => void) {
    this.wrapper.on('update', cb);
  }
}