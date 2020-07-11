import { Mission } from '../core/mission';

export interface Hero {
  id: string;
  name: string;
  alias: string;
  shortBio: string;
  missions: Mission[];
}
